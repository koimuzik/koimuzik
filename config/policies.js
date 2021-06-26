/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {
    '*': true,
    'User/UserController': {
        '*': ['userPolices'],
        login: true,
        register: true
    },
    'Facebook/FacebookController': {
        '*': ['userPolices'],
        insertAccount: true
    }
};
