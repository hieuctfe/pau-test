<?php

namespace App\Http\Controllers;

use App\Question;
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
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string',
            'type' => 'required|string',
            //'question_id' => 'required',
            'phone_number'=> 'required'
        ]);
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'type'      =>$request->type,
            'question_id' =>$request->question_id,
            'phone_number'=>$request->phone_number,
            'content_option'=>$request->content_option,
            'address'=>$request->address,

        ]);
        $user->save();
        return response()->json([
            'status'    => true,
            'message'   => 'Successfully created user!'
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
        if(!Auth::attempt($credentials))
            return response()->json([
                'status'    => false,
                'message'   => 'Unauthorized'
            ], 401);
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->setSeconds(3600);
        $token->save();
        return response()->json([
            'status'        => true,
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
            'status'  => true,
            'message' => 'Successfully logged out'
        ], 200);
    }


    public function user(Request $request)
    {

        return response()->json($request->user());
    }

    public function loadQuestion()
    {
        $question = Question::all()->toArray();
        return response()->json([
            'status'  => true,
            'data' => $question]);

    }
}
