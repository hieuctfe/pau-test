import {moduleName  , moduleStore} from './_store'
import moduleRouter from './_router'
import store from '@/store'

const STORE_KEY = '$_'+ moduleName;

if (!(STORE_KEY in store._modules.root._children)) {
	store.registerModule(STORE_KEY, moduleStore);
}
export default moduleRouter
