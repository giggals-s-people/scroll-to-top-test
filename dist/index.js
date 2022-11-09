var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
export default function ScrollToTop(_a) {
    var image = _a.image, width = _a.width, height = _a.height, right = _a.right, bottom = _a.bottom, isMoveForHeight = _a.isMoveForHeight;
    var _b = useState(false), isTop = _b[0], setIsTop = _b[1];
    var handleClick = function () {
        window.scrollTo({
            top: isMoveForHeight ? window.pageYOffset - window.innerHeight : 0,
            behavior: 'smooth',
        });
    };
    var checkIsTop = function () {
        setIsTop(window.pageYOffset === 0);
    };
    useEffect(function () {
        ;
        (function () {
            window.addEventListener('scroll', checkIsTop);
        })();
        return function () {
            window.removeEventListener('scroll', checkIsTop);
        };
    });
    return (_jsx(_Fragment, { children: !isTop && (_jsx(TopBtn, __assign({ onClick: handleClick, right: right, bottom: bottom }, { children: _jsx(_Fragment, { children: image ? (_jsx(Img, { src: image, width: width, height: height })) : (_jsx(FontAwesomeIcon, { icon: faArrowUp, size: "2x", style: {
                        width: '50px',
                        padding: '10px 0',
                        border: '2px solid #000',
                        background: '#fff',
                        borderRadius: '50%',
                    } })) }) }))) }));
}
var TopBtn = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  right: ", ";\n  bottom: ", ";\n  z-index: 1000;\n  cursor: pointer;\n"], ["\n  position: fixed;\n  right: ", ";\n  bottom: ", ";\n  z-index: 1000;\n  cursor: pointer;\n"])), function (_a) {
    var right = _a.right;
    return (right ? right : '90px');
}, function (_a) {
    var bottom = _a.bottom;
    return (bottom ? bottom : '50px');
});
var Img = styled.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n"])), function (_a) {
    var width = _a.width;
    return (width ? width : '50px');
}, function (_a) {
    var height = _a.height;
    return (height ? height : '50px');
});
var templateObject_1, templateObject_2;
