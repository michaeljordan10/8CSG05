"use strict";
(self.webpackChunkoauthservice_frontend = self.webpackChunkoauthservice_frontend || []).push([
    [285], {
        18691: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            a(9950);
            const o = a.p + "static/media/Fingerprint.86c1faed5789386944a3a100f29cf1c7.svg"
        },
        25037: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            a(9950);
            const o = a.p + "static/media/RefreshIcon.874efff6da316d5687c409d5d2763bbe.svg"
        },
        69517: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            a(9950);
            const o = a.p + "static/media/SuccessIcon.fbfe342cad12b09bf582425a2ec67f60.svg"
        },
        17002: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            a(9950);
            const o = a.p + "static/media/ValidCaptchaIcon.c7272e79e036f07e1accbb02c6e9f337.svg"
        },
        43876: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            a(9950);
            const o = a.p + "static/media/error_outline_white.f554c54b740822c41bc96d00be603a7d.svg"
        },
        39482: (e, t, a) => {
            a.d(t, {
                A: () => c
            });
            var o = a(69517),
                n = a(44414);
            const i = e => {
                let {
                    disabled: t,
                    checked: a,
                    name: i,
                    value: s,
                    onChange: r,
                    icon: c,
                    label_top: l,
                    label_bottom: d,
                    type: u = "radio",
                    isCompleted: p
                } = e;
                return (0, n.jsxs)("div", {
                    className: "authmode-button",
                    children: [(0, n.jsxs)("label", {
                        className: "authmode-button__container",
                        children: [(0, n.jsx)("input", {
                            type: u,
                            disabled: t,
                            value: s,
                            checked: a,
                            name: i,
                            onChange: r
                        }), (0, n.jsxs)("div", {
                            className: "authmode-button__inner-container",
                            children: [(0, n.jsx)("img", {
                                height: "40px",
                                src: c,
                                alt: "icon",
                                className: "authmode-button__icon"
                            }), (0, n.jsxs)("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: [(0, n.jsx)("span", {
                                    className: "authmode-button__lang",
                                    style: {
                                        fontWeight: "bold"
                                    },
                                    children: l
                                }), (0, n.jsx)("br", {}), (0, n.jsx)("span", {
                                    className: "authmode-button__lang",
                                    children: d
                                })]
                            })]
                        })]
                    }), p && (0, n.jsx)("img", {
                        className: "authmode-button__success-icon",
                        src: o.A,
                        alt: ""
                    })]
                })
            };
            a(9950);
            const s = a.p + "static/media/OtpIcon.15fc3c85378f24c82eb9158f9df731e2.svg";
            var r = a(18691);
            const c = e => {
                let {
                    handleChangeAuthMode: t,
                    authMode: a,
                    mandatory: o,
                    isFaceAuthCompleted: c,
                    isOtpCompleted: l
                } = e;
                return (0, n.jsxs)("div", {
                    className: "authmode",
                    style: {
                        display: "none"
                    },
                    children: [(0, n.jsx)(i, {
                        icon: r.A,
                        label_top: window.navigator.userAgent.includes("ECMP") ? "STEP 1" : "",
                        label_bottom: window.navigator.userAgent.includes("ECMP") ? "Bio Authentication" : "Face Authentication",
                        onChange: () => {},
                        name: "authMode",
                        value: "FACEAUTH",
                        checked: "FACEAUTH" === a,
                        disabled: !0,
                        isCompleted: c
                    }), (0, n.jsx)(i, {
                        icon: s,
                        label_top: window.navigator.userAgent.includes("ECMP") ? "STEP 2" : "",
                        label_bottom: "OTP Authentication",
                        onChange: t,
                        name: "authMode",
                        value: "OTP",
                        checked: "OTP" === a,
                        disabled: o,
                        isCompleted: l
                    })]
                })
            }
        },
        11468: (e, t, a) => {
            a.d(t, {
                A: () => d
            });
            var o = a(89379),
                n = a(80045),
                i = a(9950);
            const s = "button_btn__A84dV";
            var r = a(61086),
                c = a(44414);
            const l = ["children", "onClick", "btnColor", "labelColor", "disabled", "type", "style", "btnText", "loading"],
                d = e => {
                    let {
                        children: t,
                        onClick: a,
                        btnColor: d = "linear-gradient(to right, #020D51, #19B0DC)",
                        labelColor: u,
                        disabled: p,
                        type: m,
                        style: h,
                        btnText: v,
                        loading: _
                    } = e, g = (0, n.A)(e, l);
                    const [A, f] = (0, i.useState)(!1), x = () => {
                        f(!A)
                    }, y = {
                        backgroundImage: d,
                        color: u || "white"
                    }, b = {
                        color: "rgb(18 ,82 ,119)",
                        border: "solid 3px transparent",
                        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(to right, #020D51, #19B0DC)",
                        backgroundOrigin: "border-box",
                        backgroundClip: "content-box, border-box",
                        boxShadow: "2px 1000px 1px #fff inset"
                    }, C = {
                        color: u || "white",
                        backgroundColor: d,
                        boxShadow: "none"
                    }, E = {
                        cursor: "default",
                        backgroundImage: "none",
                        backgroundColor: "outline" === m ? "white" : "#B5B1B1",
                        color: "outline" === m ? "#B5B1B1" : "white",
                        border: "outline" === m ? "3px solid #B5B1B1" : "none"
                    }, j = {
                        width: "100%",
                        margin: "0 auto"
                    };
                    let N;
                    switch (m) {
                        case "block":
                            N = j;
                            break;
                        case "outline":
                            N = A ? C : b;
                            break;
                        default:
                            N = {
                                backgroundColor: d,
                                color: u || "white"
                            }
                    }
                    return (0, c.jsxs)("button", (0, o.A)((0, o.A)({
                        style: p ? (0, o.A)((0, o.A)((0, o.A)((0, o.A)({}, y), N), E), h) : (0, o.A)((0, o.A)((0, o.A)({}, y), N), h),
                        onMouseEnter: x,
                        onMouseLeave: x
                    }, g), {}, {
                        type: "button",
                        onClick: p || _ ? () => {} : a,
                        className: s,
                        children: [_ && (0, c.jsx)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "0px 5px"
                            },
                            children: (0, c.jsx)(r.A, {
                                size: "1rem",
                                style: {
                                    color: "inherit"
                                }
                            })
                        }), t || v || "button"]
                    }))
                }
        },
        64053: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            var o = a(9950),
                n = a(44414);
            const i = e => {
                let {
                    seconds: t,
                    onTimerCompleted: a,
                    initiateResend: i,
                    disabled: s
                } = e;
                const [r, c] = (0, o.useState)(t), [l, d] = (0, o.useState)(!1);
                return (0, o.useEffect)((() => {
                    const e = r > 0 && setInterval((() => {
                        d(!1), c(r - 1)
                    }), 1e3);
                    return () => clearInterval(e)
                }), [r]), (0, o.useEffect)((() => {
                    0 === r && d(!0)
                }), [r, d]), (0, o.useEffect)((() => {
                    i ? c(t) : d(!1)
                }), [i, c]), (0, n.jsx)(n.Fragment, {
                    children: l ? (0, n.jsx)("div", {
                        className: "form-section__resend-otp-button",
                        onClick: a,
                        children: "Resend OTP"
                    }) : (0, n.jsx)("div", {
                        className: "form-section__resend-otp-text",
                        children: s ? "Resend OTP Unavalible" : " Resend otp in: ".concat(r, " seconds")
                    })
                })
            }
        },
        41666: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => z
            });
            var o = a(9950),
                n = a(39482),
                i = a(43632),
                s = a(11468),
                r = a(25037),
                c = a(17002),
                l = a(70069);
            const d = "SET_AUTH_MODE",
                u = "SET_CAPTCHA_RESPONSE",
                p = "SET_OTP_FORM_DATA",
                m = "SET_OTP_GENERATION_SUCCESSFULL",
                h = "RESET_CAPTCHA_DATA",
                v = "SET_CHECK_NULL",
                _ = "SET_INITIATE_RESEND",
                g = "SET_FACE_AUTH_FORM_DATA",
                A = "SET_FACE_FORM_CHECK_NULL",
                f = "RESET_FACE_AUTH_CAPTCHA_DATA",
                x = "SET_QR_DATA",
                y = "SET_CAPTCHA_ERROR",
                b = "SET_SESSION_EXPIRED",
                C = "SET_MAIN_ERROR_MESSAGE",
                E = "SET_OTP_FAILURE",
                j = "SET_VALIDATE_OTP_FAILURE",
                N = "SET_QR_FAILURE",
                S = "SET_AUTH_FAILED_ERROR_MESSAGE",
                T = "SET_TRANSACTION_COUNT";
            var w = a(11715),
                O = a(35577),
                I = a(36811),
                R = a(26019),
                F = a(87486),
                k = a(43876),
                D = a(44414);
            const M = function(e) {
                    let {
                        isOpen: t,
                        setIsOpen: a,
                        removeButton: o,
                        variant: n,
                        errorCode: i,
                        errorMessage: s
                    } = e;

                    function r(e) {
                        window.location.reload(), a(!1)
                    }
                    return (0, D.jsx)(F.A, {
                        open: !!t,
                        "aria-labelledby": "popup",
                        "aria-describedby": "popup-description",
                        children: (0, D.jsx)("div", {
                            className: "ltr",
                            children: (0, D.jsx)("div", {
                                className: "confirmation-popup__container ".concat("error" === n ? "confirmation-popup--error" : ""),
                                children: (0, D.jsxs)("div", {
                                    className: "confirmation-popup",
                                    children: [(0, D.jsx)("div", {
                                        className: "confirmation-popup__icon",
                                        children: (0, D.jsx)("img", {
                                            src: k.A,
                                            alt: "error"
                                        })
                                    }), (0, D.jsx)("div", {
                                        className: "confirmation-popup__heading",
                                        children: "Authentication failed."
                                    }), (0, D.jsx)("div", {
                                        className: "confirmation-popup__description",
                                        children: "" !== i ? (0, D.jsxs)(D.Fragment, {
                                            children: [(0, D.jsxs)("div", {
                                                children: [i, "\xa0: \xa0", s]
                                            }), (0, D.jsx)("br", {}), "How would you like to proceed? \xa0 \xa0 \xa0"]
                                        }) : (0, D.jsx)("div", {
                                            children: "Failed to authenticate biometric. How would you like to proceed?"
                                        })
                                    }), (0, D.jsx)("div", {
                                        className: "confirmation-popup__buttons",
                                        children: o ? (0, D.jsx)("div", {
                                            className: "confirmation-popup__button margin-reset",
                                            onClick: e => r(),
                                            children: "Proceed"
                                        }) : (0, D.jsxs)(D.Fragment, {
                                            children: [(0, D.jsx)("div", {
                                                className: "confirmation-popup__button",
                                                onClick: e => {
                                                    a(!1)
                                                },
                                                children: "Recapture"
                                            }), (0, D.jsx)("div", {
                                                className: "confirmation-popup__button",
                                                onClick: e => r(),
                                                children: "Relogin"
                                            })]
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                L = e => {
                    let {
                        isQrCodeGenerated: t,
                        faceAuthFormData: a,
                        LoginStateDispatch: n,
                        qrCode: i,
                        setInitiateWebsocketConnection: s,
                        captchaTxnId: r
                    } = e;
                    const {
                        sendMessage: c,
                        lastMessage: l,
                        readyState: d,
                        getWebSocket: u,
                        isError: p,
                        setISError: m
                    } = (0, O.A)(), [h, v] = (0, o.useState)(!1), [_, g] = (0, o.useState)(""), [A, f] = (0, o.useState)("");
                    return (0, o.useEffect)((() => {
                        d === I.vj.OPEN && c(JSON.stringify({
                            type: "BIO_AUTH",
                            tokenRequest: {
                                uid: null === a || void 0 === a ? void 0 : a.uid,
                                captcha: null === a || void 0 === a ? void 0 : a.captcha,
                                captchaTxnId: r
                            }
                        }))
                    }), [d]), (0, o.useEffect)((() => {
                        p && (s(!1), n({
                            type: N,
                            payload: "Unable to make a connection to our backend systems."
                        }))
                    }), [p, n, s]), (0, o.useEffect)((() => {
                        if (d === I.vj.OPEN && null != l) {
                            m(!1);
                            const o = l.data,
                                i = JSON.parse(o);
                            if (void 0 !== i && "BIO_AUTH" === i.type) return void n({
                                type: x,
                                payload: i.tokenData
                            });
                            var e, t;
                            if (void 0 !== i && "SOCKET" === i.type && u().close(), void 0 !== i && "REDIRECT_URL" === i.type && (window.location.href = i.redirectUrl), void 0 !== i && "ALREADY_SESSION_ACTIVE" === i.type && (!0 === window.confirm("".concat(null === a || void 0 === a ? void 0 : a.uid, " has a active session, Do you want to clear the session and proceed?")) ? c(JSON.stringify({
                                    type: "CLEAR_SESSION_AND_LOGIN",
                                    duplicateSessionId: null === i || void 0 === i ? void 0 : i.duplicateSessionId
                                })) : window.location.reload()), void 0 !== i && "BIO_AUTH_FAILURE" === i.type && (n({
                                    type: S,
                                    payload: "Retrying biometric authentication, kindly wait"
                                }), v(!0), null !== i && void 0 !== i && i.errorDetails && null != i.errorDetails && (g(i.errorDetails.errorCode), f(i.errorDetails.errorMessage)), n({
                                    type: S,
                                    payload: ""
                                })), void 0 !== i && "ERROR" === i.type) return u().close(), s(!1), void n({
                                type: N,
                                payload: null === (e = i.errorDetails) || void 0 === e ? void 0 : e.errorMessage
                            });
                            if (void 0 !== i && "CAPTCHA_ERROR" === i.type) return u().close(), s(!1), void n({
                                type: N,
                                payload: null === (t = i.errorDetails) || void 0 === t ? void 0 : t.errorMessage
                            })
                        } else d === I.vj.CLOSED && u().close()
                    }), [l, n, u, d, s]), (0, D.jsxs)(D.Fragment, {
                        children: [t && (0, D.jsxs)("div", {
                            className: "form-section__qr-code-conatiner",
                            children: [(0, D.jsxs)("div", {
                                className: "form-section__qr-code-text-conatiner",
                                children: [(0, D.jsx)("span", {
                                    children: "Scan QR Code"
                                }), (0, D.jsx)("span", {
                                    className: "form-section__qr-code-text",
                                    children: "To complete Face Authentication scan the given QR code from the mAadhaar App on your MobileDevice"
                                })]
                            }), (0, D.jsx)("div", {
                                className: "form-section__qr-image",
                                children: (0, D.jsx)(R.Ay, {
                                    value: i,
                                    size: 180
                                })
                            })]
                        }), h && (0, D.jsx)(M, {
                            qrCode: i,
                            setIsOpen: v,
                            isOpen: h,
                            errorCode: _,
                            errorMessage: A
                        })]
                    })
                },
                P = e => {
                    let {
                        LoginState: t,
                        LoginStateDispatch: a
                    } = e;
                    const {
                        faceAuthFormData: n,
                        isQrCodeGenerated: d,
                        captchaResponse: p,
                        qrCode: m,
                        capcthaError: h,
                        transactionId: v,
                        transactionCount: _
                    } = t, [x, C] = (0, o.useState)(!1), E = (0, l.A)(), j = (0, o.useCallback)((() => {
                        if (d) return;
                        a({
                            type: f
                        });
                        (0, w.q)(E, (e => {
                            var t;
                            !0 === (null === e || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.sessionActive) ? a({
                                type: u,
                                payload: JSON.parse(e.data.message)
                            }) : a({
                                type: b
                            })
                        }), (() => {
                            a({
                                type: y
                            })
                        }), "".concat(v, "-").concat(_)), a({
                            type: T
                        })
                    }), [E, a, d]);
                    (0, o.useEffect)((() => {
                        j()
                    }), []);
                    const N = null !== p && void 0 !== p && p.imageBase64 ? "data:image/jpeg;base64," + (null === p || void 0 === p ? void 0 : p.imageBase64) : null;
                    return (0, D.jsx)(D.Fragment, {
                        children: (0, D.jsx)(i.FormContainer, {
                            handleFormValues: e => {
                                ((e, t, a) => {
                                    const {
                                        isQrCodeGenerated: o,
                                        faceAuthFormData: n
                                    } = t;
                                    let i = !1,
                                        s = null === n || void 0 === n ? void 0 : n.uid,
                                        r = null === n || void 0 === n ? void 0 : n.captcha;
                                    if (!o) {
                                        var c, l, d, u;
                                        let t = e.findIndex((e => "uid" === e.name));
                                        s = null !== (c = e[t]) && void 0 !== c && c.input ? e[t].input : null, i = null !== (l = e[t]) && void 0 !== l && l.error ? e[t].error : i;
                                        let a = e.findIndex((e => "captcha" === e.name));
                                        r = null !== (d = e[a]) && void 0 !== d && d.input ? e[a].input : null, i = null !== (u = e[a]) && void 0 !== u && u.error ? e[a].error : i
                                    }
                                    a({
                                        type: g,
                                        payload: {
                                            uid: s,
                                            captcha: r,
                                            error: i,
                                            resetCaptcha: !1,
                                            checkNull: !1
                                        }
                                    })
                                })(e, t, a)
                            },
                            checkNullValues: null === n || void 0 === n ? void 0 : n.checkNull,
                            children: (0, D.jsxs)("div", {
                                className: "form-section",
                                children: [(0, D.jsx)("div", {
                                    className: "form-section__text-field",
                                    children: (0, D.jsx)(i.UIDField, {
                                        label: "Enter Aadhaar Number",
                                        mandatory: !0,
                                        inputClassName: "form-section__text-field--inner-div",
                                        name: "uid",
                                        value: null === n || void 0 === n ? void 0 : n.uid,
                                        disabled: d,
                                        errorClassName: "form-section__text-field--error-div"
                                    })
                                }), (0, D.jsxs)("div", {
                                    className: "form-section__captcha-field-container",
                                    children: [(0, D.jsx)("div", {
                                        className: "form-section__captcha-field",
                                        children: (0, D.jsx)(i.CaptchaField, {
                                            label: "Enter Captcha",
                                            mandatory: !0,
                                            inputClassName: "form-section__text-field--inner-div",
                                            name: "captcha",
                                            value: null === n || void 0 === n ? void 0 : n.captcha,
                                            disabled: d,
                                            errorClassName: "form-section__text-field--error-div",
                                            clearField: null === n || void 0 === n ? void 0 : n.resetCaptcha,
                                            maxLength: 5
                                        })
                                    }), (0, D.jsx)("div", {
                                        className: "form-section__captcha-box",
                                        children: d ? (0, D.jsxs)("div", {
                                            className: "form-section__valid-captcha",
                                            children: [(0, D.jsx)("div", {
                                                children: "Valid Captcha"
                                            }), (0, D.jsx)("img", {
                                                className: "form-section__tick-icon",
                                                src: c.A,
                                                alt: "tick icon"
                                            })]
                                        }) : (0, D.jsxs)(D.Fragment, {
                                            children: [h ? (0, D.jsx)("div", {
                                                className: "form-section__error-captcha",
                                                children: "Captcha error"
                                            }) : (0, D.jsx)("div", {
                                                className: "form-section__captcha-image",
                                                children: (0, D.jsx)("img", {
                                                    src: N,
                                                    alt: "captcha"
                                                })
                                            }), (0, D.jsx)("div", {
                                                className: "form-section__line"
                                            }), (0, D.jsx)("div", {
                                                onClick: j,
                                                children: (0, D.jsx)("img", {
                                                    src: r.A,
                                                    alt: ""
                                                })
                                            })]
                                        })
                                    })]
                                }), !d && (0, D.jsx)("div", {
                                    className: "form-section__button-container",
                                    children: (0, D.jsx)("div", {
                                        className: "form-section__button",
                                        children: (0, D.jsx)(s.A, {
                                            style: {
                                                fontWeight: "bold"
                                            },
                                            btnText: "Login with Face Authentication",
                                            onClick: () => {
                                                null !== (null === n || void 0 === n ? void 0 : n.uid) && null !== (null === n || void 0 === n ? void 0 : n.captcha) ? C(!0) : a({
                                                    type: A
                                                })
                                            },
                                            disabled: (null === n || void 0 === n ? void 0 : n.error) || d,
                                            loading: x && !d
                                        })
                                    })
                                }), x && (0, D.jsx)(L, {
                                    isQrCodeGenerated: d,
                                    faceAuthFormData: n,
                                    LoginStateDispatch: a,
                                    qrCode: m,
                                    setInitiateWebsocketConnection: C,
                                    captchaTxnId: null === p || void 0 === p ? void 0 : p.transactionId
                                })]
                            })
                        })
                    })
                };
            var U = a(12284),
                B = a(90404),
                q = a(17467),
                H = a(92067),
                G = a(64053),
                V = a(41960);
            const Q = a.p + "static/media/AudioIcon.12ff75fa6a061a5d789f469d9bf2fb57.svg",
                W = e => {
                    var t, a;
                    let {
                        LoginState: n,
                        LoginStateDispatch: d
                    } = e;
                    const {
                        otpFormData: g,
                        isOtpGenerationSuccessfull: A,
                        captchaResponse: f,
                        initiateResend: x,
                        otpAttempts: N,
                        capcthaError: S,
                        transactionId: O,
                        transactionCount: I
                    } = n, R = null !== f && void 0 !== f && f.audioBase64 ? "data:audio/mp3;base64," + (null === f || void 0 === f ? void 0 : f.audioBase64) : null, [F, k] = (0, o.useState)(!1), [M, L] = (0, o.useState)(!1);
                    (0, o.useEffect)((() => {
                        if (F) {
                            let e = document.getElementsByClassName("audio_captcha")[0].play();
                            e && e.catch((function(e) {
                                console.error(e)
                            })), k(!1)
                        }
                        const e = !(null === f || void 0 === f || !f.audioBase64);
                        L(e)
                    }), [F]);
                    const P = new URLSearchParams(window.location.search).get("telemetry_session_id"),
                        [W, J] = (0, o.useState)("");
                    P && "" === W && J(P);
                    const X = (0, l.A)(),
                        K = (0, U.A)(),
                        z = (0, H.A)(),
                        [Y, Z] = (0, o.useState)(!1),
                        $ = null !== f && void 0 !== f && f.imageBase64 ? "data:image/jpeg;base64," + (null === f || void 0 === f ? void 0 : f.imageBase64) : null,
                        ee = (0, o.useCallback)((() => {
                            if (A) return;
                            d({
                                type: h
                            });
                            (0, w.q)(X, (e => {
                                var t;
                                if (!0 === (null === e || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.sessionActive)) {
                                    d({
                                        type: u,
                                        payload: JSON.parse(e.data.message)
                                    });
                                    try {
                                        V.A.metrics("login_generate_captcha_success", W).then((e => console.log("response", e))).catch((e => console.log("error sending login telemetry metrics", e)))
                                    } catch (a) {
                                        console.log("error sending login telemetry metrics", a)
                                    }
                                } else d({
                                    type: b
                                })
                            }), (() => {
                                d({
                                    type: y
                                })
                            }), "".concat(O, "-").concat(I)), d({
                                type: T
                            })
                        }), [X, d, A]),
                        te = e => {
                            var t, a;
                            if (!0 === (null === e || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.sessionActive))
                                if (null !== e && void 0 !== e && null !== (a = e.data) && void 0 !== a && a.status) {
                                    d({
                                        type: m
                                    });
                                    try {
                                        V.A.metrics("login_send_otp_success", W).then((e => console.log("response", e))).catch((e => console.log("error sending login telemetry metrics", e)))
                                    } catch (n) {
                                        console.log("error sending login telemetry metrics", n)
                                    }
                                } else {
                                    var o;
                                    d({
                                        type: E,
                                        payload: null === e || void 0 === e || null === (o = e.data) || void 0 === o ? void 0 : o.message
                                    })
                                }
                            else d({
                                type: b
                            })
                        },
                        ae = e => {
                            d({
                                type: C,
                                payload: "Unable to Generate OTP! Please try again later"
                            })
                        },
                        oe = () => {
                            const {
                                uid: e,
                                captcha: t
                            } = g;
                            if (null === e || null === t || !e || !t) return void d({
                                type: v
                            });
                            d({
                                type: _,
                                payload: !1
                            });
                            let a = {
                                uid: e,
                                captcha: t,
                                captchaTxnId: null === f || void 0 === f ? void 0 : f.transactionId
                            };
                            (0, B.d)(K, a, te, ae, "".concat(O, "-").concat(I));
                            try {
                                V.A.metrics("login_send_otp", W).then((e => console.log("response", e))).catch((e => console.log("error sending login telemetry metrics", e)))
                            } catch (o) {
                                console.log("error sending login telemetry metrics", o)
                            }
                            d({
                                type: T
                            })
                        };
                    (0, o.useEffect)((() => {
                        ee()
                    }), []);
                    const ne = e => {
                            var t, a, o;
                            if (null === e || void 0 === e || null === (t = e.data) || void 0 === t || !t.status || "y" !== (null === e || void 0 === e || null === (a = e.data) || void 0 === a ? void 0 : a.status) && "Y" !== (null === e || void 0 === e || null === (o = e.data) || void 0 === o ? void 0 : o.status)) {
                                var n;
                                if ("UOS-AUT-001" === (null === e || void 0 === e || null === (n = e.data) || void 0 === n ? void 0 : n.errorCode)) {
                                    window.confirm("".concat(null === g || void 0 === g ? void 0 : g.uid, " has a active session, Do you want to clear the session and proceed?")) ? se() : window.location.reload()
                                } else {
                                    var i;
                                    d({
                                        type: j,
                                        payload: null === e || void 0 === e || null === (i = e.data) || void 0 === i ? void 0 : i.errorMessage
                                    })
                                }
                            } else {
                                Z(!0);
                                let t = null === e || void 0 === e ? void 0 : e.data.redirectURL;
                                "https:" === window.location.protocol && (t = t.replace("http", "https")), window.location = t
                            }
                        },
                        ie = e => {
                            d({
                                type: C,
                                payload: "Unable to Validate OTP! Please try again later"
                            })
                        },
                        se = () => {
                            var e;
                            if (null === (null === g || void 0 === g ? void 0 : g.otp)) return void d({
                                type: v
                            });
                            let t = {
                                uid: null === g || void 0 === g ? void 0 : g.uid,
                                otp: null === g || void 0 === g ? void 0 : g.otp
                            };
                            (0, q._)(z, t, ne, ie, "".concat(O, "-").concat(I));
                            try {
                                V.A.metrics("login_submit_otp", W).then((e => console.log("response", e))).catch((e => console.log("error sending login telemetry metrics", e)))
                            } catch (a) {
                                console.log("error sending login telemetry metrics", a)
                            }
                            d({
                                type: T
                            }), null !== (e = window) && void 0 !== e && e.dataLayer && window.dataLayer.push({
                                event: "oAuthLogin"
                            })
                        };
                    return (0, D.jsx)(D.Fragment, {
                        children: (0, D.jsx)(i.FormContainer, {
                            handleFormValues: e => {
                                ((e, t, a) => {
                                    var o, n;
                                    const {
                                        isOtpGenerationSuccessfull: i,
                                        otpFormData: s
                                    } = t;
                                    let r = !1,
                                        c = null === s || void 0 === s ? void 0 : s.uid,
                                        l = null === s || void 0 === s ? void 0 : s.captcha;
                                    if (!i) {
                                        var d, u, m, h;
                                        let t = e.findIndex((e => "uid" === e.name));
                                        c = null !== (d = e[t]) && void 0 !== d && d.input ? e[t].input : null, r = null !== (u = e[t]) && void 0 !== u && u.error ? e[t].error : r;
                                        let a = e.findIndex((e => "captcha" === e.name));
                                        l = null !== (m = e[a]) && void 0 !== m && m.input ? e[a].input : null, r = null !== (h = e[a]) && void 0 !== h && h.error ? e[a].error : r
                                    }
                                    let v = e.findIndex((e => "otp" === e.name)),
                                        _ = null !== (o = e[v]) && void 0 !== o && o.input ? e[v].input : null;
                                    r = null !== (n = e[v]) && void 0 !== n && n.error ? e[v].error : r, a({
                                        type: p,
                                        payload: {
                                            uid: c,
                                            captcha: l,
                                            otp: _,
                                            error: r,
                                            resetCaptcha: !1,
                                            checkNull: !1
                                        }
                                    })
                                })(e, n, d)
                            },
                            checkNullValues: null === g || void 0 === g ? void 0 : g.checkNull,
                            children: (0, D.jsxs)("div", {
                                className: "form-section",
                                children: [(0, D.jsx)("div", {
                                    className: "form-section__text-field",
                                    children: (0, D.jsx)(i.UIDField, {
                                        label: "Enter Aadhaar Number",
                                        mandatory: !0,
                                        inputClassName: "form-section__text-field--inner-div",
                                        name: "uid",
                                        value: null === g || void 0 === g ? void 0 : g.uid,
                                        disabled: A,
                                        errorClassName: "form-section__text-field--error-div"
                                    })
                                }), (0, D.jsxs)("div", {
                                    className: "form-section__captcha-field-container",
                                    children: [(0, D.jsx)("div", {
                                        className: "form-section__captcha-field",
                                        children: (0, D.jsx)(i.CaptchaField, {
                                            label: "Enter Captcha",
                                            mandatory: !0,
                                            inputClassName: M ? "form-section__text-field-captcha--inner-div withAudio" : "form-section__text-field--inner-div",
                                            name: "captcha",
                                            value: null === g || void 0 === g ? void 0 : g.captcha,
                                            disabled: A,
                                            errorClassName: "form-section__text-field--error-div",
                                            clearField: null === g || void 0 === g ? void 0 : g.resetCaptcha,
                                            maxLength: 5
                                        })
                                    }), (0, D.jsx)("div", {
                                        className: "form-section__captcha-box",
                                        children: A ? (0, D.jsxs)("div", {
                                            className: "form-section__valid-captcha",
                                            children: [(0, D.jsx)("div", {
                                                children: "Valid Captcha"
                                            }), (0, D.jsx)("img", {
                                                className: "form-section__tick-icon",
                                                src: c.A,
                                                alt: "tick icon"
                                            })]
                                        }) : (0, D.jsxs)(D.Fragment, {
                                            children: [S ? (0, D.jsx)("div", {
                                                className: "form-section__error-captcha",
                                                children: "Captcha error"
                                            }) : (0, D.jsx)("div", {
                                                className: "form-section__captcha-image",
                                                children: (0, D.jsx)("img", {
                                                    src: $,
                                                    alt: "captcha"
                                                })
                                            }), (0, D.jsx)("div", {
                                                className: "form-section__line"
                                            }), R && (0, D.jsxs)("div", {
                                                onClick: () => {
                                                    k(!0)
                                                },
                                                children: [(0, D.jsx)("img", {
                                                    style: {
                                                        height: "18px"
                                                    },
                                                    src: Q,
                                                    alt: "audio icon"
                                                }), (0, D.jsx)("audio", {
                                                    src: R,
                                                    className: "audio_captcha",
                                                    crossOrigin: "anonymous"
                                                })]
                                            }), (0, D.jsx)("div", {
                                                onClick: ee,
                                                children: (0, D.jsx)("img", {
                                                    style: {
                                                        height: "18px"
                                                    },
                                                    src: r.A,
                                                    alt: ""
                                                })
                                            })]
                                        })
                                    })]
                                }), !A && (0, D.jsx)("div", {
                                    className: "form-section__button-container",
                                    children: (0, D.jsx)("div", {
                                        className: "form-section__button",
                                        children: (0, D.jsx)(s.A, {
                                            style: {
                                                fontWeight: "bold"
                                            },
                                            btnText: "Login with OTP",
                                            onClick: oe,
                                            disabled: !("".concat(null === g || void 0 === g || null === (t = g.captcha) || void 0 === t ? void 0 : t.length) == "".concat("5")) || !(12 === (null === g || void 0 === g || null === (a = g.uid) || void 0 === a ? void 0 : a.length)) || (null === g || void 0 === g ? void 0 : g.error) || A || K.isLoading,
                                            loading: K.isLoading
                                        })
                                    })
                                }), A && (0, D.jsxs)(D.Fragment, {
                                    children: [(0, D.jsxs)("div", {
                                        children: [(0, D.jsx)("div", {
                                            className: "form-section__otp-text",
                                            children: "Successfully Generated One Time Password (OTP)"
                                        }), (0, D.jsx)("div", {
                                            className: "form-section__text-field",
                                            children: (0, D.jsx)(i.OTPField, {
                                                label: "Enter OTP",
                                                inputClassName: "form-section__text-field--inner-div",
                                                mandatory: !0,
                                                name: "otp",
                                                errorClassName: "form-section__text-field--error-div"
                                            })
                                        }), (0, D.jsx)(G.A, {
                                            seconds: 60,
                                            onTimerCompleted: oe,
                                            initiateResend: x,
                                            disabled: N >= 3
                                        })]
                                    }), (0, D.jsx)("div", {
                                        className: "form-section__button-container",
                                        children: (0, D.jsx)("div", {
                                            className: "form-section__button",
                                            children: (0, D.jsx)(s.A, {
                                                style: {
                                                    fontWeight: "bold"
                                                },
                                                btnText: "Login",
                                                onClick: se,
                                                disabled: (null === g || void 0 === g ? void 0 : g.error) || z.isLoading || Y,
                                                loading: z.isLoading
                                            })
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                };
            const J = {
                otpFormData: null,
                faceAuthFormData: null,
                authMode: "OTP",
                captchaResponse: null,
                otpResponse: null,
                isOtpGenerationSuccessfull: !1,
                otpAttempts: 0,
                initiateResend: !1,
                isQrCodeGenerated: !1,
                qrCode: null,
                capcthaError: !1,
                isSessionExpried: !1,
                mainErrorMessage: null,
                transactionId: (0, a(15255).A)(),
                transactionCount: 1,
                authFailedErrorMessage: ""
            };
            var X = a(89379);
            const K = (e, t) => {
                    switch (t.type) {
                        case d:
                            return (0, X.A)((0, X.A)({}, J), {}, {
                                isSessionExpried: e.isSessionExpried,
                                authMode: t.payload,
                                transactionCount: e.transactionCount,
                                transactionId: e.transactionId
                            });
                        case S:
                            return (0, X.A)((0, X.A)({}, e), {}, {
                                authFailedErrorMessage: t.payload,
                                isSessionExpried: !1
                            });
                        case u:
                            return (0, X.A)((0, X.A)({}, e), {}, {
                                captchaResponse: t.payload
                            });
                        case p:
                            return (0, X.A)((0, X.A)({}, e), {}, {
                                otpFormData: t.payload
                            });
                        case m:
                            return (0, X.A)((0, X.A)({}, e), {}, {
                                isOtpGenerationSuccessfull: !0,
                                initiateResend: e.otpAttempts < 2,
                                otpAttempts: e.otpAttempts + 1,
                                mainErrorMessage: null
                            });
                        case h:
                            {
                                let t = (0, X.A)((0, X.A)({}, e.otpFormData), {}, {
                                    captcha: null,
                                    resetCaptcha: !0
                                });
                                return (0, X.A)((0, X.A)({}, e), {}, {
                                    otpFormData: t,
                                    capcthaError: !1
                                })
                            }
                        case v:
                            {
                                let t = (0, X.A)((0, X.A)({}, e.otpFormData), {}, {
                                    checkNull: !0
                                });
                                return (0, X.A)((0, X.A)({}, e), {}, {
                                    otpFormData: t
                                })
                            }
                        case _:
                            return (0, X.A)((0, X.A)({}, e), {}, {
                                initiateResend: t.payload
                            });
                        case g:
                            return (0, X.A)((0, X.A)({}, e), {}, {
                                faceAuthFormData: t.payload
                            });
                        case A:
                            {
                                let t = (0, X.A)((0, X.A)({}, e.faceAuthFormData), {}, {
                                    checkNull: !0
                                });
                                return (0, X.A)((0, X.A)({}, e), {}, {
                                    faceAuthFormData: t
                                })
                            }
                        case f:
                            {
                                let t = (0, X.A)((0, X.A)({}, e.faceAuthFormData), {}, {
                                    captcha: null,
                                    resetCaptcha: !0
                                });
                                return (0, X.A)((0, X.A)({}, e), {}, {
                                    faceAuthFormData: t,
                                    capcthaError: !1
                                })
                            }
                        case x:
                            return (0, X.A)((0, X.A)({}, e), {}, {
                                qrCode: t.payload,
                                mainErrorMessage: null,
                                isQrCodeGenerated: !0
                            });
                        case y:
                            return (0, X.A)((0, X.A)({}, e), {}, {
                                capcthaError: !0
                            });
                        case b:
                            return (0, X.A)((0, X.A)({}, e), {}, {
                                isSessionExpried: !0,
                                mainErrorMessage: null
                            });
                        case C:
                            return (0, X.A)((0, X.A)({}, e), {}, {
                                mainErrorMessage: t.payload,
                                isSessionExpried: !1
                            });
                        case E:
                            {
                                let a = (0, X.A)((0, X.A)({}, e.otpFormData), {}, {
                                    captcha: null,
                                    resetCaptcha: !0
                                });
                                return (0, X.A)((0, X.A)({}, e), {}, {
                                    otpFormData: a,
                                    mainErrorMessage: t.payload
                                })
                            }
                        case j:
                            return (0, X.A)((0, X.A)({}, e), {}, {
                                mainErrorMessage: t.payload
                            });
                        case T:
                            return (0, X.A)((0, X.A)({}, e), {}, {
                                transactionCount: e.transactionCount + 1
                            });
                        case N:
                            return (0, X.A)((0, X.A)({}, e), {}, {
                                mainErrorMessage: t.payload
                            });
                        default:
                            return e
                    }
                },
                z = () => {
                    const [e, t] = (0, o.useReducer)(K, J), {
                        authMode: a,
                        isSessionExpried: i,
                        mainErrorMessage: s
                    } = e;
                    return (0, D.jsxs)("div", {
                        className: "login-section",
                        children: [(0, D.jsx)("div", {
                            className: "login-section__description",
                            children: "Login to Aadhaar via OTP"
                        }), (0, D.jsxs)("div", {
                            className: "login-section__card",
                            children: [(0, D.jsxs)("div", {
                                className: "login-section__error",
                                children: [i && "Session Expired! Please try again later.", null !== s && s]
                            }), (0, D.jsx)(n.A, {
                                handleChangeAuthMode: e => {
                                    t({
                                        type: d,
                                        payload: "OTP"
                                    })
                                },
                                authMode: a
                            }), "FACEAUTH" === a && (0, D.jsx)(P, {
                                LoginState: e,
                                LoginStateDispatch: t
                            }), "OTP" === a && (0, D.jsx)(W, {
                                LoginState: e,
                                LoginStateDispatch: t
                            })]
                        })]
                    })
                }
        },
        70069: (e, t, a) => {
            a.d(t, {
                A: () => l
            });
            var o = a(41920),
                n = a(96011),
                i = a.n(n);
            const s = "".concat(window.location.protocol, "//").concat(window.location.host, "/access"),
                r = i().create({
                    baseURL: s
                });
            const c = new class {
                async generateCaptcha(e) {
                    const t = {
                        headers: {
                            "X-Request-Id": e
                        }
                    };
                    return await r.get("/generateCaptcha", t)
                }
            };

            function l() {
                return (0, o.useMutation)((e => c.generateCaptcha(e)))
            }
        },
        35577: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            var o = a(9950),
                n = a(36811);
            const i = () => {
                const [e, t] = (0, o.useState)(!1);
                let a = "wss:";
                "http:" === window.location.protocol && (a = "ws:");
                const i = "".concat(a, "//").concat(window.location.host, "/access/ws"),
                    {
                        sendMessage: s,
                        lastMessage: r,
                        readyState: c,
                        getWebSocket: l
                    } = (0, n.Ay)(i, {
                        onError: () => {
                            t(!0)
                        },
                        onOpen: () => {
                            t(!1)
                        }
                    });
                return {
                    sendMessage: s,
                    lastMessage: r,
                    readyState: c,
                    getWebSocket: l,
                    isError: e,
                    setISError: t
                }
            }
        },
        12284: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            var o = a(41920),
                n = a(86378);

            function i() {
                return (0, o.useMutation)((e => n.A.generateOTP(e.requestBody, e.transactionId)))
            }
        },
        92067: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            var o = a(41920),
                n = a(86378);

            function i() {
                return (0, o.useMutation)((e => n.A.validateOTP(e.requestBody, e.transactionId)))
            }
        },
        86378: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var o = a(96011),
                n = a.n(o);
            const i = "".concat(window.location.protocol, "//").concat(window.location.host, "/access"),
                s = n().create({
                    baseURL: i
                });
            const r = new class {
                async generateOTP(e, t) {
                    const a = {
                        headers: {
                            "X-Request-Id": t
                        }
                    };
                    return await s.post("/generateOTPForOAuth", e, a)
                }
                async validateOTP(e, t) {
                    const a = {
                        headers: {
                            "X-Request-Id": t
                        }
                    };
                    return await s.post("/login", e, a)
                }
            }
        },
        11715: (e, t, a) => {
            a.d(t, {
                q: () => o
            });
            const o = (e, t, a, o) => {
                e.mutate(o, {
                    onSuccess: e => {
                        t(e)
                    },
                    onError: e => {
                        a()
                    }
                })
            }
        },
        90404: (e, t, a) => {
            a.d(t, {
                d: () => o
            });
            const o = (e, t, a, o, n) => {
                e.mutate({
                    requestBody: t,
                    transactionId: n
                }, {
                    onSuccess: e => {
                        a(e)
                    },
                    onError: e => {
                        o(e)
                    }
                })
            }
        },
        17467: (e, t, a) => {
            a.d(t, {
                _: () => o
            });
            const o = (e, t, a, o, n) => {
                e.mutate({
                    requestBody: t,
                    transactionId: n
                }, {
                    onSuccess: e => {
                        a(e)
                    },
                    onError: e => {
                        o(e)
                    }
                })
            }
        }
    }
]);