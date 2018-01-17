/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // URL prefix to proceed
    _config: { prefix: '/api/helpdesk' },
    //Validate Asset
    validateIsAdmin: function (req, res) {
        var queryAllUser = User.find();
        queryAllUser.where({ 'user_id': req.query.userId, 'user_role': 1 });
        queryAllUser.exec(function callBack(err, results) {
            if (err) {
                return res.json({ 'success': false, 'message': err });
            }
            if (Object.keys(results).length == 0) {
                return res.json({ 'success': false, 'message': 'Given UserId is not an Admin' });
            }
            res.json({ 'success': true, 'message': 'Given UserId is an Admin', results });
        });
    },

};

