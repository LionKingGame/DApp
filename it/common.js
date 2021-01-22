﻿function setLan(t) { if (!empty(t)) { var e = window.location.href.split("/"); window.location = window.location.origin + "/" + t + "/" + e[e.length - 1] } } function initLan() { var t = window.location.pathname.split("/"); empty(t[1]) || $(".lan select").val(t[1]) } function getQueryString(t) { var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), a = window.location.search.substr(1).match(e); return null != a ? decodeURI(a[2]) : null } function trim(t) { return t.replace(/(^\s*)|(\s*$)/g, "") } function ltrim(t) { return t.replace(/(^\s*)/g, "") } function rtrim(t) { return t.replace(/(\s*$)/g, "") } function getCookie(t) { return document.cookie.length > 0 && (c_start = document.cookie.indexOf(t + "="), -1 != c_start) ? (c_start = c_start + t.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : "" } function setCookie(t, e, a) { var n = new Date; n.setDate(n.getDate() + a), document.cookie = t + "=" + escape(e) + (null == a ? "" : ";expires=" + n.toGMTString()) } function initCountDown2(t, e) { var a = t, n = window.setInterval(function () { if (a > 0) { a -= 1; var t = Math.floor(a % 60), r = Math.floor(a / 60 % 60), l = Math.floor(a / 3600 % 24); Math.floor(a / 3600 / 24); zero(e, l, 0), zero(e, r, 1), zero(e, t, 2) } else window.clearInterval(n), refreshState() }, 1e3); return n } function zero(t, e, a) { var n = e < 10 ? "0" + e : e.toString(); for (var r in n) $($(t + " span")[parseInt(r) + 2 * a]).html(n[r]) } function validateForm(t) { var e = !0; return $("#" + t + " .required").each(function () { if ("checkbox" == $(this).attr("type")) { if (e && 0 == validateCheckbox($(this).attr("name"), $(this).attr("title") + " errore!")) return void (e = !1) } else if (e && $(this).val().length < 1) return alert($(this).attr("title") + " errore!"), $(this).focus(), void (e = !1) }), $("#" + t + " .number").each(function () { if (e && ($(this).val().length < 1 || isNaN($(this).val()))) return alert($(this).attr("title") + " errore!"), $(this).focus(), void (e = !1); var t = ($(this).val() + "").split("."); return 2 == t.length && t[1].length >= 8 ? (alert($(this).attr("title") + " errore, Non può superare il 8 decimale"), void (e = !1)) : void 0 }), $("#" + t + " .addresses").each(function () { if (e && empty(getInputArray($(this)))) return alert($(this).attr("title") + " errore!"), $(this).focus(), void (e = !1) }), $("#" + t + " .numberEmp").each(function () { if (e && $(this).val().length > 0 && isNaN($(this).val())) return alert($(this).attr("title") + " errore!"), $(this).focus(), void (e = !1) }), e } function unique(t) { if (Array.isArray(t)) { for (var e = [], a = 0; a < t.length; a++)e.includes(t[a]) || e.push(t[a]); return e } console.log("type error!") } function trimAddressArray(t) { var e = []; e.push(t[0]); for (var a = 1; a < t.length; a++)"0x0000000000000000000000000000000000000000" != t[a] && e.push(t[a]); return e } function getInputArray(t) { for (var e = [], a = $(t).val().split(/[,_;& \n"\]]/), n = 0; n < a.length; n++) { var r = trim(a[n]); 42 == r.length && web3.utils.isAddress(r) && e.push(r) } return e = unique(e) } function checkTime(t, e) { var a = { "M+": t.getMonth() + 1, "d+": t.getDate(), "H+": t.getHours(), "m+": t.getMinutes(), "s+": t.getSeconds(), "q+": Math.floor((t.getMonth() + 3) / 3), S: t.getMilliseconds() }; for (var n in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))), a) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? a[n] : ("00" + a[n]).substr(("" + a[n]).length))); return e } function shortAddress(t) { return empty(t) ? "" : t.substr(0, 12) + "......" + t.substr(28) } function Dictionary() { this.items = {} } function empty(t) { try { if (null == t || null == t) return !0; if ("number" == typeof t) return !!isNaN(t); if ("boolean" == typeof t || "function" == typeof t || t instanceof Date || t instanceof RegExp) return !1; if ("string" == typeof t) return 0 == t.trim().length || "null" == t; if ("object" == typeof t) { if (t instanceof Array) return 0 == t.length; if (t instanceof Object) return 0 == Object.getOwnPropertyNames(t).length } } catch (t) { return console.log(t), !1 } } function to0x(t) { return "0x" + new BigNumber(t).multipliedBy(_wei).toString(16) } function to0xPrice(t) { return "0x" + new BigNumber(t).toString(16) } function to10(t) { return new BigNumber(t).dividedBy(_wei).toString(10) } function showValue(t) { return empty(t) ? "--" : parseFloat(t.toFixed(6)) } function showValue9(t) { if (empty(t)) return "--"; var e = parseFloat((Number(t) / _wei).toFixed(6)) + ""; return e.length > 9 ? e.substr(0, 9) : e } $(function () { new ClipboardJS(".copy", { text: function () { return $(".account0").attr("title") } }).on("success", function (t) { alert("Collegamento di invito copiato con successo") }), new ClipboardJS(".copyAddress", { text: function (t) { return t.getAttribute("title") } }).on("success", function (t) { alert("Indirizzo copiato con successo") }) }), initLan(), Dictionary.prototype.has = function (t) { return t in this.items }, Dictionary.prototype.set = function (t, e) { this.items[t] = e }, Dictionary.prototype.remove = function (t) { return !!this.has(t) && (delete this.items[t], !0) }, Dictionary.prototype.get = function (t) { return this.has(t) ? this.items[t] : void 0 }, Dictionary.prototype.keys = function () { var t = []; for (var e in this.items) this.items.hasOwnProperty(e) && t.push(e); return t }, Dictionary.prototype.values = function () { var t = []; for (var e in this.items) this.items.hasOwnProperty(e) && t.push(this.items[e]); return t }, Dictionary.prototype.getItems = function () { return this.items }, Dictionary.prototype.clear = function () { this.items = {} }, Dictionary.prototype.size = function () { var t = 0; for (var e in this.items) this.items.hasOwnProperty(e) && ++t; return t }; let ctx = canvas.getContext("2d"), cw = canvas.width = window.innerWidth, ch = canvas.height = window.innerHeight, rid = null; ctx.fillStyle = "hsla(0, 5%, 5%, .025)"; class Particle { constructor() { this.pos = { x: Math.random() * cw, y: Math.random() * ch }, this.vel = { x: 0, y: 0 }, this.base = 1 * (1 + Math.random()), this.life = randomIntFromInterval(5, 20), this.color = Math.random() < .1 ? "hsla(57,98%,65%,0.7)" : "hsla(46,87%,46%,.1)", this.history = [] } update() { this.history.push({ x: this.pos.x, y: this.pos.y }), this.pos.x += this.vel.x, this.pos.y += this.vel.y } show() { this.life--, ctx.beginPath(); let t = this.history.length - 1; ctx.moveTo(this.history[t].x, this.history[t].y); for (let e = t; e > 0; e--)ctx.lineTo(this.history[e].x, this.history[e].y); ctx.strokeStyle = this.color, ctx.stroke(), this.history.length > this.life && this.history.splice(0, 1) } edges() { (this.pos.x > cw || this.pos.x < 0 || this.pos.y > ch || this.pos.y < 0) && (this.pos.y = Math.random() * ch, this.pos.x = Math.random() * cw, this.history.length = 0), this.life <= 0 && (this.pos.y = Math.random() * ch, this.pos.x = Math.random() * cw, this.life = randomIntFromInterval(5, 20), this.history.length = 0) } follow() { let t = ~~(this.pos.x / size), e = ~~(this.pos.y / size), a = flowField[t + e * cols]; this.vel.x = this.base * Math.cos(a), this.vel.y = this.base * Math.sin(a) } } let particles = [], size = 15, rows = 2 + ~~(ch / size), cols = 2 + ~~(cw / size), flowField = []; function getAngle(t, e) { return (Math.cos(.01 * t) + Math.cos(.01 * e)) * Math.PI / 2 } function getFlowField(t, e) { for (y = 0; y <= t; y++)for (x = 0; x < e; x++) { let t = x + y * e, a = getAngle(x * size, y * size); flowField[t] = a } } getFlowField(rows, cols); for (let t = 0; t < 1e3; t++)particles.push(new Particle); function frame() { rid = requestAnimationFrame(frame), ctx.fillRect(0, 0, cw, ch), particles.map(t => { t.follow(), t.update(), t.show(), t.edges() }) } function Init() { cw = canvas.width = window.innerWidth, ch = canvas.height = window.innerHeight, ctx.fillStyle = "hsla(0, 5%, 5%, .025)", rows = 2 + ~~(ch / size), cols = 2 + ~~(cw / size), flowField = new Array(rows * cols), getFlowField(rows, cols), rid && (window.cancelAnimationFrame(rid), rid = null), frame() } function randomIntFromInterval(t, e) { return Math.floor(Math.random() * (e - t + 1) + t) } window.setTimeout(function () { Init(), window.addEventListener("resize", Init, !1) }, 15); var lan = ["Errore di prezzo del gas, riprovare più tardi"], _wei = 1e18, _gas = 3e5 / _wei; let accounts = []; var priv = new Dictionary; "undefined" != typeof web3 ? web3 = new Web3(web3.currentProvider) : alert("please use imtoken ,trustwallet"); var InterValObj2, MyContract = new web3.eth.Contract(contractAbi, contractAddress), selfInfo = null, rest = 0; async function getAccount() { accounts = await ethereum.enable(), refreshState() } getAccount(); try { ethereum.on("accountsChanged", function (t) { accounts = t, refreshState() }) } catch (t) { } var dailyRate = [.006, .008, .01, .011, .012], maxMul = [3, 3.5, 4, 4.5, 5]; function getIncomeRef(t, e, a) { var n = getLevel(t); return t * maxMul[n] - e - a } function getDaily(t, e) { var a = t * dailyRate[getLevelReal(e)]; return a > .06 && (a = .06), a } function getLevel(t) { return t <= .1 ? 0 : t <= .5 ? 1 : t <= 1 ? 2 : t <= 2 ? 3 : 4 } function getLevelReal(t) { return t <= .3 ? 0 : t <= 1.75 ? 1 : t <= 4 ? 2 : t <= 9 ? 3 : 4 } function getRef() { return web3.utils.isAddress(getCookie("ref")) ? getCookie("ref") : firstAddr } var netid = 1; function refreshState() { if (1 == netid || "undefined" != typeof isdebug) { var t = document.location.protocol + "//" + document.location.host + document.location.pathname + "?r=" + accounts[0]; $(".account0").html(t), $(".account0").attr("title", t), MyContract.methods.selfInfo().call({ from: accounts[0] }).then(function (t) { selfInfo = t, $("#donateBatch #addresses,#settleBatch #addresses").val(accounts[0] + "\n"), $("._blance").html(showValue(t.r[1] / _wei)), $("._blanceERC20").html(showValue(t.r[2] / _wei)), $("._totalInvA").html(showValue(t.r[3] / _wei)), $("._totalInvB").html(showValue(t.r[4] / _wei)), $("._renum").html(t.r[5]), $("._incomeStatic").html(showValue(t.r[6] / _wei)), rest = t.r[7] / _wei, $("._rest").html(showValue(t.r[7] / _wei) + ""), $("._restLevel").html("V" + (0 == t.r[7] ? 0 : getLevelReal(t.r[7] / _wei) + 1)), $("._incomeRef").html(showValue(getIncomeRef(t.r[4] / _wei, t.r[6] / _wei, t.r[7] / _wei))), $("input._lktSaleNum").val(showValue(t.r[8] / _wei)), $("s._lktSaleNum").html(showValue(t.r[8] / _wei)), $("._lktSalePrice").val(showValue(t.r[9] / _wei)); var e = getRef(); (t.r[3] > 0 || t.r[4] > 0) && (e = t._refAddr), $("._refAddr").html(e), $("._refAddr").attr("title", e), $("._aLevel").html(t.r[10]), $("._aLevelRest").html(showValue(t.r[11] / _wei)), $("._curNum").html(showValue(t.r[12] / _wei)), $("._burn").html(showValue(t.r[15] / _wei)); var a = Date.parse(new Date) / 1e3; if (window.clearInterval(InterValObj2), t.r[0] > 0) { InterValObj2 = initCountDown2(interval - (a - t.r[0]) % interval, "#remainTimeB"); var n = Math.floor((a - t.r[0]) / interval), r = getDaily(t.r[4] / _wei, t.r[7] / _wei) * n; t.r[7] / _wei < r && (r = t.r[7] / _wei), $("._curDaily").html(showValue(r)), 0 == r && (n = 0), n > 0 ? ($("._days").removeClass("hide"), $("._days").html(n)) : ($("._days").addClass("hide"), $("._days").html(n)) } else $("._curDaily").html(showValue(0)), $("._days").addClass("hide"), $("._days").html(0) }), MyContract.methods.totalSupply().call({ from: accounts[0] }).then(function (t) { $("._totalSupply").html(t / _wei) }) } } function playA(t) { web3.eth.getGasPrice(function (e, a) { if (empty(e)) { if (validateForm("playA")) { var n = $("#playA #num").val(); if (n >= .01) { if (verifyDecimal(n)) { $(t).attr("disabled", !0); var r = getRef(); (parseFloat(selfInfo.r[3]) > 0 || parseFloat(selfInfo.r[4]) > 0) && (r = "0x0000000000000000000000000000000000000000"), callback(t, MyContract.methods.playA(r).send({ from: accounts[0], value: to0x($("#playA #num").val()), gasPrice: to0xPrice(a), gas: to0x(22e4 / _wei) })) } } else alert("Non meno di 0.01eth") } } else alert(lan[0]) }) } function playB(t) { web3.eth.getGasPrice(function (e, a) { if (empty(e)) { if (validateForm("playB")) { var n = $("#playB #num").val(); if (n >= .01) { if (verifyDecimal(n)) { if (10 * parseFloat(selfInfo.r[2]) < n * parseFloat(selfInfo.r[16])) return void alert("LKT I biglietti non bastano"); if (parseFloat($("._curDaily").text()) > 0 && !confirm("Hai dei guadagni non saldati che saranno differiti dopo gli investimenti.Sei sicuro di voler continuare?")) return; $(t).attr("disabled", !0), MyContract.methods.getSteps(getRef()).call({ from: accounts[0] }).then(function (e) { $(t).attr("disabled", !1), addresses = trimAddressArray(e), empty(addresses) ? alert("L'indirizzo di invito non può essere vuoto") : ($(t).attr("disabled", !0), (parseFloat(selfInfo.r[3]) > 0 || parseFloat(selfInfo.r[4]) > 0) && (addresses[0] = "0x0000000000000000000000000000000000000000"), callback(t, MyContract.methods.playBBatch(addresses).send({ from: accounts[0], value: to0x($("#playB #num").val()), gasPrice: to0xPrice(a), gas: to0x((26e4 + 2e4 * addresses.length) / _wei) }))) }).catch(function (e) { console.log("Errore!" + e), $(t).attr("disabled", !1) }) } } else alert("L'importo dell'investimento non è inferiore a 0.01eth") } } else alert(lan[0]) }) } function donate(t) { web3.eth.getGasPrice(function (e, a) { empty(e) ? parseFloat(selfInfo.r[1]) > parseFloat(selfInfo.r[13]) ? alert("Il saldo del contratto è insufficiente") : !empty(selfInfo) && parseFloat(selfInfo.r[1]) > 0 ? ($(t).attr("disabled", !0), callback(t, MyContract.methods.donate().send({ from: accounts[0], gasPrice: to0xPrice(a), gas: to0x(9e4 / _wei) }))) : alert("Il tuo equilibrio è 0eth") : alert(lan[0]) }) } function donateBatch(t) { web3.eth.getGasPrice(function (e, a) { if (empty(e)) if (parseFloat(selfInfo.r[1]) > parseFloat(selfInfo.r[13])) alert("Il saldo del contratto è insufficiente"); else { var n = getInputArray("#donateBatch #addresses"); empty(n) || n.length < 1 ? alert("L'indirizzo del lotto non può essere vuoto") : 1 != n.length || n[0] != accounts[0] ? ($(t).attr("disabled", !0), MyContract.methods.verifyAddress(1, n).call({ from: accounts[0] }).then(function (e) { $(t).attr("disabled", !1), empty(n = e) || n.length < 1 ? alert("Tutti gli indirizzi che hai inserito non hanno un saldo") : n.length > 30 ? alert("Indirizzo del lotto non può superare 30") : confirm("Il numero di indirizzi validi con saldo è:" + n.length) && ($(t).attr("disabled", !0), callback(t, MyContract.methods.donateBatch(n).send({ from: accounts[0], gasPrice: to0xPrice(a), gas: to0x((7e4 + 3e4 * n.length) / _wei) }))) }).catch(function (e) { console.log("Errore di controllo dell'indirizzo!" + e), $(t).attr("disabled", !1) })) : donate(t) } else alert(lan[0]) }) } function settle(t) { web3.eth.getGasPrice(function (e, a) { if (empty(e)) if (parseFloat(selfInfo.r[1]) + .9 * parseFloat($("._curDaily").html()) * _wei > parseFloat(selfInfo.r[13])) alert("Il saldo del contratto è insufficiente"); else if (0 != parseFloat(selfInfo.r[0])) if (rest <= 0) alert("Il vostro profitto ha raggiunto il massimo"); else { var n = Date.parse(new Date) / 1e3; Math.floor((n - parseFloat(selfInfo.r[0])) / interval) < 1 ? alert("Non hai ancora raggiunto l'ora del patteggiamento.") : ($(t).attr("disabled", !0), callback(t, MyContract.methods.settle().send({ from: accounts[0], gasPrice: to0xPrice(a), gas: to0x(22e4 / _wei) }))) } else alert("Non hai ancora acceso le interferenze."); else alert(lan[0]) }) } function settleBatch(t) { web3.eth.getGasPrice(function (e, a) { if (empty(e)) if (parseFloat(selfInfo.r[1]) + .9 * parseFloat($("._curDaily").html()) * _wei > parseFloat(selfInfo.r[13])) alert("Il saldo del contratto è insufficiente"); else { var n = getInputArray("#settleBatch #addresses"); empty(n) || n.length < 1 ? alert("L'indirizzo del lotto non può essere vuoto") : 1 != n.length || n[0] != accounts[0] ? ($(t).attr("disabled", !0), MyContract.methods.verifyAddress(2, n).call({ from: accounts[0] }).then(function (e) { $(t).attr("disabled", !1), empty(n = e) || n.length < 1 ? alert("Tutti gli indirizzi che hai inserito non devono essere regolati") : n.length > 30 ? alert("Indirizzo del lotto non può superare 30") : confirm("Il numero di indirizzi di regolamento effettivi è:" + n.length) && ($(t).attr("disabled", !0), callback(t, MyContract.methods.settleBatch(n).send({ from: accounts[0], gasPrice: to0xPrice(a), gas: to0x((17e4 + 1e5 * n.length) / _wei) }))) }).catch(function (e) { console.log("Errore di controllo dell'indirizzo!" + e), $(t).attr("disabled", !1) })) : settle(t) } else alert(lan[0]) }) } function buyLKT(t) { web3.eth.getGasPrice(function (e, a) { if (empty(e)) { if (validateForm("buyLKT")) { var n = $("#buyLKT #num").val(), r = $("#buyLKT #price").val(); if (verifyDecimal(n) && verifyDecimal(r)) { var l = (n * r).toFixed(8); if (r < 1e-8) return void alert("Il prezzo di acquisto non può essere inferiore a 0.0000000001eth"); if (l < .01) return void alert("L'importo dell'acquisto non può essere inferiore a 0.01eth"); var i = getInputArray("#buyLKT #addresses"); if (empty(i) || i.length < 1) return void alert("L'indirizzo del lotto non può essere vuoto"); if (i.length > 20) return void alert("Indirizzo del lotto non può superare 20,Si prega di ridurre la quantità di acquisto"); if (!confirm("Il numero di indirizzi validi è:" + i.length)) return; $(t).attr("disabled", !0), l = (l -= parseFloat(selfInfo.r[1]) / _wei) < 0 ? 0 : l, callback(t, MyContract.methods.buyLKT(to0x(n), to0x(r), i).send({ from: accounts[0], value: to0x(l), gasPrice: to0xPrice(a), gas: to0x((15e4 + 2e4 * i.length) / _wei) })) } } } else alert(lan[0]) }) } function saleLKT(t) { web3.eth.getGasPrice(function (e, a) { if (empty(e)) { if (validateForm("saleLKT")) { var n = $("#saleLKT #num").val(), r = $("#saleLKT #price").val(); if (0 == n) confirm("Sei sicuro di annullare la registrazione") && ($(t).attr("disabled", !0), callback(t, MyContract.methods.saleLKT(to0x(0), to0x(0)).send({ from: accounts[0], gasPrice: to0xPrice(a), gas: to0x(5e4 / _wei) }))); else if (verifyDecimal(n) && verifyDecimal(r)) { if (n * r < .01) return void alert("L'importo di vendita non può essere inferiore a 0.01eth"); if (n * _wei > Number(selfInfo.r[2]) + Number(selfInfo.r[8])) return void alert("LKT Scusa, il tuo credito sta finendo."); if (n * _wei == Number(selfInfo.r[8]) && r * _wei == Number(selfInfo.r[9])) return alert("Nessuna modifica delle informazioni sull'ordine di vendita"), void $(".modal").modal("hide"); $(t).attr("disabled", !0), callback(t, MyContract.methods.saleLKT(to0x(n), to0x(r)).send({ from: accounts[0], gasPrice: to0xPrice(a), gas: to0x(12e4 / _wei) })) } } } else alert(lan[0]) }) } function verifyDecimal(t) { var e = (t + "").split("."); return !(e.length > 1 && e[1].length > 9) || (alert("Il numero non può superare il 9 decimale"), !1) } function callback(t, e) { e.on("transactionHash", function (t) { }).on("confirmation", function (e, a) { 1 == e && (console.log(2), $(t).attr("disabled", !1)) }).on("receipt", function (e) { console.log(3), refreshState(), $(t).attr("disabled", !1), $(".modal").modal("hide") }).on("error", function (e) { console.log(e), $(t).attr("disabled", !1), $(".modal").modal("hide"), alert("La richiesta di esecuzione del contratto è stata inviata. Vi preghiamo di aggiornare il risultato più tardi") }) } web3.eth.net.getId().then(function (t) { 1 != (netid = t) && "undefined" == typeof isdebug && alert("Si prega di selezionare eth main network") }), web3.utils.isAddress(getQueryString("r")) && setCookie("ref", getQueryString("r"), 3650);
