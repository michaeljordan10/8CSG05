! function(a, b, c) {
    "use strict";
    "function" != typeof Object.create && (Object.create = function(a) {
        function b() {}
        return b.prototype = a, new b
    });
    var d = function(a, b) {
            for (var c = ["required", "pattern", "placeholder", "autofocus", "formnovalidate"], d = ["email", "url", "number", "range"], e = {
                    attributes: {},
                    types: {}
                }; b = c.pop();) e.attributes[b] = !!(b in a);
            for (; b = d.pop();) a.setAttribute("type", b), e.types[b] = a.type == b;
            return e
        }(b.createElement("input")),
        e = {
            init: function(b, c) {
                var d = this;
                d.elem = c, d.$elem = a(c), c.H5Form = d, d.options = a.extend({}, a.fn.h5f.options, b), "form" === c.nodeName.toLowerCase() && d.bindWithForm(d.elem, d.$elem)
            },
            bindWithForm: function(a, b) {
                var i, e = this,
                    f = !!b.attr("novalidate"),
                    g = a.elements,
                    h = g.length;
                for ("onSubmit" === e.options.formValidationEvent && b.on("submit", function(a) {
                        i = this.H5Form.donotValidate !== c && this.H5Form.donotValidate, i || f || e.validateForm(e) ? b.find(":input").each(function() {
                            e.placeholder(e, this, "submit")
                        }) : (a.preventDefault(), this.donotValidate = !1)
                    }), b.on("focusout focusin", function(a) {
                        e.placeholder(e, a.target, a.type)
                    }), b.on("focusout change", e.validateField), b.find("fieldset").on("change", function() {
                        e.validateField(this)
                    }), d.attributes.formnovalidate || b.find(":submit[formnovalidate]").on("click", function() {
                        e.donotValidate = !0
                    }); h--;) e.polyfill(g[h]), e.autofocus(e, g[h])
            },
            polyfill: function(a) {
                if ("form" === a.nodeName.toLowerCase()) return !0;
                var b = a.form.H5Form;
                b.placeholder(b, a), b.numberType(b, a)
            },
            validateForm: function() {
                var f, g, a = this,
                    b = a.elem,
                    c = b.elements,
                    d = c.length,
                    e = !0;
                for (b.isValid = !0, f = 0; f < d; f++) g = c[f], g.isRequired = !!g.required, g.isDisabled && (g.isDisabled = !!g.disabled), g.isDisabled || (e = a.validateField(g), b.isValid && !e && a.setFocusOn(g), b.isValid = e && b.isValid);
                return a.options.doRenderMessage && a.renderErrorMessages(a, b), b.isValid
            },
            validateField: function(b) {
                var j, k, l, e = b.target || b,
                    f = !1,
                    g = !1,
                    h = !1,
                    i = !1;
                return e.form === c ? null : (j = e.form.H5Form, k = a(e), g = !!k.attr("required"), h = !!k.attr("disabled"), e.isDisabled || (f = !d.attributes.required && g && j.isValueMissing(j, e), i = !d.attributes.pattern && j.matchPattern(j, e)), e.validityState = {
                    valueMissing: f,
                    patternMismatch: i,
                    valid: e.isDisabled || !(f || i)
                }, d.attributes.required || (e.validityState.valueMissing ? k.addClass(j.options.requiredClass) : k.removeClass(j.options.requiredClass)), d.attributespattern || (e.validityState.patternMismatch ? k.addClass(j.options.patternClass) : k.removeClass(j.options.patternClass)), e.validityState.valid ? (k.removeClass(j.options.invalidClass), l = j.findLabel(k), l.removeClass(j.options.invalidClass), l.attr("aria-invalid", "false")) : (k.addClass(j.options.invalidClass), l = j.findLabel(k), l.addClass(j.options.invalidClass), l.attr("aria-invalid", "true")), e.validityState.valid)
            },
            isValueMissing: function(e, f) {
                var k, l, m, g = a(f),
                    h = f.type !== c ? f.type : f.tagName.toLowerCase(),
                    i = /^(checkbox|radio|fieldset)$/i.test(h),
                    j = /^submit$/i.test(h);
                if (j) return !1;
                if (i) {
                    if ("checkbox" === h) return !g.is(":checked");
                    for (k = "fieldset" === h ? g.find("input") : b.getElementsByName(f.name), l = 0, m = k.length; l < m; l++)
                        if (a(k[l]).is(":checked")) return !1;
                    return !0
                }
                return !("" !== g.val() && (d.attributes.placeholder || !g.hasClass(e.options.placeholderClass)))
            },
            matchPattern: function(b, e) {
                var j, k, f = a(e),
                    g = f.attr("value"),
                    h = f.attr("pattern"),
                    i = f.attr("type");
                if (!d.attributes.placeholder && f.attr("placeholder") && f.hasClass(b.options.placeholderClass) || (g = f.attr("value")), "" === g) return !1;
                if ("email" === i) {
                    if (f.attr("multiple") === c) return !b.options.emailPatt.test(g);
                    for (g = g.split(b.options.mutipleDelimiter), j = 0, k = g.length; j < k; j++)
                        if (!b.options.emailPatt.test(g[j].replace(/[ ]*/g, ""))) return !0
                } else {
                    if ("url" === i) return !b.options.urlPatt.test(g);
                    if ("text" === i && h !== c) return usrPatt = new RegExp("^(?:" + h + ")$"), !usrPatt.test(g)
                }
                return !1
            },
            placeholder: function(b, e, f) {
                var g = a(e),
                    h = g.attr("placeholder"),
                    i = /^(focusin|submit)$/i.test(f),
                    j = /^(input|textarea)$/i.test(e.nodeName),
                    k = /^password$/i.test(e.type),
                    l = d.attributes.placeholder;
                l || !j || k || h === c || ("" !== e.value || i ? e.value === h && i && (e.value = "", g.removeClass(b.options.placeholderClass)) : (e.value = h, g.addClass(b.options.placeholderClass)))
            },
            numberType: function(b, c) {
                var i, j, k, l, m, n, o, p, e = a(c),
                    f = e.attr("type"),
                    g = /^input$/i.test(c.nodeName),
                    h = /^(number|range)$/i.test(f);
                if (!(!g || !h || "number" == f && d.types.number || "range" == f && d.types.range)) {
                    for (i = parseInt(e.attr("min")), j = parseInt(e.attr("max")), k = parseInt(e.attr("step")), l = parseInt(e.attr("value")), m = e.prop("attributes"), n = a("<select>"), i = isNaN(i) ? -100 : i, p = i; p <= j; p += k) o = a('<option value="' + p + '">' + p + "</option>"), (l == p || l > p && l < p + k) && o.attr("selected", ""), n.append(o);
                    a.each(m, function() {
                        n.attr(this.name, this.value)
                    }), e.replaceWith(n)
                }
            },
            autofocus: function(b, c) {
                var e = a(c),
                    f = !!e.attr("autofocus"),
                    g = /^(input|textarea|select|fieldset)$/i.test(c.nodeName),
                    h = /^submit$/i.test(c.type),
                    i = d.attributes.autofocus;
                !i && g && !h && f && a(function() {
                    b.setFocusOn(c)
                })
            },
            findLabel: function(b) {
                var d, c = a('label[for="' + b.attr("id") + '"]');
                return c.length <= 0 && (d = b.parent(), "label" == d.get(0).tagName.toLowerCase() && (c = d)), c
            },
            setFocusOn: function(b) {
                "fieldset" === b.tagName.toLowerCase() ? a(b).find(":first").focus() : a(b).focus()
            },
            renderErrorMessages: function(b, c) {
                for (var g, h, d = c.elements, e = d.length, f = {
                        errors: []
                    }; e--;) g = a(d[e]), h = b.findLabel(g), g.hasClass(b.options.requiredClass) && (f.errors[e] = h.text().replace("*", "") + b.options.requiredMessage), g.hasClass(b.options.patternClass) && (f.errors[e] = h.text().replace("*", "") + b.options.patternMessage);
                f.errors.length > 0 && Joomla.renderMessages(f)
            }
        };
    a.fn.h5f = function(a) {
        return this.each(function() {
            Object.create(e).init(a, this)
        })
    }, a.fn.h5f.options = {
        invalidClass: "invalid",
        requiredClass: "required",
        requiredMessage: " is required.",
        placeholderClass: "placeholder",
        patternClass: "pattern",
        patternMessage: " doesn't match pattern.",
        doRenderMessage: !1,
        formValidationEvent: "onSubmit",
        emailPatt: /^[a-zA-Z0-9.!#$%&‚Äô*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        urlPatt: /[a-z][\-\.+a-z]*:\/\//i
    }, a(function() {
        a("form").h5f({
            doRenderMessage: !0,
            requiredClass: "musthavevalue"
        })
    })
}(jQuery, document);