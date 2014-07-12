/**
 * Created by lpt1 on 2014-04-28.
 */
define(function(){

    var TypeCheck = {};

    var toString = Object.prototype.toString;

    TypeCheck.isObject = function isObject(o){
        return toString.call(o) == "[object Object]";
    };

    TypeCheck.isFunction = function isFunction(o){
        return toString.call(o) == "[object Function]";
    };

    TypeCheck.isArray = Array.isArray || function isArray(o){
        return toString.call(o) == "[object Array]";
    };

    TypeCheck.isString = function isString(o){
        return toString.call(o) == "[object String]";
    };

    TypeCheck.isNumber = function isNumber(o){
        return toString.call(o) == "[object Number]";
    };

    TypeCheck.isBoolean = function isBoolean(o){
        return toString.call(o) == "[object Boolean]";
    };

    TypeCheck.isRegExp = function isRegExp(o){
        return toString.call(o) == "[object RegExp]";
    };

    TypeCheck.isDate = function isDate(o){
        return toString.call(o) == "[object Date]";
    };

    TypeCheck.isDefined = function isDefined(o){
        return (typeof o != "undefined") && (o != undefined);
    };

    TypeCheck.isUndefined = function isUndefined(o){
        return !TypeCheck.isDefined(o);
    };

    return TypeCheck;
});