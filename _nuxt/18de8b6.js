(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{272:function(t,n,e){},273:function(t,n,e){"use strict";e.r(n);var r={name:"Footer"},o=(e(274),e(65)),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("footer",{staticClass:"footer text-center p-1"},[n("b-container",[n("b-row",[n("b-col",{attrs:{sm:"12"}},[n("div",{staticClass:"copyright-box"},[n("p",{staticClass:"copyright"},[this._v("© Copyright "),n("strong",[this._v("Navarasu")]),this._v(". All Rights Reserved")])])])],1)],1)],1)}),[],!1,null,"7354a470",null);n.default=component.exports;installComponents(component,{Footer:e(273).default})},274:function(t,n,e){"use strict";var r=e(272);e.n(r).a},275:function(t,n,e){},276:function(t,n,e){},277:function(t,n,e){},278:function(t,n,e){},279:function(t,n,e){},280:function(t,n,e){},281:function(t,n,e){"use strict";e.r(n);var r={name:"Header"},o=(e(292),e(65)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"home",attrs:{id:"header"}},[r("b-container",[r("div",{staticClass:"clouds"},[r("img",{staticStyle:{"--i":"2"},attrs:{src:e(288)}}),t._v(" "),r("img",{staticStyle:{"--i":"3",height:"100%"},attrs:{src:e(289)}}),t._v(" "),r("img",{staticStyle:{"--i":"4"},attrs:{src:e(290)}}),t._v(" "),r("img",{staticStyle:{"--i":"5"},attrs:{src:e(291)}})]),t._v(" "),r("div",{staticClass:"header-content"}),t._v(" "),r("vue-typed-js",{attrs:{strings:["Technology","Music","Life"],loop:!0,"smart-backspace":!0,typeSpeed:50,"back-speed":10,type:"text/css",media:"screen","show-cursor":!0}},[r("div",{staticClass:"header-text"},[r("h1",[t._v("Navarasu")]),t._v(" "),r("h2",[r("span",[t._v("An Intense Seeker, Seeking  a Profound Experience of ")]),r("br"),r("span",{staticClass:"typing"})]),t._v(" "),r("p",[r("span",{staticClass:"typing"})])])])],1)],1)}),[],!1,null,"0e5f2d7f",null);n.default=component.exports},282:function(t,n,e){"use strict";e.r(n);e(21),e(20),e(14);var r={generateEmailTemplate:function(t){return'\n    <!doctype html>\n    <html>\n      <head>\n        <meta name="viewport" content="width=device-width" />\n        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n        <title>Simple Transactional Email</title>\n        <style>\n          /* -------------------------------------\n              GLOBAL RESETS\n          ------------------------------------- */\n\n          /*All the styling goes here*/\n\n          img {\n            border: none;\n            -ms-interpolation-mode: bicubic;\n            max-width: 100%;\n          }\n\n          body {\n            background-color: #f6f6f6;\n            font-family: sans-serif;\n            -webkit-font-smoothing: antialiased;\n            font-size: 14px;\n            line-height: 1.4;\n            margin: 0;\n            padding: 0;\n            -ms-text-size-adjust: 100%;\n            -webkit-text-size-adjust: 100%;\n          }\n\n          table {\n            border-collapse: separate;\n            mso-table-lspace: 0pt;\n            mso-table-rspace: 0pt;\n            width: 100%; }\n            table td {\n              font-family: sans-serif;\n              font-size: 14px;\n              vertical-align: top;\n              text-align: left;\n          }\n\n          /* -------------------------------------\n              BODY & CONTAINER\n          ------------------------------------- */\n\n          .body {\n            background-color: #f6f6f6;\n            width: 100%;\n          }\n\n          /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */\n          .container {\n            display: block;\n            margin: 0 auto !important;\n            /* makes it centered */\n            max-width: 580px;\n            padding: 10px;\n            width: 580px;\n          }\n\n          /* This should also be a block element, so that it will fill 100% of the .container */\n          .content {\n            box-sizing: border-box;\n            display: block;\n            margin: 0 auto;\n            max-width: 580px;\n            padding: 10px;\n          }\n\n          /* -------------------------------------\n              HEADER, FOOTER, MAIN\n          ------------------------------------- */\n          .main {\n            background: #ffffff;\n            border-radius: 3px;\n            width: 100%;\n          }\n          .msg-details td {\n            text-align: center;\n          }\n\n          .wrapper {\n            box-sizing: border-box;\n            padding: 20px;\n          }\n\n          .content-block {\n            padding-bottom: 10px;\n            padding-top: 10px;\n          }\n\n          .footer {\n            clear: both;\n            margin-top: 10px;\n            text-align: center;\n            width: 100%;\n          }\n            .footer td,\n            .footer p,\n            .footer span,\n            .footer a {\n              color: #999999;\n              font-size: 12px;\n              text-align: center;\n          }\n\n          /* -------------------------------------\n              TYPOGRAPHY\n          ------------------------------------- */\n          h1,\n          h2,\n          h3,\n          h4 {\n            color: #000000;\n            font-family: sans-serif;\n            font-weight: 400;\n            line-height: 1.4;\n            margin: 0;\n            margin-bottom: 30px;\n          }\n\n          h1 {\n            font-size: 35px;\n            font-weight: 300;\n            text-align: center;\n            text-transform: capitalize;\n          }\n\n          p,\n          ul,\n          ol {\n            font-family: sans-serif;\n            font-size: 14px;\n            font-weight: normal;\n            margin: 0;\n            margin-bottom: 15px;\n          }\n            p li,\n            ul li,\n            ol li {\n              list-style-position: inside;\n              margin-left: 5px;\n          }\n\n          a {\n            color: #3498db;\n            text-decoration: underline;\n          }\n\n          /* -------------------------------------\n              BUTTONS\n          ------------------------------------- */\n          .btn {\n            box-sizing: border-box;\n            width: 100%; }\n            .btn > tbody > tr > td {\n              padding-bottom: 15px; }\n            .btn table {\n              width: auto;\n          }\n            .btn table td {\n              background-color: #ffffff;\n              border-radius: 5px;\n              text-align: center;\n          }\n            .btn a {\n              background-color: #ffffff;\n              border: solid 1px #3498db;\n              border-radius: 5px;\n              box-sizing: border-box;\n              color: #3498db;\n              cursor: pointer;\n              display: inline-block;\n              font-size: 14px;\n              font-weight: bold;\n              margin: 0;\n              padding: 12px 25px;\n              text-decoration: none;\n              text-transform: capitalize;\n          }\n\n          .btn-primary table td {\n            background-color: #3498db;\n          }\n\n          .btn-primary a {\n            background-color: #3498db;\n            border-color: #3498db;\n            color: #ffffff;\n          }\n\n          /* -------------------------------------\n              OTHER STYLES THAT MIGHT BE USEFUL\n          ------------------------------------- */\n          .last {\n            margin-bottom: 0;\n          }\n\n          .first {\n            margin-top: 0;\n          }\n\n          .align-center {\n            text-align: center;\n          }\n\n          .align-right {\n            text-align: right;\n          }\n\n          .align-left {\n            text-align: left;\n          }\n\n          .clear {\n            clear: both;\n          }\n\n          .mt0 {\n            margin-top: 0;\n          }\n\n          .mb0 {\n            margin-bottom: 0;\n          }\n\n          .preheader {\n            color: transparent;\n            display: none;\n            height: 0;\n            max-height: 0;\n            max-width: 0;\n            opacity: 0;\n            overflow: hidden;\n            mso-hide: all;\n            visibility: hidden;\n            width: 0;\n          }\n\n          .powered-by a {\n            text-decoration: none;\n          }\n\n          hr {\n            border: 0;\n            border-bottom: 1px solid #f6f6f6;\n            margin: 20px 0;\n          }\n\n          /* -------------------------------------\n              RESPONSIVE AND MOBILE FRIENDLY STYLES\n          ------------------------------------- */\n          @media only screen and (max-width: 620px) {\n            table[class=body] h1 {\n              font-size: 28px !important;\n              margin-bottom: 10px !important;\n            }\n            table[class=body] p,\n            table[class=body] ul,\n            table[class=body] ol,\n            table[class=body] td,\n            table[class=body] span,\n            table[class=body] a {\n              font-size: 16px !important;\n            }\n            table[class=body] .wrapper,\n            table[class=body] .article {\n              padding: 10px !important;\n            }\n            table[class=body] .content {\n              padding: 0 !important;\n            }\n            table[class=body] .container {\n              padding: 0 !important;\n              width: 100% !important;\n            }\n            table[class=body] .main {\n              border-left-width: 0 !important;\n              border-radius: 0 !important;\n              border-right-width: 0 !important;\n            }\n            table[class=body] .btn table {\n              width: 100% !important;\n            }\n            table[class=body] .btn a {\n              width: 100% !important;\n            }\n            table[class=body] .img-responsive {\n              height: auto !important;\n              max-width: 100% !important;\n              width: auto !important;\n            }\n          }\n\n          /* -------------------------------------\n              PRESERVE THESE STYLES IN THE HEAD\n          ------------------------------------- */\n          @media all {\n            .ExternalClass {\n              width: 100%;\n            }\n            .ExternalClass,\n            .ExternalClass p,\n            .ExternalClass span,\n            .ExternalClass font,\n            .ExternalClass td,\n            .ExternalClass div {\n              line-height: 100%;\n            }\n            .apple-link a {\n              color: inherit !important;\n              font-family: inherit !important;\n              font-size: inherit !important;\n              font-weight: inherit !important;\n              line-height: inherit !important;\n              text-decoration: none !important;\n            }\n            #MessageViewBody a {\n              color: inherit;\n              text-decoration: none;\n              font-size: inherit;\n              font-family: inherit;\n              font-weight: inherit;\n              line-height: inherit;\n            }\n            .btn-primary table td:hover {\n              background-color: #34495e !important;\n            }\n            .btn-primary a:hover {\n              background-color: #34495e !important;\n              border-color: #34495e !important;\n            }\n          }\n\n        </style>\n      </head>\n      <body class="">\n        <span class="preheader">This is preheader text. Some clients will show this text as a preview.</span>\n        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">\n          <tr>\n            <td>&nbsp;</td>\n            <td class="container">\n              <div class="content">\n\n                \x3c!-- START CENTERED WHITE CONTAINER --\x3e\n                <table role="presentation" class="main">\n\n                  \x3c!-- START MAIN CONTENT AREA --\x3e\n                  <tr>\n                    <td class="wrapper">\n                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">\n                        <tr>\n                          <td>\n                            <p>Hi Imran,</p>\n                            <p>You got a new message from '.concat(t.name,'</p>\n                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">\n                              <tbody>\n                                <tr>\n                                  <td align="left">\n                                    <table role="presentation" border="1" cellpadding="0" cellspacing="0" class="msg-details">\n                                      <tbody>\n                                        <tr>\n                                          <td>Name</td>\n                                          <td>').concat(t.name,"</td>\n                                        </tr>\n                                        <tr>\n                                          <td>Email</td>\n                                          <td>").concat(t.email,"</td>\n                                        </tr>\n                                        <tr>\n                                          <td>IP Address</td>\n                                          <td>").concat(t.ipAddress,"</td>\n                                        </tr>\n                                        <tr>\n                                          <td>Subject</td>\n                                          <td>").concat(t.subject,"</td>\n                                        </tr>\n                                        <tr>\n                                          <td>Message</td>\n                                          <td>").concat(t.messageBody,'</td>\n                                        </tr>\n                                      </tbody>\n                                    </table>\n                                  </td>\n                                </tr>\n                              </tbody>\n                            </table>\n                            <p>Hope you got some free time to respond. Don\'t ignore any emails.</p>\n                            <p>Have a great day!</p>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                  </tr>\n\n                \x3c!-- END MAIN CONTENT AREA --\x3e\n                </table>\n                \x3c!-- END CENTERED WHITE CONTAINER --\x3e\n\n                \x3c!-- START FOOTER --\x3e\n                <div class="footer">\n                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">\n                    <tr>\n                      <td class="content-block">\n                        <span class="apple-link">From DreamsOfImran.in</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class="content-block powered-by">\n                        Designed by <a href="https://dreamsofimran.in">Imran Basha</a>.\n                      </td>\n                    </tr>\n                  </table>\n                </div>\n                \x3c!-- END FOOTER --\x3e\n\n              </div>\n            </td>\n            <td>&nbsp;</td>\n          </tr>\n        </table>\n      </body>\n    </html>\n    ')}},o={name:"Contact",data:function(){return{sending:!1,message:{name:"",email:"",ipAddress:"",subject:"",messageBody:""}}},mounted:function(){this.getIPAddress()},methods:{sendMessage:function(){var t=this;this.sending=!0;r.generateEmailTemplate(this.message);this.$mail.send({from:"John Doe",subject:"Incredible",text:"This is an incredible test message",to:"johndoe@gmail.com"}).then((function(n){"OK"===n?(t.$toast.success("Your message has been sent. Thank you!"),t.clearForm(),t.sending=!1):(t.clearForm(),t.$toast.error("Oops! Something went wrong."),t.sending=!1)}))},getIPAddress:function(){var t=this;fetch("https://api.ipify.org?format=json").then((function(t){return t.json()})).then((function(n){var e=n.ip;t.message.ipAddress=e}))},clearForm:function(){this.message.name="",this.message.email="",this.message.subject="",this.message.messageBody=""}}},l=(e(297),e(65)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"contact shadow p-5 m rounded",attrs:{id:"contact"}},[e("b-container",[e("div",{staticClass:"section-title mb-5"},[e("h2",[t._v("\n          Contact Me\n        ")])]),t._v(" "),e("b-row",{staticClass:"mb-5"},[e("b-col",{attrs:{lg:"6"}},[e("b-row",[e("b-col",{attrs:{md:"6"}},[e("div",{staticClass:"info-box shadow p-4 m rounded text-center"},[e("i",{staticClass:"fa fa-envelope-o",attrs:{"aria-hidden":"true"}}),t._v(" "),e("h3",[t._v("Email Me")]),t._v(" "),e("p",[t._v("nova@navarasu.com")])])]),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("div",{staticClass:"info-box shadow p-4 m rounded text-center"},[e("i",{staticClass:"fa fa-volume-control-phone",attrs:{"aria-hidden":"true"}}),t._v(" "),e("h3",[t._v("Call Me")]),t._v(" "),e("p",[t._v("+91 9994508440")])])])],1)],1),t._v(" "),e("b-col",{attrs:{lg:"6"}},[e("b-form",{staticClass:"contactForm shadow p-4 m rounded text-center",on:{submit:function(n){return n.preventDefault(),t.sendMessage()}}},[e("b-row",[e("b-col",{staticClass:"py-0",attrs:{lg:"6"}},[e("b-form-group",{staticClass:"contact-block1"},[e("b-input",{staticClass:"form-control-contact py-4",attrs:{id:"name",type:"text",name:"name",placeholder:"Your Name",required:""},model:{value:t.message.name,callback:function(n){t.$set(t.message,"name",n)},expression:"message.name"}})],1)],1),t._v(" "),e("b-col",{staticClass:"py-0",attrs:{lg:"6"}},[e("b-form-group",[e("b-input",{staticClass:"form-control-contact py-4",attrs:{id:"email",type:"email",name:"email",placeholder:"Your Email",required:""},model:{value:t.message.email,callback:function(n){t.$set(t.message,"email",n)},expression:"message.email"}})],1)],1),t._v(" "),e("b-col",{staticClass:"py-0",attrs:{lg:"12"}},[e("b-form-group",[e("b-input",{staticClass:"form-control-contact py-4",attrs:{id:"subject",type:"text",name:"subject",placeholder:"Subject",required:""},model:{value:t.message.subject,callback:function(n){t.$set(t.message,"subject",n)},expression:"message.subject"}})],1)],1),t._v(" "),e("b-col",{staticClass:"py-0",attrs:{lg:"12"}},[e("b-form-group",[e("b-textarea",{staticClass:"form-control-contact",attrs:{name:"message",rows:"4",placeholder:"Message",required:""},model:{value:t.message.messageBody,callback:function(n){t.$set(t.message,"messageBody",n)},expression:"message.messageBody"}})],1)],1),t._v(" "),e("b-col",{staticClass:"py-0 text-center",attrs:{lg:"12"}},[e("b-btn",{staticClass:"bg-warning border-0",attrs:{type:"submit",disabled:t.sending}},[t.sending?e("atom-spinner",{staticClass:"mx-auto",attrs:{"animation-duration":1e3,size:40}}):e("span",[t._v("\n                    Send Message\n                  ")])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"2f4b40d6",null);n.default=component.exports},283:function(t,n,e){"use strict";e.r(n);var r={name:"NavBar"},o=(e(287),e(65)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-navbar",{staticClass:"nav-menu",attrs:{toggleable:"lg",fixed:"top"}},[e("b-navbar-toggle",{attrs:{target:"nav-collapse"},scopedSlots:t._u([{key:"default",fn:function(t){return[t.expanded?e("span",{staticClass:"position-relative",staticStyle:{right:"-9rem"}},[e("small",[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]):e("span",{staticStyle:{color:"#ffffff"}},[e("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})])]}}])}),t._v(" "),e("b-collapse",{staticClass:"mobile-nav-toggle",attrs:{id:"nav-collapse","is-nav":""}},[e("header",{staticClass:"d-flex flex-column justify-content-center",attrs:{id:"headers"}},[e("b-nav",{staticClass:"mr-auto align-top",attrs:{vertical:""}},[e("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#header",expression:"'#header'"}],staticClass:"active",attrs:{href:"#"}},[e("svg",{staticClass:"bi bi-house-door-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"}})]),e("span",[t._v("Home")])]),t._v(" "),e("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],attrs:{href:"#","exact-active-class":"active"}},[e("svg",{staticClass:"bi bi-person-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})]),t._v(" "),e("span",[t._v("About")])]),t._v(" "),e("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#opensource",expression:"'#opensource'"}],attrs:{href:"#"}},[e("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",[t._v("Open Source")])]),t._v(" "),e("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#blogs",expression:"'#blogs'"}],attrs:{href:"#"}},[e("svg",{staticClass:"bi bi-newspaper",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"}}),t._v(" "),e("path",{attrs:{d:"M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"}})]),t._v(" "),e("span",[t._v("Blog")])]),t._v(" "),e("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],attrs:{href:"#"}},[e("svg",{staticClass:"bi bi-envelope-open-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z"}})]),e("span",[t._v("Contact")])])],1)],1)])],1)}),[],!1,null,"2f5dc17c",null);n.default=component.exports;installComponents(component,{Header:e(281).default})},284:function(t,n,e){"use strict";e.r(n);var r={name:"About"},o=(e(294),e(65)),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"paddsection shadow p-5 m rounded",attrs:{id:"about"}},[n("b-container",[n("div",{staticClass:"section-title mb-4"},[n("h2",[this._v("\n        About Me\n      ")])]),this._v(" "),n("b-row",{staticClass:"justify-content-between"},[n("b-col",{attrs:{lg:"4"}},[n("div",{staticClass:"div-img-bg"},[n("div",{staticClass:"about-img"},[n("b-img",{staticClass:"img-responsive",attrs:{src:e(293),alt:"me"}})],1)])]),this._v(" "),n("b-col",{attrs:{lg:"7"}},[n("div",{staticClass:"about-descr"},[n("p",{staticClass:"p-heading"},[this._v("\n            FullStack Developer, Geek, Designer, Reader & always a Lifetime\n            Learner!\n\n          ")]),n("p",{staticClass:"separator"},[this._v("\n            I’m a developer from India, with 2+ years of experience. I\n            almost code every day, and I still love it as much now as when I\n            first discovered it. Writing code has always been easy to me as\n            breathing, and even if I didn’t get paid for doing it. I love to\n            do it anyhow because it is fun. The sense of accomplishment when\n            solving a really complicated problem cannot be beat! It just\n            feels as if you have been at the best party in town. How come\n            not everybody wants to be a developer.\n          ")]),this._v(" "),n("br")])])],1)],1)],1)}),[],!1,null,"751aa10a",null);n.default=component.exports},285:function(t,n,e){"use strict";e.r(n);var r={name:"Product"},o=(e(295),e(65)),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"opensource shadow p-5 m rounded",attrs:{id:"opensource"}},[n("b-container",[n("div",{staticClass:"section-title mb-3"},[n("h2",[this._v("\n        Open Sources\n      ")])]),this._v(" "),n("b-row",{staticClass:"text-center pt-3"},[n("b-col",{attrs:{md:"2"}}),this._v(" "),n("b-col",{staticClass:"opensource-item",attrs:{md:"4"}},[n("div",{staticClass:" opensource-border"},[n("a",{attrs:{href:"https://github.com/navarasu/opencv-log",target:"_blank"}},[n("img",{staticStyle:{width:"80%"},attrs:{src:"https://raw.githubusercontent.com/navarasu/opencv-log/master/docs/assets/opencv-log-bl.png"}})])])]),this._v(" "),n("b-col",{staticClass:"opensource-item",attrs:{md:"4"}},[n("div",{staticClass:"opensource-border pt-2"},[n("a",{attrs:{href:"https://github.com/navarasu/serverless-ruby-layer",target:"_blank"}},[n("img",{staticStyle:{width:"80%"},attrs:{src:"https://raw.githubusercontent.com/navarasu/serverless-ruby-layer/master/docs/assets/serverless-ruby-layer.png"}})])])]),this._v(" "),n("b-col",{attrs:{md:"2"}})],1)],1)],1)}),[],!1,null,"04a5e1ff",null);n.default=component.exports},286:function(t,n,e){"use strict";e.r(n);e(1),e(20),e(25),e(66);var r=e(26),o=(e(147),{name:"Blogs",data:function(){return{feeds:[]}},fetch:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40navarasu").then((function(t){return t.json()}));case 2:data=n.sent,t.feeds=data.items.filter((function(t){return t.categories[0]}));case 4:case"end":return n.stop()}}),n)})))()}))}),l=(e(296),e(65)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"blog-mf shadow p-5 m rounded",attrs:{id:"blogs"}},[e("b-container",[e("b-row",{staticClass:"mb-lg-5 mb-2"},[e("b-col",{attrs:{sm:"12",md:"7"}},[e("div",{staticClass:"section-title "},[e("h2",{staticClass:"text-md-right"},[t._v("\n           Blog\n         ")])])]),t._v(" "),e("b-col",{staticClass:"title-a text-right pt-lg-4 pt-3",attrs:{sm:"12",md:"5"}},[e("nuxt-link",{attrs:{to:"/blog"}},[e("h6",[t._v("View All"),e("i",{staticClass:"fa fa-long-arrow-right right"})])])],1)],1),t._v(" "),e("b-row",t._l(t.feeds.slice(0,6),(function(n){return e("b-col",{key:n.title,staticClass:"pt-2",attrs:{md:"4"}},[e("div",{staticClass:"card card-blog"},[e("div",{staticClass:"card-img"},[e("a",{attrs:{href:n.link,target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:n.thumbnail,alt:"img"}})])]),t._v(" "),e("div",{staticClass:"card-body position-relative"},[e("div",{staticClass:"card-category-box position-absolute"},[e("div",{staticClass:"card-category  bg-primary text-white pl-3 pr-3 rounded"},[e("h6",{staticClass:"category d-inline font-weight-bold text-uppercase "},[t._v(t._s(n.categories[0]))])])]),t._v(" "),e("h6",{staticClass:"card-title mt-3 font-weight-bold"},[e("a",{attrs:{href:n.link,target:"_blank"}},[t._v(t._s(n.title))])])]),t._v(" "),e("div",{staticClass:"read-more text-uppercase font-weight-bold m-3"},[e("a",{attrs:{href:n.link,target:"_blank"}},[e("i",{staticClass:"fa fa-arrow-right right"}),t._v(" Read More")])])])])})),1)],1)],1)}),[],!1,null,"7885dbeb",null);n.default=component.exports},287:function(t,n,e){"use strict";var r=e(275);e.n(r).a},288:function(t,n,e){t.exports=e.p+"img/cloud1.2167fed.png"},289:function(t,n,e){t.exports=e.p+"img/cloud3.7c878e0.png"},290:function(t,n,e){t.exports=e.p+"img/cloud4.ea046c5.png"},291:function(t,n,e){t.exports=e.p+"img/cloud5.34ae4c8.png"},292:function(t,n,e){"use strict";var r=e(276);e.n(r).a},293:function(t,n,e){t.exports=e.p+"img/NovaProfile.17b72ca.webp"},294:function(t,n,e){"use strict";var r=e(277);e.n(r).a},295:function(t,n,e){"use strict";var r=e(278);e.n(r).a},296:function(t,n,e){"use strict";var r=e(279);e.n(r).a},297:function(t,n,e){"use strict";var r=e(280);e.n(r).a},299:function(t,n,e){"use strict";e.r(n);var r=e(283),o=e(281),l=e(284),c=e(285),d=e(286),m=e(273),h=e(282),f={name:"Home",components:{NavBar:r.default,Header:o.default,About:l.default,Product:c.default,Blogs:d.default,Contact:h.default,Footer:m.default}},v=e(65),component=Object(v.a)(f,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"w-100"},[n("nav-bar"),this._v(" "),n("Header"),this._v(" "),n("About"),this._v(" "),n("Product"),this._v(" "),n("Blogs"),this._v(" "),n("Contact"),this._v(" "),n("Footer")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{NavBar:e(283).default,Header:e(281).default,About:e(284).default,Product:e(285).default,Blogs:e(286).default,Contact:e(282).default,Footer:e(273).default})}}]);