'use strict'
const User = use('App/Models/User');

class UserController {

     index({view}) {
       return view.render('welcome');
    }
    pot({request, response}){
        const info = request.only(['username', 'email', 'password']);

        const user = new User();
        user.username = info.username;
        user.email = info.email,
        user.password = info.password
        user.save();
        return response.json(user);
    }
   async gets({params, view, request, response}){
        const user = await User.find(params.id);
         return view.render('update', {user:user});
    }
    async getstore({params, request, response}){
        const user = await User.find(params.id)
        const use = request.only(['username', 'email', 'password']);
        user.username = use.username;
        user.email = use.email;
        user.password = use.password
        await user.save();
        return response.redirect('/');
    }
     
    async del({params, request, response}){
        const user = await User.find(params.id);
        await user.delete();
        return response.redirect('/');

    }
}

module.exports = UserController
