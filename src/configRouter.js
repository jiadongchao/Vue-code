/**
 * Created by Administrator on 2017/1/4.创建路由文件
 */
import foo from './components/foo'
import bar from './components/bar'

import home from './components/home'
import search from './components/search'
import message from './components/message'
import me from './components/me'



export default function configRouter(router){
    router.map({
        '/foo':{component:foo},
        '/bar':{component:bar},
        '/home':{component:home},
        '/search':{component:search},
        '/message':{component:message},
        '/me':{component:me}
    })
}