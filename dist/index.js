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
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
export default function ScrollToTop(_a) {
    var image = _a.image, width = _a.width, height = _a.height, right = _a.right, bottom = _a.bottom, isMoveForHeight = _a.isMoveForHeight;
    var _b = useState(false), isTop = _b[0], setIsTop = _b[1];
    // isTop의 상태를 false로 정의하는 것 , isTop의 상태를 setIsTop으로 바꿔줄수도 있음
    var handleClick = function () {
        window.scrollTo({
            top: isMoveForHeight ? window.pageYOffset - window.innerHeight : 0,
            // 현재 높이 - 페이지내 전체 높이, isMoveForHeight가 실행되면 현재 높이만큼 올라감
            behavior: "smooth",
            // auto와 smooth 2가지가 있고 auto 지정시 부자연스럽게 스크롤되기 때문에 자연스러운 smooth로 설정
        });
    };
    var checkIsTop = function () {
        setIsTop(window.pageYOffset === 0);
        // 현재 위치가 0이면 true로 상태 변경 , 0이 아니면 false로 상태 변경
    };
    // checkIsTop은 스크롤할때마다 계속 렌더링 되야하는 함수, 그걸 useEffect가 하게해준다.
    useEffect(function () {
        // useEffect는 렌더링 될때 마다 특정 상황에서만 함수가 일어날수 있도록 제어해준다.
        (function () {
            window.addEventListener("scroll", checkIsTop);
        })(); // 브라우저 전역에서 스크롤이벤트 발생시 checkIsTop 함수 실행됨
        return function () {
            window.removeEventListener("scroll", checkIsTop);
        };
    }); // 브라우저 전역에서 스크롤이벤트 없으면 checkIsTop remove됨
    return (_jsx(_Fragment, { children: !isTop && ( // 조건부 렌더링, isTop이 true로 상태가 바뀌면 버튼이 보이지않음
        _jsx(TopBtn, __assign({ onClick: handleClick, right: right, bottom: bottom }, { children: _jsx(_Fragment, { children: image ? (_jsx(Img, { src: image, width: width, height: height }) // 사용자가 이미지 변경할수있게 해주기
                ) : (
                // 삼항연산자, image가 없으면 fontawesome
                _jsx(FontAwesomeIcon, { icon: faArrowUp, size: "2x", style: {
                        width: "50px",
                        padding: "10px 0",
                        border: "2px solid #000",
                        background: "#fff",
                        borderRadius: "50%",
                    } })) }) }))) }));
}
var TopBtn = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  // styled-components\uC5D0\uC11C props\uB97C \uBC1B\uC744\uB54C <{}>\uB97C \uC0AC\uC6A9\uD55C\uB2E4.\n  position: fixed;\n  right: ", "; // \uC0BC\uD56D\uC5F0\uC0B0\uC790, ", " \uC73C\uB85C props \uAC00\uC838\uC640\uC11C \uC788\uC73C\uBA74 \uC0AC\uC6A9\uC790 \uC124\uC815\uAC12 \uC2E4\uD589 \uC5C6\uC73C\uBA74 \uB514\uD3F4\uD2B8\uAC12 \uC2E4\uD589\n  bottom: ", ";\n  z-index: 1000; // \uB514\uD3F4\uD2B8\uAC12 :1, 1000\uC744 \uC8FC\uB294\uAC83\uC740 \uB808\uC774\uC5B4\uC911 \uC81C\uC77C \uB9E8\uC704\uB85C \uC62C\uB77C\uC640\uC11C \uC5B4\uB514\uC11C\uB4E0 \uB098\uC624\uAC8C\uB054 \uD574\uC8FC\uB294 \uC124\uC815\n  cursor: pointer; // button\uC5D0 \uC2A4\uD0C0\uC77C\uC904\uB54C\uB294 \uB514\uD3F4\uD2B8\uAC12\uC218\uC900\uC774\uB2C8 \uAF2D \uB123\uC5B4\uC8FC\uAE30\n"], ["\n  // styled-components\uC5D0\uC11C props\uB97C \uBC1B\uC744\uB54C <{}>\uB97C \uC0AC\uC6A9\uD55C\uB2E4.\n  position: fixed;\n  right: ", "; // \uC0BC\uD56D\uC5F0\uC0B0\uC790, ", " \uC73C\uB85C props \uAC00\uC838\uC640\uC11C \uC788\uC73C\uBA74 \uC0AC\uC6A9\uC790 \uC124\uC815\uAC12 \uC2E4\uD589 \uC5C6\uC73C\uBA74 \uB514\uD3F4\uD2B8\uAC12 \uC2E4\uD589\n  bottom: ", ";\n  z-index: 1000; // \uB514\uD3F4\uD2B8\uAC12 :1, 1000\uC744 \uC8FC\uB294\uAC83\uC740 \uB808\uC774\uC5B4\uC911 \uC81C\uC77C \uB9E8\uC704\uB85C \uC62C\uB77C\uC640\uC11C \uC5B4\uB514\uC11C\uB4E0 \uB098\uC624\uAC8C\uB054 \uD574\uC8FC\uB294 \uC124\uC815\n  cursor: pointer; // button\uC5D0 \uC2A4\uD0C0\uC77C\uC904\uB54C\uB294 \uB514\uD3F4\uD2B8\uAC12\uC218\uC900\uC774\uB2C8 \uAF2D \uB123\uC5B4\uC8FC\uAE30\n"])), function (_a) {
    var right = _a.right;
    return right
        ? right
        : "90px";
}, {}, function (_a) {
    var bottom = _a.bottom;
    return (bottom ? bottom : "50px");
});
var Img = styled.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n"])), function (_a) {
    var width = _a.width;
    return (width ? width : "50px");
}, function (_a) {
    var height = _a.height;
    return (height ? height : "50px");
});
var templateObject_1, templateObject_2;
