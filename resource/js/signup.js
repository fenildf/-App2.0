!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(18);r.init()},function(t,e){t.exports=React},function(t,e){"use strict";var n={isMatch:function(t,e){switch(t){case"name":return e.toString().length>>1;case"mobile":return e.toString().match(/^1\d{10}$/)?1:0;case"phone":return e.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return e.toString().match(/^\d{5}$/)?1:0;case"password":return e.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return e.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return e.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(t){var e=window.location.search.substr(1).match(new RegExp("(^|&)"+t+"=([^&]*)(&|$)"));return null===e?null:unescape(e[2])},ParamString:function(){var t=window.location.href,e=window.location.search,n=e?t.split(e)[0].substring(t.split(e)[0].lastIndexOf("/")+1):t.split("/")[t.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(t){var e=this;this.name=t.name,this.version=t.version,this.url=t.url,this.callback=t.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(t){localStorage[e.name]=JSON.stringify(t),localStorage[e.name+"_v"]=e.version,e.callback(t)}})},getPage:function(t){var e=(t.react,t.reactDOMServer,t.req,t.main);return e},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(t){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){t()}},setData:function(t,e){var n=this;return t&&!this.getData()?$.ajax({url:t,success:function(t){n.data=t,e(t)}}):e(this.getData()),this},getData:function(){return this.data}}};t.exports=n},function(t,e){t.exports=ReactDOM},,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0}),e.Warning=void 0;var c=n(1),u=r(c),l=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={message:t.message},n}return s(e,t),i(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({message:t.message})}},{key:"render",value:function(){return u["default"].createElement("p",{className:"message"},this.state.message)}}]),e}(u["default"].Component);l.defaultProps={message:""},e.Warning=l},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0}),e.Protocol=void 0;var c=n(1),u=r(c),l=function(t){function e(){o(this,e);var t=a(this,Object.getPrototypeOf(e).call(this));return t.checkMarkup=function(){return{__html:t.props[t.props.type]}},t}return s(e,t),i(e,[{key:"render",value:function(){return u["default"].createElement("pre",{dangerouslySetInnerHTML:this.checkMarkup()})}}]),e}(u["default"].Component);l.defaultProps={signIn:"<h2>喜蓝互联网金融平台用户协议</h2><p>喜马拉雅电子商务有限公司旗下互联网金融平台“喜蓝理财”（以下简称“喜蓝”）希望您认真阅读《喜蓝互联网金融平台用户协议》（以下简称“本协议”）。一旦您点击同意本协议的按钮，并注册成功或通过上述方式使用喜蓝提供的服务，即表示您同意遵循本协议之所有约定。除本协议另有约定外，“喜蓝理财”指包含域名为www.xilanlicai.com的网站及/或相关移动客户端应用程序（包含但不限于ios、安卓、windows mobile等各种移动终端操作系统中的应用程序）</p><h3>一、协议订立和修订</h3><p><strong>1.1</strong>本协议内容包括以下条款及喜蓝已经发布的或将来可能发布的各类规则。所有规则为本协议不可分割的一部分，与协议正文具有同等法律效力。本协议是您与喜蓝共同签订的，适用于您在喜蓝平台的全部活动。</p><p><strong>1.2</strong>您一经注册即视为您同意喜马拉雅在将来任何时刻有权根据公司业务需求、互联网的发展或中华人民共和国有关法律、法规的变化，不时地单方面制定、修改本协议条款或喜蓝各类规则，并在喜蓝平台上予以公布或更新，无需另行单独通知您。经修改或制定后的协议、规则一经喜蓝公布，立即自动生效。若您在本协议内容、规则变更或制定并在喜蓝平台公告或更新后继续使用喜蓝服务的，表示您已充分阅读、理解并接受修改、制定后的协议及规则内容，也将遵循修改、制定后的协议及规则内容使用喜蓝服务；若您不同意修改后的协议及规则内容，您应立即停止使用喜蓝服务。</p><p><strong>1.3</strong>您下载和使用喜蓝平台，由于上网而产生的流量费用由相关运营商收取，为防止他人冒用您的身份注册或使用喜蓝，喜蓝可能会向您的手机发送一条短信来验证信息，由此产生的短信费用由喜蓝支付，喜蓝在此过程中不收取任何服务费用。</p><p><strong>1.4</strong>您同意喜马拉雅有权在合理范围内对喜蓝及其功能和服务进行维护、改动、升级。</p><p><strong>1.5</strong>您同意，您在喜蓝平台上发生的所有交易，您不可撤销的授权喜蓝按照其制定的交易规则进行处理，您不可撤销的授权喜蓝有权按照您所进行的交易内容及指令将交易款项支付到交易所对应的交易对方。同时您亦不可撤销的授权喜蓝有权按照您所进行的交易内容及指令将交易对方向您支付的款项通过喜蓝转交至您支付时所使用的账户。</p><h3>二、个人用户</h3><p><strong>2.1</strong>您必须是具备完全民事权利能力和完全民事行为能力的自然人。您保证，在您同意接受本协议并注册成为喜蓝用户时，您已年满18周岁并具有完全民事行为能力。若您不具备前述资格，则您的监护人应承担因此而导致的一切后果，且喜蓝有权注销或永久冻结用户的账号。</p><p><strong>2.2</strong>喜蓝无法保证用户信息的准确、及时和完整。您应对您提供的信息承担全部责任，包括但不限于信息的合法合规性、真实性、准确性、完整性、及时性、有效性。若您所提供的信息有任何错误、不实或不完整，喜蓝有权暂停或终止向您提供喜蓝全部或部分服务。由上述原因导致服务无法正常提供，并由此导致的任何直接或间接损失由您自行承担，喜蓝不承担任何责任。<br /><p><strong>2.3</strong>您有义务遵守法律法规、政策、道德、喜蓝各项规则以及喜蓝相关业务规则等，不将喜蓝用于任何非法目的，也不以任何非法方式使用喜蓝所提供的服务。 喜蓝有权基于单方独立判断，在认为可能发生危害交易安全等情形时，不经通知而先行暂停、中断或终止向您提供本协议项下的全部或部分服务，且无需对您承担任何责任。前述情形包括但不限于：喜蓝认为您提供的个人资料不具有真实性、有效性或完整性；喜蓝发现异常交易或有疑义或有违法之虞时；喜蓝认为您的账户涉嫌洗钱、套现、传销、被冒用或其他喜蓝认为有风险之情形。</p><p><strong>2.4</strong>您应妥善保管注册的用户名称、密码等信息以及您的其他信息，所有使用该信息发生的行为包含使用您移动终端上的喜蓝应用程序的行为均视为您作出，并由您承担全部责任。因您保管、设置、使用不当等造成的损失和责任，由您自行承担，与喜蓝无关。喜蓝对账号以及密码认证通过后不对任何有关操作的真实性承担责任。您不得以账户密码等账户信息被盗用或其他理由否认已订立的合同的效力或不按照该等合同履行相关义务。</p><p><strong>2.5</strong>您的个人资料受到严格保护，不接受喜蓝及您之外的任何个人或单位的查询请求。但法律法规、司法机关、监管机构、本协议另有规定或要求，或喜蓝为执行本协议确有必要披露的除外。</p><p><strong>2.6</strong>您承诺，您通过喜蓝进行的理财产品投资如涉及个人所得税及相关税费，将自行申报及缴纳，喜蓝不承担代缴义务。</p><p><strong>2.7</strong>您不得私自仿制、伪造在喜蓝平台上签订的电子合同或印章，不得用伪造的合同进行招摇撞骗或进行其他非法使用，否则由您自行承担责任。</p><p><strong>2.8</strong>若您的行为违反本协议的相关规定，您的用户资格和帐号可能被注销、暂时冻结或永久冻结。</p><h3>三、服务内容</h3><p><strong>3.1</strong>喜蓝服务内容主要包括根据个人用户需求发布交易信息、提供交易居间服务、代为支付服务、提供交易管理服务、提供客户服务等，具体详情以喜蓝当时提供的服务内容为准。</p><p><strong>3.1.1</strong>您在喜蓝平台进行注册时将生成您的账户，您账户将记载您在本网站平台的活动，上述您的账户是您登陆本网站平台的唯一账户。同时，您保证并承诺您通过喜蓝平台进行的交易其资金来源合法。</p><p><strong>3.1.2</strong>您确认您在喜蓝平台上按喜蓝的流程及规则所确认的交易状态，将成喜蓝为您进行相关交易或操作（包括但不限于支付或收取款项、冻结资金、订立合同等）的不可撤销的指令。您同意相关指令的执行时间以喜蓝系统中进行实际操作的时间为准。您同意喜蓝有权依据本协议及/或喜蓝相关纠纷处理规则等约定对相关事项进行处理。您未能及时对交易状态进行修改、确认或未能提交相关申请所引起的任何纠纷或损失由您自行负责。</p><p><strong>3.1.3</strong>喜蓝平台并非银行或金融机构，喜蓝平台不提供“即时”资金转账服务，资金的到账时间应根据您所购买的理财产品期限、交易对方的支付时间、第三方支付机构的支付时间等因素确定，您同意喜蓝对资金到账延迟不承担任何责任，相关责任您可向第三方自行追索。</p><p><strong>3.1.4</strong>喜蓝平台为您及其他用户提供交易居间服务，居间服务系指将交易对方的交易信息通过喜蓝平台发布，供您选择投资，或将您的交易信息通过喜蓝平台发布，供交易对方选择投资，故您与交易对方通过喜蓝平台达成的交易均系您与交易对方之间形成的直接交易，喜蓝仅系居间方。</p><p><strong>3.1.5</strong>喜蓝有权基于交易安全等方面的考虑不时设定涉及交易的相关事项，包括但不限于交易限制、交易次数等，您了解前述设定可能会对交易造成一定不便，对此没有异议。</p><p><strong>3.1.6</strong>如喜蓝发现因系统故障或其他任何因素导致处理错误，无论对喜蓝或对您有利，喜蓝均有权纠正该错误。如因该错误导致您实际收到款项多于应获得金额，无论错误性质和原因为何，喜蓝均可纠正该错误行为并有权直接扣回相应金额，您应根据喜蓝向您发出的有关纠正错误的通知，返还多收款项或进行相应支付操作。因前述错误而多付或少付的款项不计息，且喜蓝亦不承担因前述错误而导致的任何损失或责任（包括利息、汇率损失等）。</p><p><strong>3.1.7</strong>喜蓝将为您提供查询服务，您可通过喜蓝查询您当下通过喜蓝所购买的所有理财产品的记录及资产总额，及时了解您投资总额及收益情况。</p><p><strong>3.2</strong>与喜蓝合作的第三方支付机构将为您提供银行卡第三方支付服务，用以完成投资支付。您同意委托该第三方支付机构为您提供包括但不限于银行卡认证、代扣、代付等服务，并不可撤销的授权喜蓝根据您所购买的理财产品将您的投资资金支付给交易对方。同时，您也不可撤销的授权喜蓝根据您所购买的理财产品将您的交易回款直接支付到您购买产品时所使用的银行卡账户。您应当根据喜蓝的流程及提示填写以您本人名义开户并有效的银行借记卡等信息，经由喜蓝及第三方支付机构审核通过及支付成功后，喜蓝会记录您的银行卡账户信息。如您未按照喜蓝的流程及提示填写相关信息或填写的信息错误、虚假、过时或不完整，或者喜蓝有合理的理由怀疑您提交的信息为错误、虚假、过时或不完整，您因此未能成功使用银行卡认证、代扣、代付等服务而产生的损失由您自行承担。</p><p><strong>3.3</strong>您每次通过喜蓝投资理财产品成功后，喜蓝及第三方支付机构均会记录您支付成功的银行账户卡户信息，并将该银行卡账户作为该笔交易对应的回款账户，即当理财产品到期兑付时，喜蓝及第三方支付机构会将交易回款直接支付到您每次成功支付购买产品时所使用的银行卡账户。您应当保证购买理财产品时使用的银行卡账户在理财产品到期兑付时未因注销、挂失、冻结等原因无法正常使用及收款，否则由此造成的损失由您自行承担。如当您购买的理财产品到期兑付时，您确因购买时使用的银行卡账户无法正常使用需要变更的，请及时与喜蓝客服人员联系，喜蓝将会为您提供变更服务。</p><p><strong>3.4</strong>喜马拉雅及喜蓝不对在喜蓝平台发布的任何理财产品的本金及收益兑付进行任何形式的保证、担保及承诺，如理财产品有第三方进行保证、担保及承诺的，您可在条件具备时直接向第三方主张。</p><p><strong>3.5</strong>服务费用：当您使用喜蓝平台服务时，喜蓝可能会向您收取相关服务费用。各项服务费用详见您使用喜蓝服务时喜蓝平台上所列明的收费方式或收费说明。喜蓝保留单方面制定及调整服务费用的权利。您在使用喜蓝平台服务时，可能需要向相关第三方（如银行或第三方支付公司等）支付一定费用，具体收费标准详见第三方网站及/或喜蓝平台提示及/或自行咨询第三方。</p><h3>四、账户管理</h3><p><strong>4.1</strong>喜蓝的会员积分体系中您所获得的积分并不等同于任何真实货币，仅为用户因特定行为而获得的奖励，可换取相关礼品。喜蓝在有合理依据的情况下，可以对您的积分进行包括但不限于调拨、冻结、清除等动作。</p><p><strong>4.2</strong> 注销：您决定不再使用喜蓝服务及注册账户时，应先清偿所有应付款项（包括但不限于借款本金、利息、罚息、违约金、服务费、管理费等）后，向喜蓝申请注销该注册账户，经喜蓝审核同意后可正式注销注册账户。</p><h3>五、风险提示</h3><p><strong>5.1</strong>喜蓝发布的理财产品有投资风险，投资者应当充分认识投资风险，谨慎投资。以下风险提示内容请投资者详细阅读，在充分了解并清楚知晓喜蓝所发布产品蕴含风险的基础上，通过自身判断，自主参与交易，并自愿承担相关风险。</p><p><strong>5.2</strong>信用风险：喜蓝所发布的理财产品，产品存续期间若投资的交易对手发生违约、破产等情形，投资者可能损失部分或全部理财收益。 </p><p><strong>5.3</strong>本金及理财收益风险：理财产品的本金及理财收益不确定的风险由投资者自行承担。 </p><p><strong>5.4</strong>政策风险：喜蓝所发布的理财产品是针对当前的相关法律、法规和政策设计的。如国家政策、市场、法律及其他因素等发生变化，可能影响理财产品的受理、投资、偿还等的正常进行。</p><p><strong>5.5</strong>其它风险：由于自然灾害、战争等不可抗力因素的出现，将严重影响金融市场的正常运行，从而导致理财资产收益降低或损失，甚至影响理财计划的受理、投资、偿还等的正常进行，进而影响资产收益安全。</p><p><strong>5.6 </strong>技术风险：喜蓝平台系基于计算机及互联网为您提供服务，如因受到计算机病毒、木马或其他恶意程序、黑客攻击的破坏，电脑软件、系统、硬件和通信线路出现故障，用户操作不当等情形，喜蓝平台可能面临中断或暂停服务，喜蓝将全力进行修复，喜蓝及喜马拉雅不对上述情形导致的服务中断、暂停或受阻承担责任。</p><h3>六、不可抗力</h3><p><strong>6.1</strong>不可抗力是指不能合理控制、不可预见或即使预见亦无法避免的事件，该事件妨碍、影响或延误喜蓝根据本协议履行其全部或部分义务。由于不可抗力致使喜蓝不能或者部分不能履行本协议或延迟履行本协议，则喜蓝不承担任何责任。</p><p><strong>6.2</strong>由于电信运营商提供的通信线路等原因造成的以及由不可抗力造成的暂时性不能或者部分不能提供服务的，喜蓝不承担任何责任。</p><h3>七、责任限制</h3><p><strong>7.1</strong>在任何情况下，喜蓝及其股东、雇员均不以任何明示或默示的方式对您通过喜蓝进行的理财产品投资而产生的任何形式的直接或间接损失承担法律任，包括但不限于资金损失、利润损失、营业中断损失等；如您参与的投资计划涉及第三方担保或保险，对于担保的效力及实现须由您发起及承担，喜蓝可提供必要的协助。</p><p><strong>7.2</strong>您在喜蓝浏览的理财产品的信息皆为相关交易对方提供，喜蓝会在合理情况下保证对信息进行更新。同时喜蓝上展示的可交易的理财产品也均由相关交易对方提供，您在交易过程中遇到的问题，除非由喜蓝直接造成，否则均由相关交易对方负责解决或承担相应责任，喜蓝网络不承担任何责任。</p><h3>八、电子合同</h3><p><strong>8.1</strong>在喜蓝交易需订立的合同采用电子合同方式。您使用注册账户登录喜蓝网站或移动客户端软件后，根据喜蓝的相关规则，以注册账户ID通过点击确认或类似方式签署的电子合同即视为注册会员本人真实意愿并以注册会员本人名义签署的合同，具有法律效力。注册会员应妥善保管自己的账户密码等账户信息，注册会员通过前述方式订立的电子合同对合同各方具有法律约束力，注册会员不得以其账户密码等账户信息被盗用或其他理由否认已订立的合同的效力或不按照该等合同履行相关义务。注册会员签署电子合同后，不得擅自修改该合同。如注册客户对合同文本有任何争议，应以喜蓝记录的合同为准。</p><p><strong>8.2</strong>您通过喜蓝进行的理财产品投资不提供纸质账单。请通过喜蓝网站、客户端软件或通过喜蓝客服人员等方式了解相关信息。</p><h3>九、知识产权保护</h3><p><strong>9.1</strong>杭州喜马拉雅电子商务有限公司拥有喜蓝及其相关信息、内容的全部合法权利，包括但不限于注册商标、图标、界面设计、有关数据、电子文档等的知识产权等权利受到法律法规的保护。包括您在内的其他任何个人或组织不得进行反向工程、反向汇编、反向编译，不得将图片或软件数据取出使用，也不得进行任何违法违规行为。未经喜蓝许可，任何个人或组织不得将喜蓝用于商业用途。</p><h3>十、法律适用及争端解决</h3><p><strong>10.1</strong>本协议及其修订的有效性、履行与本协议及其修订效力有关的所有事宜，将受中国法律管辖，任何争议仅适用中国法律。</p><p><strong>10.2</strong>本协议签订地为中华人民共和国杭州市。因本协议的签订及履行所引起的您与喜蓝的任何纠纷或争议，首先应友好协商解决，协商不成的，各方同意提交喜马拉雅所在地有管辖权的人民法院诉讼解决。</p><h3>十一、其他</h3><p><strong>11.1</strong>本协议的著作权归喜马拉雅所有，喜马拉雅保留一切解释和修改的权利。</p><p><strong>11.2</strong>喜马拉雅提醒用户，网上交易有风险，您应该进行审慎判断。如果您对本协议或喜蓝平台服务有意见或建议，可与喜蓝客户服务部门联系，我们会给予您必要的帮助。</p>",payment:""},e.Protocol=l},,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0}),e.init=void 0;var c=n(1),u=r(c),l=n(3),p=r(l),f=n(2),h=n(8),g=n(7),d=function(t){function e(){o(this,e);var t=a(this,Object.getPrototypeOf(e).call(this));return t.state={matched:0},t.handleCheck=function(){return t.state.matched||p["default"].render(u["default"].createElement(g.Warning,{message:t.props.placeholder+"输入错误"}),document.querySelector(".warning")),t.state.matched},t}return s(e,t),i(e,[{key:"componentDidMount",value:function(){var t=this;p["default"].findDOMNode(this).onblur=function(e){t.setState({matched:f.isMatch(t.props.className.split(" ")[1],e.target.value)?1:0})}}},{key:"componentWillUpdate",value:function(){this.handleCheck()}},{key:"render",value:function(){return u["default"].createElement("input",{type:this.props.type,className:this.props.className,placeholder:this.props.placeholder,maxLength:this.props.maxLength})}}]),e}(u["default"].Component),m=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).call(this))}return s(e,t),i(e,[{key:"componentDidMount",value:function(){var t=this;this.refs.btnProtocol.onclick=function(){f.QueryString("protocol")||(document.title="喜蓝互联网金融平台用户协议",window.history.pushState({},document.title,"?protocol=1")),p["default"].render(u["default"].createElement(h.Protocol,{type:"signIn"}),document.body)},p["default"].findDOMNode(this.refs.btn).onclick=function(e){var n=t.refs,r=!0,o=!1,a=void 0;try{for(var s,i=t.props.setting[Symbol.iterator]();!(r=(s=i.next()).done);r=!0){var c=s.value;if(!n[c.ref].handleCheck())return void e.preventDefault()}}catch(u){o=!0,a=u}finally{try{!r&&i["return"]&&i["return"]()}finally{if(o)throw a}}}}},{key:"render",value:function(){var t=[],e=this.props.setting;return e.forEach(function(e){t.push(u["default"].createElement(d,{ref:e.ref,type:e.type,className:e.className,placeholder:e.placeholder,maxLength:e.maxLength}))}),u["default"].createElement("form",{method:"post",action:"/api/signup"},t,u["default"].createElement("input",{className:"shortBtn",type:"button",value:"获取"}),u["default"].createElement("input",{className:"longInput invitor",type:"tel",placeholder:"推荐人",maxLength:"11"}),u["default"].createElement("input",{ref:"ckb",className:"ckb",id:"ckb",type:"checkbox",checked:"checked"}),u["default"].createElement("label",{htmlFor:"ckb"},u["default"].createElement("span",null,"我同意"),u["default"].createElement("b",{ref:"btnProtocol"},"《喜蓝互联网金融平台用户协议》")),u["default"].createElement("input",{ref:"btn",className:"longBtn",type:"submit",value:"确认"}))}}]),e}(u["default"].Component);m.defaultProps={setting:[{ref:"mobile",type:"tel",className:"longInput mobile",placeholder:"手机号码",maxLength:"11"},{ref:"password",type:"password",className:"longInput password",placeholder:"密码",maxLength:null},{ref:"rePassword",type:"password",className:"longInput mobile",placeholder:"确认密码",maxLength:null},{ref:"captcha",type:"text",className:"shortInput captcha",placeholder:"验证码",maxLength:"5"}]};var y=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return s(e,t),i(e,[{key:"componentDidMount",value:function(){f.QueryString("protocol")&&this.refs.form.refs.btnProtocol.click()}},{key:"render",value:function(){return u["default"].createElement("body",null,u["default"].createElement("div",{className:"warning"},u["default"].createElement(g.Warning,null)),u["default"].createElement(m,{ref:"form"}))}}]),e}(u["default"].Component),b=function v(){f.PageData.setData(null,function(){p["default"].render(u["default"].createElement(y,null),document.body)}).render(v)};e.init=b}]);