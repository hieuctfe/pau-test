<?php

namespace App\Http\Controllers;

use App\Question;
use App\MSG91;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email',
            'password' => 'required|string',
            'type' => 'required|string',
            //'question_id' => 'required',
            'phone_number' => 'required'
        ]);

        $req = $request->all();
        // verified account
        $users = User::where('email', $req['email'])->where('is_verified', 1)->first();
        if ($users) {
            $request->validate([
                'email' => 'unique:users',
            ]);
        }
        // not verified account
        $users = User::where('email', $req['email'])->where('is_verified', 0)->first();
        $param = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'type' => $request->type,
            'question_id' => $request->question_id,
            'phone_number' => $request->phone_number,
            'content_option' => $request->content_option,
            'address' => $request->address,
            'is_verified' => 0
        ];
        if ($users) {
            User::where('id', $users->id)->update($param);
        } else {
            $user = new User($param);
            $user->save();
        }
        // sent otp and save to session


        return response()->json([
            'status' => true,
            'message' => 'Please verified account'
        ], 200);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);
        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials) || $request->user()->is_verified == 0)
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized'
            ], 401);
        $user = $request->user();
//        return response()->json($user);
        try {
            $tokenResult = $user->createToken('Personal Access Token');
        }
        catch (\Exception $e) {
            return $e->getMessage();
        }
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->setSeconds(3600);
        $token->save();
        return response()->json([
            'status' => true,
            'token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ], 200);
    }


    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'status' => true,
            'message' => 'Successfully logged out'
        ], 200);
    }


    public function user(Request $request)
    {

        return response()->json($request->user());
    }

    public function verifyAccount(Request $request)
    {
        $response = array();
        $userId = $request->email;
        $users = User::where('email', $userId)->first();
        if ($users == "" || $users == null) {
            $response['status'] = false;
            $response['message'] = 'OTP is not valid';
        } else {
            $OTP = $users->otp;
            $enteredOtp = $request->otp;
            if ($OTP == $enteredOtp) {
                User::where('email', $userId)->update(['is_verified' => 1]);
                $response['status'] = true;
                $response['message'] = "this account is verified";
            } else {
                $response['status'] = false;
                $response['message'] = "OTP is incorrect";
            }
        }
        return response()->json($response, 200);
    }

    public function sendOtp(Request $request)
    {
        $response = array();
        $userId = $request->email;

        $users = User::where('email', $userId)->first();
        if (isset($users['phone_number']) && $users['phone_number'] == "") {
            $response['message'] = 'Invalid mobile number';
            $response['status'] = false;
        } else {
            $otp = rand(1000, 9999);
            $MSG91 = new MSG91();
            $msg91Response = $MSG91->sendSMS($otp, $users['phone_number']);
            if ($msg91Response['error']) {
                $response['status'] = false;
                $response['message'] = $msg91Response['message'];
            } else {
                User::where('email', $userId)->update(['otp' => $otp]);
                $response['message'] = 'Your OTP is created.';
                $response['status'] = true;
            }
        }
        return response()->json($response, 200);
    }


    public function loadQuestion()
    {
        $question = Question::all()->toArray();
        return response()->json([
            'status' => true,
            'data' => $question]);

    }
}
