(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('moment'), require('@angular/common/http'), require('moment-es6'), require('rxjs/operators'), require('@angular/platform-browser'), require('rxjs/observable/of'), require('rxjs/observable/fromPromise'), require('rxjs/observable/timer'), require('rxjs/ReplaySubject'), require('rxjs/observable/throw'), require('@ngx-translate/core'), require('rxjs/Observable'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', 'moment', '@angular/common/http', 'moment-es6', 'rxjs/operators', '@angular/platform-browser', 'rxjs/observable/of', 'rxjs/observable/fromPromise', 'rxjs/observable/timer', 'rxjs/ReplaySubject', 'rxjs/observable/throw', '@ngx-translate/core', 'rxjs/Observable', '@angular/common'], factory) :
	(factory((global.aetna = global.aetna || {}, global.aetna['vhealth-common'] = {}),global.ng.core,global.ng.forms,global.moment,global.ng.common.http,global.moment$1,global.Rx.Observable.prototype,global.ng.platformBrowser,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx,global.Rx.Observable,global.core$1,global.Rx,global.ng.common));
}(this, (function (exports,core,forms,moment,http,moment$1,operators,platformBrowser,of,fromPromise,timer,ReplaySubject,_throw,core$1,Observable,common) { 'use strict';

moment$1 = moment$1 && moment$1.hasOwnProperty('default') ? moment$1['default'] : moment$1;

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var AddThumbnailComponent =               (function () {
    function AddThumbnailComponent() {
    }
    return AddThumbnailComponent;
}());
AddThumbnailComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'v-add-thumbnail',
                template: "\n    <button type=\"button\" [attr.aria-label]=\"label\">\n      <v-icon icon=\"add\"></v-icon>\n      <span translate=\"component.thumbnail.add\"></span>\n    </button>\n  ",
                styles: ["button{\n  background:none;\n  border:2px dashed #dcdcdc;\n  border-radius:.6rem;\n  color:#646464;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:column;\n          flex-direction:column;\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  -webkit-box-pack:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n  width:100%;\n  height:100%;\n  cursor:pointer;\n  outline:0; }\n  button v-icon{\n    font-size:1.4rem;\n    line-height:1;\n    display:block;\n    margin:0 auto .4rem; }\n  button span{\n    font:600 1.2rem/2rem \"Open Sans\";\n    text-align:center; }\n  button:hover, button:focus{\n    color:#7d3f98; }\n"]
            },] },
];
AddThumbnailComponent.ctorParameters = function () { return []; };
AddThumbnailComponent.propDecorators = {
    "label": [{ type: core.Input },],
};
var AppointmentSelectComponent =               (function () {
    function AppointmentSelectComponent() {
    }
    Object.defineProperty(AppointmentSelectComponent.prototype, "isSelected", {
        get: function () {
            return this.selected === this.appointment;
        },
        enumerable: true,
        configurable: true
    });
    AppointmentSelectComponent.prototype.writeValue = function (value) {
        if (this.onChange) {
            this.selected = value;
            this.onChange(value);
        }
    };
    AppointmentSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    AppointmentSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return AppointmentSelectComponent;
}());
AppointmentSelectComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'v-appointment-select',
                template: "\n    <button class=\"v-appointment-select\"\n            type=\"button\"\n            (click)=\"writeValue(appointment)\"\n            [ngClass]=\"{'v-appointment-select--selected': isSelected}\">\n      <span class=\"v-appointment-select__subject\" [innerHtml]=\"appointment.subject\"></span>\n      <span class=\"v-appointment-select__date\" [innerHtml]=\"appointment.startTime | moment\"></span>\n    </button>\n  ",
                providers: [
                    { provide: forms.NG_VALUE_ACCESSOR, useExisting: core.forwardRef(function () { return AppointmentSelectComponent; }), multi: true }
                ],
                styles: [".v-appointment-select{\n  background:#fff;\n  border-radius:6px;\n  border:1px solid #fff;\n  cursor:pointer;\n  display:block;\n  padding:1rem 2rem 1.2rem;\n  outline:none;\n  text-align:left;\n  -webkit-transition:border-color 280ms;\n  transition:border-color 280ms;\n  width:100%; }\n  @supports (-moz-appearance: none){\n    .v-appointment-select:hover, .v-appointment-select:focus{\n      border-color:#b18cc1; } }\n  @media all and (-ms-high-contrast: active), (-ms-high-contrast: none){\n    .v-appointment-select:hover, .v-appointment-select:focus{\n      border-color:#b18cc1; } }\n  @media (hover: hover){\n    .v-appointment-select:hover, .v-appointment-select:focus{\n      border-color:#b18cc1; } }\n  .v-appointment-select--selected{\n    border-color:#b18cc1; }\n.v-appointment-select__subject{\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  color:#7d3f98;\n  display:block;\n  font:1.6rem/2.4rem \"Open Sans\";\n  font-weight:600;\n  line-height:2.4rem; }\n.v-appointment-select__date{\n  color:#646464;\n  display:block;\n  font:1.6rem/2.4rem \"Open Sans\";\n  line-height:2rem; }\n"]
            },] },
];
AppointmentSelectComponent.ctorParameters = function () { return []; };
AppointmentSelectComponent.propDecorators = {
    "appointment": [{ type: core.Input },],
};
var StoreID = {
    AUTH: 'v-auth',
    CONFIG: 'v-config',
};
var IndexedDBStore =               (function () {
    function IndexedDBStore(storeId) {
        this.storeId = storeId;
        this.database = new Promise(function (resolve, reject) {
            if (IndexedDBStore.db) {
                return resolve(IndexedDBStore.db);
            }
            var request = indexedDB.open(IndexedDBStore.DATABASE_ID, IndexedDBStore.DATABASE_VERSION);
            request.onupgradeneeded = function () {
                var database = request.result;
                for (var storeId_1 in StoreID) {
                    if (!Number(storeId_1)) {
                        var id = StoreID[storeId_1];
                        if (database.objectStoreNames.contains(id)) {
                            database.deleteObjectStore(StoreID[storeId_1]);
                        }
                        database.createObjectStore(StoreID[storeId_1], { keyPath: 'id' });
                    }
                }
            };
            request.onsuccess = function () {
                IndexedDBStore.db = request.result;
                resolve(IndexedDBStore.db);
            };
            request.onerror = function (error) { return reject(error); };
        });
    }
    IndexedDBStore.isSupported = function () {
        return 'indexedDB' in window;
    };
    IndexedDBStore.prototype.getIndexKey = function (key) {
        return btoa(key + this.userId);
    };
    IndexedDBStore.prototype.getStore = function (permission) {
        var _this = this;
        if (!this.userId) {
            return Promise.reject('No user id');
        }
        return this.database.then(function (database) {
            var transaction = database.transaction(_this.storeId, permission);
            return transaction.objectStore(_this.storeId);
        });
    };
    IndexedDBStore.prototype.clear = function (key) {
        var _this = this;
        return this.getStore('readwrite').then(function (store) {
            return new Promise(function (resolve, reject) {
                var request;
                if (key) {
                    request = store.delete(_this.getIndexKey(key));
                }
                else {
                    request = store.clear();
                }
                request.onsuccess = function () { return resolve(); };
                request.onerror = function (error) { return reject(error); };
            });
        });
    };
    IndexedDBStore.prototype.get = function (key) {
        var _this = this;
        return this.getStore('readonly').then(function (store) {
            return new Promise(function (resolve) {
                var request = store.get(_this.getIndexKey(key));
                request.onsuccess = function () { return resolve(request.result ? request.result.value : null); };
                request.onerror = function () { return resolve(null); };
            });
        });
    };
    IndexedDBStore.prototype.put = function (key, data) {
        var _this = this;
        return this.getStore('readwrite').then(function (store) {
            return new Promise(function (resolve, reject) {
                var id = _this.getIndexKey(key);
                var request = store.put({ id: id, value: data, entry: new Date(), metadata: { key: key, user: _this.userId } });
                request.onsuccess = function () { return resolve(); };
                request.onerror = function (error) { return reject(error); };
            });
        });
    };
    Object.defineProperty(IndexedDBStore.prototype, "user", {
        set: function (userId) {
            this.userId = userId;
        },
        enumerable: true,
        configurable: true
    });
    return IndexedDBStore;
}());
IndexedDBStore.DATABASE_VERSION = 3;
IndexedDBStore.DATABASE_ID = 'aetna-vhealth';
IndexedDBStore.db = null;
var LocalStorageStore =               (function () {
    function LocalStorageStore(storeId) {
        this.storeId = storeId;
    }
    LocalStorageStore.prototype.buildKey = function (key) {
        return btoa(this.storeId + "-" + key + "-" + this.userId);
    };
    LocalStorageStore.prototype.clear = function (key) {
        if (!this.userId) {
            return Promise.reject('No user ID provided');
        }
        if (key) {
            localStorage.removeItem(this.buildKey(key));
        }
        else {
            localStorage.clear();
        }
        return Promise.resolve();
    };
    LocalStorageStore.prototype.get = function (key) {
        if (!this.userId) {
            return Promise.reject('No user ID provided');
        }
        var storage = localStorage.getItem(this.buildKey(key));
        return Promise.resolve(storage ? JSON.parse(storage).data : null);
    };
    LocalStorageStore.prototype.put = function (key, data) {
        if (!this.userId) {
            return Promise.reject('No user ID provided');
        }
        var storageItem = {
            date: Date.now(),
            data: data
        };
        localStorage.setItem(this.buildKey(key), JSON.stringify(storageItem));
        return Promise.resolve();
    };
    Object.defineProperty(LocalStorageStore.prototype, "user", {
        set: function (userId) {
            this.userId = userId;
        },
        enumerable: true,
        configurable: true
    });
    return LocalStorageStore;
}());
var StoreFactory =               (function () {
    function StoreFactory() {
    }
    StoreFactory.load = function (name) {
        var store = this.STORES.get(name);
        if (!store) {
            if (IndexedDBStore.isSupported()) {
                store = new IndexedDBStore(name);
            }
            else {
                store = new LocalStorageStore(name);
            }
            this.STORES.set(name, store);
        }
        return store;
    };
    StoreFactory.clearCache = function () {
        this.STORES.clear();
    };
    return StoreFactory;
}());
StoreFactory.STORES = new Map();
var Session =               (function () {
    function Session() {
    }
    return Session;
}());
Session.DEPENDENTS = [];
Session.ACTIVE_DEPENDENT = null;
Session.INDIVIDUAL_ID = null;
Session.HEALTHKIT_PERM_ALLOWED = false;
var ConfigService =               (function () {
    function ConfigService(config) {
        this.update(config);
        this.store = StoreFactory.load(StoreID.CONFIG);
    }
    Object.defineProperty(ConfigService.prototype, "get", {
        get: function () {
            return Object.assign({}, this.config);
        },
        enumerable: true,
        configurable: true
    });
    ConfigService.prototype.update = function (config) {
        this.config = Object.assign({}, ConfigService.DEFAULTS, this.config, config);
        moment.updateLocale(this.config.locale, {
            longDateFormat: {
                LT: "h:mm a",
                LTS: "h:mm:ss a",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM LT",
                LLLL: "dddd D MMMM [at] LT"
            }
        });
    };
    ConfigService.prototype.clearData = function (key) {
        return this.store.clear(key);
    };
    ConfigService.prototype.getData = function (key) {
        return this.store.get(key);
    };
    ConfigService.prototype.setData = function (key, data) {
        return this.store.put(key, data);
    };
    ConfigService.prototype.updateUser = function (userId) {
        this.store.user = userId;
    };
    return ConfigService;
}());
ConfigService.DEFAULTS = {
    apiUrl: 'api:',
    authUrl: 'auth:',
    inviteUrl: 'invite:',
    consultationUrl: 'consult:',
    mockUrl: 'mock:',
    publicUrl: 'public:',
    permissionUrl: 'permission:',
    outboundSsoUrl: 'outbound:',
    translationPrefix: '/assets/i18n',
    translationSuffix: 'json',
};
var CONFIG_TOKEN = new core.InjectionToken('CommonConfig');
var DateUtil =               (function () {
    function DateUtil(config) {
        this.config = config;
    }
    DateUtil.prototype.format = function (date, format) {
        if (format === void 0) { format = 'll'; }
        return moment.utc(date).isValid() ? moment.utc(date).locale(this.config.get.locale).local().format(format) : null;
    };
    DateUtil.prototype.formatAPIDate = function (date) {
        return moment.utc(date).format(DateUtil.FORMAT);
    };
    DateUtil.prototype.formatShortAPIDate = function (date) {
        return moment.utc(date).format(DateUtil.SHORT_FORMAT);
    };
    DateUtil.prototype.convertAPIDateToString = function (vDate) {
        return this.convertAPIDate(vDate).toISOString();
    };
    DateUtil.prototype.convertAPIDate = function (vDate) {
        return moment.utc(vDate, DateUtil.FORMAT).local().toDate();
    };
    DateUtil.prototype.convertShortAPIDate = function (vDate) {
        return moment.utc(vDate, DateUtil.SHORT_FORMAT).local().toDate();
    };
    DateUtil.prototype.roundTime = function (date) {
        var remainder = 30 - (date.getMinutes() % 30);
        return new Date(moment.utc(date).add(remainder, 'minutes').toString());
    };
    return DateUtil;
}());
DateUtil.FORMAT = 'YYYY-MM-DD HH:mm Z';
DateUtil.SHORT_FORMAT = 'YYYY-MM-DD HH:mm';
DateUtil.decorators = [
    { type: core.Injectable },
];
DateUtil.ctorParameters = function () { return [
    { type: ConfigService, },
]; };
var StatsUtil =               (function () {
    function StatsUtil() {
    }
    StatsUtil.prototype.getDeviceInfo = function (osFromApp) {
        var browser, mobile, os;
        if (!osFromApp) {
            if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1) {
                browser = ('Opera');
            }
            else if (navigator.userAgent.indexOf("Chrome") !== -1) {
                browser = ('Chrome');
            }
            else if (navigator.userAgent.indexOf("Safari") !== -1) {
                browser = ('Safari');
            }
            else if (navigator.userAgent.indexOf("Firefox") !== -1) {
                browser = ('Firefox');
            }
            else if ((navigator.userAgent.indexOf("MSIE") !== -1) || (!!document['documentMode'] === true)) {
                browser = ('IE');
            }
            else {
                browser = ('unknown');
            }
            os = 'unknown';
            if (navigator['oscpu']) {
                os = navigator['oscpu'];
            }
            else if (navigator['platform']) {
                os = navigator['platform'];
            }
            mobile = false;
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                mobile = true;
            }
        }
        else {
            browser = 'Mobile App';
            os = osFromApp;
            mobile = true;
        }
        return {
            'browser': browser,
            'os': os,
            'isMobile': mobile
        };
    };
    return StatsUtil;
}());
StatsUtil.decorators = [
    { type: core.Injectable },
];
StatsUtil.ctorParameters = function () { return []; };
var BookingAction = {
    BOOK: 'BOOK',
    CANCEL: 'CANCEL',
};
var BookingChannel = {
    VIDEO: 'Video',
    PHONE: 'Phone',
};
var BookingType = {
    INITIAL: 'Initial',
    NEW: 'Consultation',
    FOLLOW_UP: 'Follow-Up',
};
var AppointmentStatus = {
    SCHEDULED: 'Appointment_Scheduled',
    CANCEL_MEMBER: 'Appointment_Canceled_Member_Not_Verified',
    CANCEL_DOCTOR: 'Appointment_Canceled',
    MISSED: 'Appointment_Missed',
    DOCTOR_WAITING: 'Appointment_Doctor_Ready_for_Patient',
    PATIENT_WAITING: 'Appointment_Patient_in_Waiting_Room',
    IN_PROGRESS: 'Appointment_In_Progress',
    CALL_ENDED: 'Appointment_Call_ended',
    COMPLETE: 'Appointment_Completed',
};
var AppointmentService =               (function () {
    function AppointmentService(http$$1, config, dateUtil, statsUtil) {
        this.http = http$$1;
        this.config = config;
        this.dateUtil = dateUtil;
        this.statsUtil = statsUtil;
    }
    AppointmentService.prototype.convertAppointment = function (appointment) {
        appointment.appointmentStatus = appointment.appointmentstatus || appointment.appointmentStatus;
        if (appointment.startTime)
            appointment.startTime = this.dateUtil.convertAPIDateToString(appointment.startTime);
        if (appointment.appointmentType) {
            switch (appointment.appointmentType.substr(0, appointment.appointmentType.indexOf(' '))) {
                case 'Follow-Up':
                    appointment.appointmentType = BookingType.FOLLOW_UP;
                    break;
                case 'Consultation':
                    appointment.appointmentType = BookingType.NEW;
                    break;
                case 'Initial':
                    appointment.appointmentType = BookingType.INITIAL;
                    break;
                default:
                    break;
            }
        }
        return appointment;
    };
    AppointmentService.prototype.getAppointmentLinks = function (appointment, dependent, osFromApp) {
        if (osFromApp === void 0) { osFromApp = null; }
        var info = this.statsUtil.getDeviceInfo(osFromApp);
        var params = {
            memberId: appointment.appointmentId,
            apptDetails: appointment.subject,
            memberName: dependent.firstName,
            os: info['os'],
            isMobile: info['isMobile'],
            browser: info['browser']
        };
        var httpOptions = {
            headers: new http.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("" + this.config.get.consultationUrl, JSON.stringify(params), httpOptions);
    };
    AppointmentService.prototype.getAppointments = function (params) {
        var _this = this;
        var from = params.from ? this.dateUtil.formatAPIDate(params.from) : null;
        var to = params.to ? this.dateUtil.formatAPIDate(params.to) : null;
        var cancelledStatuses = [AppointmentStatus.CANCEL_MEMBER, AppointmentStatus.CANCEL_DOCTOR];
        var httpParams = new http.HttpParams();
        if (from) {
            httpParams.set('from', from);
        }
        if (to) {
            httpParams.set('to', to);
        }
        return this.http.get(this.config.get.apiUrl + "/vhealth_members/" + params.individualId + "/appointments", { params: httpParams })
            .pipe(operators.map(function (res) { return res.appointments
            .map(function (appointment) { return _this.convertAppointment(appointment); })
            .filter(function (appointment) { return cancelledStatuses.indexOf(appointment.appointmentStatus) === -1; }); }));
    };
    AppointmentService.prototype.getAppointment = function (appointmentId) {
        var _this = this;
        return this.http.get(this.config.get.apiUrl + "/vhealth_appointments/" + appointmentId)
            .pipe(operators.map(function (appointment) { return _this.convertAppointment(appointment); }));
    };
    AppointmentService.prototype.bookAppointment = function (params) {
        var _this = this;
        var secondaryPhoneConcat;
        if (params.contactNumber && params.contactNumber.code && params.contactNumber.number && !params.isPrimary) {
            secondaryPhoneConcat = '*** Secondary Phone Number ' + params.contactNumber.code + ' ' + params.contactNumber.number + ' ***';
        }
        else {
            secondaryPhoneConcat = '';
        }
        var request = {
            actionType: BookingAction.BOOK,
            appointmentType: params.bookingType !== undefined ? params.bookingType.toString() : BookingType.NEW,
            channel: params.bookingChannel.toString(),
            reason: params.reason,
            individualId: String(params.individualId),
            startDate: this.dateUtil.formatAPIDate(params.date),
            subject: params.subject,
            doctorNotes: secondaryPhoneConcat
        };
        return this.http.post(this.config.get.apiUrl + "/vhealth_members/" + params.individualId + "/appointments", JSON.stringify(request))
            .pipe(operators.map(function (appointment) { return _this.convertAppointment(appointment.appointment); }));
    };
    AppointmentService.prototype.cancelAppointment = function (appointmentId) {
        var id = String(appointmentId);
        return this.http.delete(this.config.get.apiUrl + "/vhealth_appointments/" + id);
    };
    AppointmentService.prototype.rateAppointment = function (appointmentId, rating, feedback) {
        var request = {
            rating: String(Math.min(Math.max(Math.round(rating), 1), 5)),
            feedback: feedback
        };
        return this.http.put(this.config.get.apiUrl + "/vhealth_appointments/" + appointmentId + "/appointmentrating", JSON.stringify(request));
    };
    AppointmentService.prototype.getAppointmentAvailability = function (params, appointments) {
        var _this = this;
        if (appointments === void 0) { appointments = []; }
        var dateFromTransformed = this.dateUtil.formatAPIDate(this.dateUtil.roundTime(new Date(params.dateFrom)));
        var dateToTransformed = this.dateUtil.formatAPIDate(this.dateUtil.roundTime(new Date(params.dateTo)));
        var httpParams = new http.HttpParams()
            .append('from', dateFromTransformed)
            .append('to', dateToTransformed)
            .append('appointmentType', appointments.length > 0 ? BookingType.NEW : BookingType.INITIAL);
        return this.http.get(this.config.get.apiUrl + "/vhealth_members/" + params.individualId + "/appointmentslots", { params: httpParams })
            .pipe(operators.map(function (res) {
            var filteredAppointments = new Map();
            var appointmentsUTC = appointments.filter(function (result) {
                result.startTimeM = moment.utc(new Date(result.startTime)).subtract(1, 'minute');
                if (result.appointmentType === BookingType.INITIAL) {
                    result.endTimeM = moment.utc(new Date(result.startTime)).add(1, 'hour');
                }
                else {
                    result.endTimeM = moment.utc(new Date(result.startTime)).add(30, 'minutes');
                }
                return res;
            });
            var timeSlotsUTC = res.availability.filter(function (ts) {
                ts.startTimeD = _this.dateUtil.convertAPIDate(ts.startTime);
                ts.startTimeM = moment$1(ts.startTimeD);
                ts.endTimeD = _this.dateUtil.convertAPIDate(ts.endTime);
                return ts;
            });
            return timeSlotsUTC
                .filter(function (timeSlot) { return !appointmentsUTC.find(function (appointment) { return timeSlot.startTimeM.isBetween(appointment.startTimeM, appointment.endTimeM); }); })
                .map(function (appointment) {
                return {
                    startTime: appointment.startTimeD,
                    endTime: appointment.endTimeD,
                    type: appointment.appointmentType,
                    doctors: [appointment.doctor.id]
                };
            })
                .filter(function (timeSlot) {
                var id = timeSlot.type + timeSlot.startTime.toString();
                var prev = filteredAppointments.get(id);
                if (prev) {
                    prev.doctors.push(timeSlot.doctors[0]);
                    return false;
                }
                filteredAppointments.set(id, timeSlot);
                return true;
            });
        }));
    };
    return AppointmentService;
}());
AppointmentService.decorators = [
    { type: core.Injectable },
];
AppointmentService.ctorParameters = function () { return [
    { type: http.HttpClient, },
    { type: ConfigService, },
    { type: DateUtil, },
    { type: StatsUtil, },
]; };
var AppointmentComponent =               (function () {
    function AppointmentComponent() {
    }
    Object.defineProperty(AppointmentComponent.prototype, "statusText", {
        get: function () {
            return "component.appointment." + this.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppointmentComponent.prototype, "isUpcoming", {
        get: function () {
            return this.status === 'upcoming';
        },
        enumerable: true,
        configurable: true
    });
    AppointmentComponent.prototype.ngOnChanges = function () {
        if (!this.appointment)
            return;
        switch (this.appointment.appointmentStatus) {
            case AppointmentStatus.SCHEDULED:
                if (moment$1(this.appointment.startTime).isBetween(moment$1().subtract(3, 'hours'), moment$1().add(5, 'minutes'))) {
                    this.status = 'ready';
                }
                else {
                    this.status = this.appointment.appointmentType === BookingType.FOLLOW_UP ? 'follow-up' : 'upcoming';
                }
                break;
            case AppointmentStatus.COMPLETE:
                this.status = 'complete';
                break;
            case AppointmentStatus.CANCEL_DOCTOR:
            case AppointmentStatus.CANCEL_MEMBER:
                this.status = 'cancelled';
                break;
            case AppointmentStatus.MISSED:
                this.status = 'missed';
                break;
            default:
                this.status = 'pending';
                break;
        }
    };
    return AppointmentComponent;
}());
AppointmentComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'v-appointment',
                template: "\n    <section [class]=\"'appointment appointment--' + status\">\n      <span [class]=\"'appointment__status appointment__status--' + status\" [translate]=\"statusText\" *ngIf=\"!isUpcoming\"></span>\n      <div class=\"appointment__subject\" [innerHtml]=\"appointment.subject\"></div>\n      <v-icon class=\"appointment__channel\" *ngIf=\"isUpcoming\" [tooltip]=\"appointment.channel\" [icon]=\"appointment.channel\"></v-icon>\n      <div class=\"appointment__date\">\n        <v-icon [icon]=\"isUpcoming ? 'time' : null\"></v-icon>\n        <span [innerHtml]=\"appointment.startTime | moment: 'llll'\"></span>\n      </div>\n      <div class=\"appointment__user\" *ngIf=\"dependent\">\n        <v-icon [icon]=\"isUpcoming ? 'user' : null\"></v-icon>\n        <span [innerHtml]=\"dependent.firstName + ' ' + dependent.lastName\"></span>\n      </div>\n      <ng-content></ng-content>\n    </section>\n  ",
                styles: [".appointment{\n  background:#fff;\n  border-top:.7rem solid;\n  -webkit-box-shadow:0 2px 3px 0 rgba(65, 65, 65, 0.2);\n          box-shadow:0 2px 3px 0 rgba(65, 65, 65, 0.2);\n  height:100%;\n  padding:0 2rem 1.2rem;\n  border-radius:5px;\n  text-align:left; }\n  @supports (-moz-appearance: none){\n    .appointment:hover, .appointment:focus{\n      cursor:pointer; } }\n  @media all and (-ms-high-contrast: active), (-ms-high-contrast: none){\n    .appointment:hover, .appointment:focus{\n      cursor:pointer; } }\n  @media (hover: hover){\n    .appointment:hover, .appointment:focus{\n      cursor:pointer; } }\n  .appointment--upcoming{\n    border-color:#00f0cc;\n    padding:2rem; }\n  .appointment--follow-up{\n    border-color:#d20962; }\n  .appointment--pending{\n    border-color:#d20962; }\n  .appointment--complete{\n    border-color:#dcdcdc; }\n  .appointment--missed{\n    border-color:#646464; }\n  .appointment--ready{\n    border-color:#7d3f98; }\n  @supports (-moz-appearance: none){\n    .appointment:hover, .appointment:focus{\n      -webkit-box-shadow:0 1px 8px 1px rgba(0, 0, 0, 0.3);\n              box-shadow:0 1px 8px 1px rgba(0, 0, 0, 0.3); } }\n  @media all and (-ms-high-contrast: active), (-ms-high-contrast: none){\n    .appointment:hover, .appointment:focus{\n      -webkit-box-shadow:0 1px 8px 1px rgba(0, 0, 0, 0.3);\n              box-shadow:0 1px 8px 1px rgba(0, 0, 0, 0.3); } }\n  @media (hover: hover){\n    .appointment:hover, .appointment:focus{\n      -webkit-box-shadow:0 1px 8px 1px rgba(0, 0, 0, 0.3);\n              box-shadow:0 1px 8px 1px rgba(0, 0, 0, 0.3); } }\n.appointment__status{\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  display:block;\n  font:600 1.2rem/2rem \"Open Sans\";\n  padding:1rem 0 .4rem;\n  opacity:.7;\n  text-transform:uppercase; }\n  .appointment__status--upcoming{\n    color:#000; }\n  .appointment__status--follow-up{\n    color:#d20962; }\n  .appointment__status--pending{\n    color:#d20962; }\n  .appointment__status--complete{\n    color:#646464; }\n  .appointment__status--missed{\n    color:#646464; }\n  .appointment__status--ready{\n    color:#000; }\n.appointment__subject{\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  display:block;\n  font:600 1.6rem/2.4rem \"Open Sans\";\n  margin:0 0 1rem;\n  line-height:1.5;\n  font-size:1.6rem; }\n.appointment__channel{\n  float:right;\n  font-size:1.4rem;\n  line-height:2;\n  margin-left:.5rem; }\n.appointment__date{\n  color:#646464;\n  display:block;\n  font:1.2rem/2rem \"Open Sans\";\n  line-height:2.4rem; }\n  .appointment__date::before{\n    font-size:1.4rem; }\n.appointment__user{\n  display:block;\n  color:#000;\n  font:1.2rem/2rem \"Open Sans\";\n  line-height:2.4rem; }\n  .appointment__user::before{\n    font-size:1.4rem; }\n.appointment--ready .appointment__status{\n  font:700 1.6rem/2.4rem \"Domaine Display\";\n  margin:2rem 0 1rem;\n  opacity:1;\n  padding:0;\n  text-transform:none;\n  white-space:initial; }\n.appointment--ready .appointment__subject{\n  color:#000;\n  font:600 1.2rem/2rem \"Open Sans\";\n  margin:1rem 0; }\n.appointment--ready .appointment__date{\n  margin:1rem 0 0;\n  padding:0; }\n.appointment--ready .appointment__user{\n  display:none; }\n"]
            },] },
];
AppointmentComponent.ctorParameters = function () { return []; };
AppointmentComponent.propDecorators = {
    "appointment": [{ type: core.Input },],
    "dependent": [{ type: core.Input },],
};
var DatePickerComponent =               (function () {
    function DatePickerComponent() {
        this.scrollDate = new core.EventEmitter();
        this.change = new core.EventEmitter();
    }
    DatePickerComponent.prototype.ngOnChanges = function () {
        this.selectDate(this.dates.find(function (date) { return date.hasAvailability; }));
    };
    DatePickerComponent.prototype.onScroll = function () {
        var _this = this;
        clearTimeout(this.scrollTimer);
        this.scrollTimer = setTimeout(function () { return _this.getScrollDate(); }, 100);
    };
    DatePickerComponent.prototype.getScrollDate = function () {
        var scroll = this.scrollWrap.nativeElement.scrollLeft;
        var closest;
        this.viewChildren.forEach(function (child) {
            if (!closest || Math.abs(scroll - child.nativeElement.offsetLeft) < Math.abs(scroll - closest.nativeElement.offsetLeft)) {
                closest = child;
            }
        });
        if (closest) {
            this.scrollDate.emit(new Date(closest.nativeElement.value));
        }
    };
    DatePickerComponent.prototype.selectDate = function (date) {
        if (date !== this.selected) {
            this.selected = date;
            this.change.emit(date.date);
        }
    };
    DatePickerComponent.prototype.scroll = function (delta) {
        var targetPos = this.scrollWrap.nativeElement.scrollLeft + this.scrollWrap.nativeElement.offsetWidth * delta;
        this.scrollWrap.nativeElement.scroll({
            top: 0,
            left: targetPos,
            behavior: 'smooth'
        });
    };
    return DatePickerComponent;
}());
DatePickerComponent.decorators = [
    { type: core.Component, args: [{
                selector: "v-datepicker",
                template: "\n    <nav class=\"v-datepicker\">\n      <button class=\"vdatepicker__paginate vdatepicker__paginate--prev\" (click)=\"scroll(-1)\" [attr.v-icon]=\"'arrow-back'\" [attr.aria-label]=\"'component.datepicker.prev' | translate\" ></button>\n      <button class=\"vdatepicker__paginate vdatepicker__paginate--next\" (click)=\"scroll(1)\" [attr.v-icon]=\"'arrow-back'\" [attr.aria-label]=\"'component.datepicker.next' | translate\" ></button>\n      <div class=\"vdatepicker__scroll-container\" (scroll)=\"onScroll()\" #scrollWrap>\n        <button type=\"button\"\n                class=\"vdatepicker__button\"\n                *ngFor=\"let date of dates\"\n                [attr.aria-selected]=\"{true : selected === date}\"\n                (click)=\"selectDate(date)\"\n                [ngClass]=\"{'vdatepicker__button--is-active': selected === date, 'vdatepicker__button--is-disabled': !date.hasAvailability}\"\n                [value]=\"date.date\"\n                #scrollChild\n        >\n          <span class=\"vdatepicker__day\" [innerHtml]=\"date.date | dayFormat: {format: 'ddd'}\"></span>\n          <span class=\"vdatepicker__date\" [innerHtml]=\"date.date | moment: 'D'\"></span>\n        </button>\n      </div>\n    </nav>\n  ",
                styles: [".v-datepicker{\n  background:#fff;\n  font-weight:300;\n  overflow:hidden;\n  position:relative;\n  padding:2.5rem 0 0; }\n.vdatepicker__scroll-container{\n  white-space:nowrap;\n  width:auto;\n  overflow:hidden;\n  overflow-x:auto; }\n  @media (min-width: 800px){\n    .vdatepicker__scroll-container{\n      overflow-x:hidden;\n      width:90%;\n      margin:0 auto; } }\n.vdatepicker__paginate{\n  background:none;\n  border:0;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  -webkit-box-pack:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n  outline:none;\n  position:absolute;\n  top:0;\n  bottom:0;\n  z-index:1;\n  width:2rem;\n  text-align:center; }\n  @media (max-width: 800px){\n    .vdatepicker__paginate{\n      display:none; } }\n  .vdatepicker__paginate--next{\n    right:10px;\n    -webkit-transform:rotate(180deg);\n            transform:rotate(180deg); }\n  .vdatepicker__paginate--prev{\n    left:10px; }\n  .vdatepicker__paginate--prev, .vdatepicker__paginate--next{\n    cursor:pointer;\n    font-size:1.6rem;\n    top:2rem; }\n    .vdatepicker__paginate--prev span, .vdatepicker__paginate--next span{\n      position:absolute !important;\n      height:1px;\n      width:1px;\n      overflow:hidden;\n      clip:rect(1px 1px 1px 1px);\n      clip:rect(1px, 1px, 1px, 1px); }\n    @supports (-moz-appearance: none){\n      .vdatepicker__paginate--prev:hover, .vdatepicker__paginate--prev:focus, .vdatepicker__paginate--next:hover, .vdatepicker__paginate--next:focus{\n        color:#7d3f98; } }\n    @media all and (-ms-high-contrast: active), (-ms-high-contrast: none){\n      .vdatepicker__paginate--prev:hover, .vdatepicker__paginate--prev:focus, .vdatepicker__paginate--next:hover, .vdatepicker__paginate--next:focus{\n        color:#7d3f98; } }\n    @media (hover: hover){\n      .vdatepicker__paginate--prev:hover, .vdatepicker__paginate--prev:focus, .vdatepicker__paginate--next:hover, .vdatepicker__paginate--next:focus{\n        color:#7d3f98; } }\n.vdatepicker__button{\n  background:none;\n  border:0;\n  -webkit-box-sizing:border-box;\n          box-sizing:border-box;\n  color:inherit;\n  cursor:pointer;\n  display:inline;\n  padding:1.4rem 0;\n  position:relative;\n  width:calc(100% / 7);\n  font:inherit;\n  outline:none;\n  text-align:center;\n  text-transform:uppercase; }\n  .vdatepicker__button .vdatepicker__day{\n    display:block;\n    font-size:1.2rem;\n    font-weight:700;\n    margin:0 0 1.5rem; }\n  .vdatepicker__button .vdatepicker__date{\n    display:block;\n    font-size:2.1rem;\n    font-weight:600; }\n  .vdatepicker__button--is-active{\n    padding:1.4rem 0 0; }\n    .vdatepicker__button--is-active:after{\n      background:#ef1e7b;\n      content:'';\n      height:4px;\n      border-radius:2px;\n      display:block;\n      max-width:3.5rem;\n      margin:1.4rem auto 0; }\n    .vdatepicker__button--is-active .vdatepicker__day{\n      font-weight:700;\n      color:#ef1e7b; }\n    .vdatepicker__button--is-active .vdatepicker__date{\n      color:#ef1e7b; }\n  @supports (-moz-appearance: none){\n    .vdatepicker__button:hover, .vdatepicker__button:focus{\n      padding:1.4rem 0 0; }\n      .vdatepicker__button:hover:after, .vdatepicker__button:focus:after{\n        background:#ef1e7b;\n        content:'';\n        height:4px;\n        border-radius:2px;\n        display:block;\n        max-width:3.5rem;\n        margin:1.4rem auto 0; }\n      .vdatepicker__button:hover .vdatepicker__day, .vdatepicker__button:focus .vdatepicker__day{\n        font-weight:700;\n        color:#ef1e7b; }\n      .vdatepicker__button:hover .vdatepicker__date, .vdatepicker__button:focus .vdatepicker__date{\n        color:#ef1e7b; } }\n  @media all and (-ms-high-contrast: active), (-ms-high-contrast: none){\n    .vdatepicker__button:hover, .vdatepicker__button:focus{\n      padding:1.4rem 0 0; }\n      .vdatepicker__button:hover:after, .vdatepicker__button:focus:after{\n        background:#ef1e7b;\n        content:'';\n        height:4px;\n        border-radius:2px;\n        display:block;\n        max-width:3.5rem;\n        margin:1.4rem auto 0; }\n      .vdatepicker__button:hover .vdatepicker__day, .vdatepicker__button:focus .vdatepicker__day{\n        font-weight:700;\n        color:#ef1e7b; }\n      .vdatepicker__button:hover .vdatepicker__date, .vdatepicker__button:focus .vdatepicker__date{\n        color:#ef1e7b; } }\n  @media (hover: hover){\n    .vdatepicker__button:hover, .vdatepicker__button:focus{\n      padding:1.4rem 0 0; }\n      .vdatepicker__button:hover:after, .vdatepicker__button:focus:after{\n        background:#ef1e7b;\n        content:'';\n        height:4px;\n        border-radius:2px;\n        display:block;\n        max-width:3.5rem;\n        margin:1.4rem auto 0; }\n      .vdatepicker__button:hover .vdatepicker__day, .vdatepicker__button:focus .vdatepicker__day{\n        font-weight:700;\n        color:#ef1e7b; }\n      .vdatepicker__button:hover .vdatepicker__date, .vdatepicker__button:focus .vdatepicker__date{\n        color:#ef1e7b; } }\n  .vdatepicker__button--is-disabled .vdatepicker__day{\n    font-weight:400; }\n  .vdatepicker__button--is-disabled .vdatepicker__date{\n    color:#919191;\n    font-weight:400; }\n  @media (min-width: 800px){\n    .vdatepicker__button{\n      width:calc(100% / 14); } }\n"]
            },] },
];
DatePickerComponent.ctorParameters = function () { return []; };
DatePickerComponent.propDecorators = {
    "scrollWrap": [{ type: core.ViewChild, args: ['scrollWrap',] },],
    "viewChildren": [{ type: core.ViewChildren, args: ['scrollChild',] },],
    "dates": [{ type: core.Input, args: ['dates',] },],
    "scrollDate": [{ type: core.Output },],
    "change": [{ type: core.Output },],
};
var FileType = {
    IMAGE: 'img',
    DOCUMENT: 'doc',
    SPREADSHEET: 'xls',
    PDF: 'pdf',
};
var DocumentCardComponent =               (function () {
    function DocumentCardComponent() {
    }
    Object.defineProperty(DocumentCardComponent.prototype, "icon", {
        get: function () {
            if (!this.document)
                return;
            switch (this.document.type) {
                case FileType.IMAGE:
                    return 'camera';
                default:
                    return 'document';
            }
        },
        enumerable: true,
        configurable: true
    });
    return DocumentCardComponent;
}());
DocumentCardComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'v-document-card',
                template: "\n    <article class=\"v-document-card\">\n      <v-icon class=\"v-document-card__icon\" [icon]=\"icon\"></v-icon>\n      <div class=\"v-document-card__title\" [innerText]=\"document.title\"></div>\n      <div class=\"v-document-card__date\" [innerText]=\"document.created | moment\"></div>\n    </article>\n  ",
                styles: [".v-document-card{\n  background:#fff;\n  border-radius:6px;\n  -webkit-box-shadow:0 2px 3px rgba(65, 65, 65, 0.2);\n          box-shadow:0 2px 3px rgba(65, 65, 65, 0.2);\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  font:1.2rem/2rem \"Open Sans\";\n  height:5.5rem;\n  padding:0 2rem; }\n.v-document-card__icon{\n  color:#7d3f98;\n  font-size:1.4rem;\n  line-height:1; }\n.v-document-card__title{\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  -webkit-box-flex:1;\n      -ms-flex:1;\n          flex:1;\n  margin:0 1rem; }\n.v-document-card__date{\n  color:#646464;\n  padding-left:.8rem; }\n"]
            },] },
];
DocumentCardComponent.ctorParameters = function () { return []; };
DocumentCardComponent.propDecorators = {
    "document": [{ type: core.Input },],
};
var DocumentTypeComponent =               (function () {
    function DocumentTypeComponent() {
    }
    return DocumentTypeComponent;
}());
DocumentTypeComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'v-document-type',
                styles: [".v-document-type{\n  background:#646464;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  -webkit-box-pack:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n  position:relative; }\n.v-document-type__background{\n  color:#fff;\n  margin:6.5rem auto;\n  font-size:15rem; }\n.v-document-type__open{\n  color:#fff;\n  font-size:2rem;\n  position:absolute;\n  bottom:3rem;\n  right:3rem; }\n.v-document-type__extension{\n  border:.4rem solid;\n  border-radius:1.65rem;\n  font:600 1.6rem/2.4rem \"Open Sans\";\n  text-transform:uppercase;\n  padding:0 1.5rem;\n  background:#fff;\n  text-align:center;\n  position:absolute;\n  -webkit-transform:translate(-5rem, 1rem);\n          transform:translate(-5rem, 1rem); }\n.v-document-type--pdf{\n  background:-webkit-gradient(linear, left bottom, left top, from(#d20962), color-stop(55%, #d20962), color-stop(55%, #ef1e7b), to(#ef1e7b));\n  background:linear-gradient(to top, #d20962 0%, #d20962 55%, #ef1e7b 55%, #ef1e7b 100%);\n  color:#d20962; }\n.v-document-type--doc{\n  background:-webkit-gradient(linear, left bottom, left top, from(#7d3f98), color-stop(55%, #7d3f98), color-stop(55%, #b18cc1), to(#b18cc1));\n  background:linear-gradient(to top, #7d3f98 0%, #7d3f98 55%, #b18cc1 55%, #b18cc1 100%);\n  color:#7d3f98; }\n.v-document-type--xls{\n  background:-webkit-gradient(linear, left bottom, left top, from(#00a78e), color-stop(55%, #00a78e), color-stop(55%, #66cabb), to(#66cabb));\n  background:linear-gradient(to top, #00a78e 0%, #00a78e 55%, #66cabb 55%, #66cabb 100%);\n  color:#00a78e; }\n"],
                template: "\n    <div class=\"v-document-type\" [ngClass]=\"'v-document-type--' + fileType\">\n      <span class=\"v-document-type__extension\" [innerText]=\"fileType\"></span>\n      <v-icon class=\"v-document-type__background\" icon=\"file\"></v-icon>\n      <v-icon class=\"v-document-type__open\" icon=\"enlarge\"></v-icon>\n    </div>\n  "
            },] },
];
DocumentTypeComponent.ctorParameters = function () { return []; };
DocumentTypeComponent.propDecorators = {
    "fileType": [{ type: core.Input },],
};
var ErrorMessageComponent =               (function () {
    function ErrorMessageComponent() {
    }
    Object.defineProperty(ErrorMessageComponent.prototype, "fieldName", {
        get: function () {
            var _this = this;
            var formGroup = (this.control.parent);
            if (!formGroup) {
                return ErrorMessageComponent.DEFAULT_FIELD;
            }
            return Object
                .keys(formGroup.controls)
                .find(function (name) { return formGroup.controls[name] === _this.control; }) || ErrorMessageComponent.DEFAULT_FIELD;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorMessageComponent.prototype, "errorMessage", {
        get: function () {
            return "form.error." + this.fieldName + "." + (Object.keys(this.control.errors)[0] || 'required');
        },
        enumerable: true,
        configurable: true
    });
    return ErrorMessageComponent;
}());
ErrorMessageComponent.DEFAULT_FIELD = 'field';
ErrorMessageComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'v-error',
                template: "\n    <ul class=\"v-error\" *ngIf=\"control?.touched && control?.dirty && control?.invalid\">\n      <li>\n        <v-icon icon=\"error\"></v-icon>\n        <span [translate]=\"errorMessage\"></span>\n      </li>\n    </ul>\n  ",
                styles: [".v-error{\n  color:#d20962;\n  list-style:none;\n  margin:1.5rem 0;\n  padding:0;\n  text-align:left; }\n"]
            },] },
];
ErrorMessageComponent.ctorParameters = function () { return []; };
ErrorMessageComponent.propDecorators = {
    "control": [{ type: core.Input, args: ['field',] },],
};
var IconComponent =               (function () {
    function IconComponent() {
    }
    return IconComponent;
}());
IconComponent.decorators = [
    { type: core.Component, args: [{
                selector: "v-icon",
                template: "\n    <i class=\"v-icon v-icon--{{icon}}\" [attr.v-icon]=\"icon\" [ngClass]=\"{'v-icon--mobile': isMobileOnly}\" [attr.role]=\"tooltip ? 'presentation': 'img'\" [attr.aria-hidden]=\"!tooltip\">\n      <span class=\"v-icon__tooltip\" *ngIf=\"tooltip\" [innerHtml]=\"tooltip\"></span>\n    </i>\n  ",
                styles: [":host{\n  font-family:\"vHealth Icon Font\"; }\n  :host:only-child{\n    vertical-align:middle; }\n.v-icon{\n  font:inherit; }\n.v-icon__tooltip{\n  position:absolute;\n  height:1px;\n  width:1px;\n  overflow:hidden;\n  clip:rect(1px, 1px, 1px, 1px); }\n@media (min-width: 800px){\n  .v-icon--mobile{\n    display:none; } }\n"]
            },] },
];
IconComponent.ctorParameters = function () { return []; };
IconComponent.propDecorators = {
    "tooltip": [{ type: core.Input },],
    "isMobileOnly": [{ type: core.Input },],
    "icon": [{ type: core.Input },],
};
var InputRatingComponent =               (function () {
    function InputRatingComponent() {
        this.step = 1;
        this.min = 1;
        this.max = 5;
    }
    Object.defineProperty(InputRatingComponent.prototype, "ratings", {
        get: function () {
            var array = [];
            for (var i = this.max; i >= this.min; i = i - this.step) {
                array.push(i);
            }
            return array;
        },
        enumerable: true,
        configurable: true
    });
    InputRatingComponent.prototype.onClick = function (value) {
        if (this.readonly || this.disabled)
            return;
        this.writeValue(value);
    };
    InputRatingComponent.prototype.writeValue = function (value) {
        if (this.onChange) {
            this.onChange(value);
            this.value = value;
        }
    };
    InputRatingComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    InputRatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return InputRatingComponent;
}());
InputRatingComponent.decorators = [
    { type: core.Component, args: [{
                selector: "v-input-rating",
                template: "\n    <section>\n      <button type=\"button\" [attr.disabled]=\"readonly || disabled\" (click)=\"onClick(rating)\" [attr.selected]=\"rating <= value\" [attr.value]=\"rating\" *ngFor=\"let rating of ratings\" [ngClass]=\"{large: isLarge, web: isWeb}\">\n        <svg viewBox=\"0 0 14 14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M13.9858268,5.04711139 C13.9450547,4.9213744 13.828188,4.83572747 13.695486,4.83572747 L8.74508376,4.83572747 L7.29032675,0.189523735 C7.21058004,-0.0631745785 6.78876413,-0.0631745785 6.70904595,0.189523735 L5.25428894,4.83572747 L0.304514378,4.83572747 C0.171812418,4.83572747 0.054945673,4.9213744 0.0141735592,5.04711139 C-0.025400214,5.17284838 0.0196516878,5.31011695 0.127388218,5.38727891 L4.19823698,8.28834097 L2.45436602,12.9296758 C2.40748808,13.0548149 2.44766102,13.195728 2.55357151,13.2771324 C2.66008117,13.3591348 2.80556543,13.3603592 2.91635487,13.2838236 L6.99998593,10.3724258 L11.083617,13.2838236 C11.1371714,13.3214935 11.1986577,13.3403141 11.2607432,13.3403141 C11.3258815,13.3403141 11.3916191,13.3196712 11.4464004,13.2771324 C11.5523108,13.195728 11.5924838,13.0548149 11.5456058,12.9296758 L9.80173489,8.28834097 L13.8725837,5.38727891 C13.9803487,5.31011695 14.0254006,5.17284838 13.9858268,5.04711139 Z\" id=\"path-1\"></path>\n        </svg>\n      </button>\n    </section>\n  ",
                providers: [
                    { provide: forms.NG_VALUE_ACCESSOR, useExisting: core.forwardRef(function () { return InputRatingComponent; }), multi: true }
                ],
                styles: ["section{\n  display:-webkit-inline-box;\n  display:-ms-inline-flexbox;\n  display:inline-flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:reverse;\n      -ms-flex-direction:row-reverse;\n          flex-direction:row-reverse; }\nbutton{\n  background:none;\n  margin-right:4px;\n  padding:0; }\n  button svg{\n    fill:#dcdcdc;\n    height:1.4rem;\n    width:1.4rem; }\n  button.large svg{\n    height:4.5rem;\n    width:4.5rem; }\n  button.web{\n    margin-right:7px; }\n    button.web svg{\n      height:2.4rem;\n      width:2.4rem; }\n    button.web:not([disabled]):hover svg,\n    button.web:not([disabled]):hover ~ button:not([selected='true']) svg{\n      fill:#00a78e; }\n    button.web[selected='true'] svg{\n      fill:#00f0cc; }\n  button:not([disabled]):hover svg,\n  button:not([disabled]):hover ~ button:not([selected='true']) svg{\n    fill:#e46b95; }\n  button[selected='true'] svg{\n    fill:#d20962; }\n"]
            },] },
];
InputRatingComponent.ctorParameters = function () { return []; };
InputRatingComponent.propDecorators = {
    "step": [{ type: core.Input },],
    "min": [{ type: core.Input },],
    "max": [{ type: core.Input },],
    "isLarge": [{ type: core.Input },],
    "isWeb": [{ type: core.Input },],
    "disabled": [{ type: core.Input },],
    "readonly": [{ type: core.Input },],
};
var LinkCardComponent =               (function () {
    function LinkCardComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(LinkCardComponent.prototype, "image", {
        get: function () {
            return this.sanitizer.bypassSecurityTrustStyle("url('" + this.info.image + "')");
        },
        enumerable: true,
        configurable: true
    });
    return LinkCardComponent;
}());
LinkCardComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[v-link-card]',
                template: "\n    <section class=\"v-link-card\" *ngIf=\"info\">\n      <aside class=\"v-link-card__image\" [ngClass]=\"'v-link-card__image--' + info.id\"></aside>\n      <header class=\"v-link-card__header\">\n        <div class=\"v-link-card__title\" [innerText]=\"info.name || info.description\"></div>\n        <div class=\"v-link-card__description\" [innerText]=\"info.description\" *ngIf=\"info.description\"></div>\n      </header>\n    </section>\n  ",
            },] },
];
LinkCardComponent.ctorParameters = function () { return [
    { type: platformBrowser.DomSanitizer, },
]; };
LinkCardComponent.propDecorators = {
    "info": [{ type: core.Input, args: ['v-link-card',] },],
};
var MembershipCardComponent =               (function () {
    function MembershipCardComponent() {
    }
    return MembershipCardComponent;
}());
MembershipCardComponent.decorators = [
    { type: core.Component, args: [{
                selector: "v-membership-card",
                template: "\n  <section class=\"v-membership-card\">\n    <p class=\"v-membership-card__name\">{{ 'component.membership-card.name' | translate }}: <span>{{ this.member.firstName }} {{ this.member.lastName }}</span></p>\n    <p class=\"v-membership-card__id\">{{ 'component.membership-card.id' | translate }}: <span>{{ this.member.instanceId }}</span></p>\n</section>\n  ",
                styles: [".v-membership-card{\n  background:url(\"data:image/png;base64,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\") no-repeat;\n  background-size:contain;\n  height:100%;\n  color:inherit;\n  text-align:left;\n  font:1.6rem/2.4rem \"Open Sans\";\n  padding:1.7rem;\n  white-space:nowrap;\n  overflow:hidden;\n  width:100%;\n  position:relative;\n  outline:none;\n  line-height:2rem;\n  width:31rem;\n  height:20rem; }\n  .v-membership-card .v-membership-card__name{\n    font-size:.8rem;\n    font-weight:600;\n    position:absolute;\n    top:5.1rem;\n    left:2rem; }\n    @media (min-width: 480px){\n      .v-membership-card .v-membership-card__name{\n        font-size:.8rem;\n        font-weight:600;\n        position:absolute;\n        top:5.1rem;\n        left:2rem; } }\n    .v-membership-card .v-membership-card__name span{\n      font-weight:400;\n      margin:0 .5rem 0 1rem; }\n  .v-membership-card .v-membership-card__id{\n    font:600 1.2rem/2rem \"Open Sans\";\n    position:absolute;\n    top:6.9rem;\n    left:2rem; }\n    .v-membership-card .v-membership-card__id span{\n      background:#f5eff8;\n      padding:.2rem;\n      border-radius:.5rem;\n      margin:0; }\n  @media (max-width: 480px){\n    .v-membership-card{\n      width:24rem;\n      height:15.5rem; }\n      .v-membership-card .v-membership-card__id{\n        top:5rem;\n        left:1.5rem; }\n      .v-membership-card .v-membership-card__name{\n        top:3.5rem;\n        left:1.5rem; } }\n"]
            },] },
];
MembershipCardComponent.ctorParameters = function () { return []; };
MembershipCardComponent.propDecorators = {
    "member": [{ type: core.Input },],
};
var OptionButtonComponent =               (function () {
    function OptionButtonComponent() {
    }
    Object.defineProperty(OptionButtonComponent.prototype, "isSelected", {
        get: function () {
            return this.value && this.selected === this.value;
        },
        enumerable: true,
        configurable: true
    });
    OptionButtonComponent.prototype.writeValue = function (value) {
        if (this.onChange) {
            this.selected = value;
            this.onChange(value);
        }
    };
    OptionButtonComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    OptionButtonComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return OptionButtonComponent;
}());
OptionButtonComponent.decorators = [
    { type: core.Component, args: [{
                selector: "v-option-button",
                template: "\n    <button class=\"option-button\"\n            type=\"button\"\n            [ngClass]=\"{'option-button--selected': isSelected}\"\n            (click)=\"writeValue(value)\">\n      <ng-content></ng-content>\n    </button>\n  ",
                providers: [
                    { provide: forms.NG_VALUE_ACCESSOR, useExisting: core.forwardRef(function () { return OptionButtonComponent; }), multi: true }
                ],
                styles: [".option-button{\n  background:#fff;\n  border:1px solid #fff;\n  border-radius:6px;\n  color:inherit;\n  cursor:pointer;\n  text-align:left;\n  font:1.6rem/2.4rem \"Open Sans\";\n  padding:1.7rem;\n  white-space:nowrap;\n  overflow:hidden;\n  width:100%;\n  outline:none;\n  -webkit-transition:border-color 280ms ease-in-out;\n  transition:border-color 280ms ease-in-out; }\n  @supports (-moz-appearance: none){\n    .option-button:hover, .option-button:focus{\n      border-color:#d20962; } }\n  @media all and (-ms-high-contrast: active), (-ms-high-contrast: none){\n    .option-button:hover, .option-button:focus{\n      border-color:#d20962; } }\n  @media (hover: hover){\n    .option-button:hover, .option-button:focus{\n      border-color:#d20962; } }\n.option-button--selected{\n  color:#d20962;\n  outline:0;\n  border-color:#d20962; }\n"]
            },] },
];
OptionButtonComponent.ctorParameters = function () { return []; };
OptionButtonComponent.propDecorators = {
    "icon": [{ type: core.Input },],
    "value": [{ type: core.Input },],
};
var ProgressComponent =               (function () {
    function ProgressComponent() {
        this.step = 1;
        this.total = 1;
        this.theme = 'standard';
    }
    Object.defineProperty(ProgressComponent.prototype, "steps", {
        get: function () {
            var steps = [];
            for (var i = 1; i <= this.total; i++) {
                steps.push(i);
            }
            return steps;
        },
        enumerable: true,
        configurable: true
    });
    return ProgressComponent;
}());
ProgressComponent.decorators = [
    { type: core.Component, args: [{
                selector: "v-progress",
                template: "\n    <ol class=\"v-progress\" role=\"progressbar\" [attr.aria-valuenow]=\"step\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"total\">\n      <li class=\"v-progress__item\" [ngClass]=\"'v-progress__item--' + theme\" [attr.active]=\"step === progress\" *ngFor=\"let progress of steps\"></li>\n    </ol>\n  ",
                styles: [".v-progress{\n  color:inherit;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  list-style:none;\n  margin:0;\n  padding:0; }\n.v-progress__item{\n  margin:0 .2rem; }\n  .v-progress__item:before{\n    background:#dcdcdc;\n    border-radius:50%;\n    content:'';\n    -webkit-transition:background 480ms ease-in-out;\n    transition:background 480ms ease-in-out;\n    display:block;\n    width:.6rem;\n    height:.6rem; }\n  .v-progress__item--standard[active='true']:before{\n    background:#414141; }\n  .v-progress__item--teal[active='true']:before{\n    background:#00f0cc; }\n"]
            },] },
];
ProgressComponent.ctorParameters = function () { return []; };
ProgressComponent.propDecorators = {
    "step": [{ type: core.Input },],
    "total": [{ type: core.Input },],
    "theme": [{ type: core.Input },],
};
var RecordType = {
    CONDITION: 'condition',
    MEDICATION: 'medication',
    SURGERY: 'surgery',
    ALLERGY: 'allergy',
    HISTORY: 'family-history',
    DOCUMENT: 'document',
    HEALTH: 'health',
    APPOINTMENT: 'appointment',
};
var RecordGhostComponent =               (function () {
    function RecordGhostComponent() {
        this.RecordType = RecordType;
    }
    Object.defineProperty(RecordGhostComponent.prototype, "hasText", {
        get: function () {
            return this.type === RecordType.HEALTH;
        },
        enumerable: true,
        configurable: true
    });
    return RecordGhostComponent;
}());
RecordGhostComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'v-record-ghost',
                template: "\n    <article class=\"v-record-ghost\">\n      <div [class]=\"'v-record-ghost__' + type\">\n        <h1 class=\"v-record-ghost__title\" [translate]=\"'component.record-ghost.' + type\"></h1>\n        <p *ngIf=\"hasText\" class=\"v-record-ghost__text\" [translate]=\"'component.record-ghost.' + type + '-text'\"></p>\n        <ng-content></ng-content>\n        <button *ngIf=\"type !== RecordType.DOCUMENT\" class=\"v-record-ghost__link\" [translate]=\"'component.record-ghost.' + type + '-add'\"></button>\n      </div>\n    </article>\n  ",
                styles: [".v-record-ghost{\n  background:#fff;\n  background-clip:content-box;\n  border:2px dashed #dcdcdc;\n  border-radius:.6rem;\n  color:#646464;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-pack:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-flow:column;\n          flex-flow:column;\n  width:100%;\n  min-height:17.5rem;\n  height:100%;\n  cursor:pointer;\n  padding:.5rem; }\n  .v-record-ghost h1{\n    font:700 2.4rem/3.4rem \"Domaine Display\";\n    line-height:3rem;\n    color:#414141;\n    margin:1rem; }\n  .v-record-ghost .v-record-ghost__text{\n    font:1.2rem/2rem \"Open Sans\";\n    margin:1rem; }\n  .v-record-ghost .v-record-ghost__link{\n    border:0;\n    background:#fff;\n    color:#7d3f98;\n    font:600 1.2rem/2rem \"Open Sans\";\n    margin:1rem; }\n  .v-record-ghost div{\n    padding:1rem;\n    text-align:left; }\n  @supports (-moz-appearance: none){\n    .v-record-ghost:hover .v-record-ghost__link, .v-record-ghost:focus .v-record-ghost__link{\n      color:#b18cc1; } }\n  @media all and (-ms-high-contrast: active), (-ms-high-contrast: none){\n    .v-record-ghost:hover .v-record-ghost__link, .v-record-ghost:focus .v-record-ghost__link{\n      color:#b18cc1; } }\n  @media (hover: hover){\n    .v-record-ghost:hover .v-record-ghost__link, .v-record-ghost:focus .v-record-ghost__link{\n      color:#b18cc1; } }\n  .v-record-ghost .v-record-ghost__condition{\n    background:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2241px%22 height%3D%2265px%22 viewBox%3D%220 0 41 65%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 49.1 (51147) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3E1_Aetna_StorytellingIcon_Healthcare_Violet%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22Medical-Record%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22Medical-Record-Artboard%22 transform%3D%22translate(-2984.000000%2C -578.000000)%22 fill%3D%22%23EF1E7B%22 fill-rule%3D%22nonzero%22%3E            %3Cg id%3D%22Group-9%22 transform%3D%22translate(2979.000000%2C 506.000000)%22%3E                %3Cg id%3D%22add-empyty-state%22 transform%3D%22translate(0.000000%2C 38.000000)%22%3E                    %3Cg id%3D%22Graph_mini%22%3E                        %3Cg id%3D%221_Aetna_StorytellingIcon_Healthcare_Violet%22 transform%3D%22translate(-18.000000%2C 34.228188)%22%3E                            %3Cpath d%3D%22M46%2C15.1006711 L43.1%2C15.1006711 C43.1%2C8.42877483 37.9065031%2C3.02013423 31.5%2C3.02013423 C25.0934969%2C3.02013423 19.9%2C8.42877483 19.9%2C15.1006711 L17%2C15.1006711 C17%2C6.76080076 23.4918711%2C1.34120902e-15 31.5%2C0 C39.5081289%2C-1.34120902e-15 46%2C6.76080076 46%2C15.1006711 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                            %3Cpolygon id%3D%22Shape%22 points%3D%2239.7238095 31.2080537 38.2725624 31.2080537 38.2725624 34.5040743 35 34.5040743 35 35.9657243 38.2725624 35.9657243 38.2725624 39.261745 39.7238095 39.261745 39.7238095 35.9657243 43 35.9657243 43 34.5040743 39.7238095 34.5040743%22%3E%3C%2Fpolygon%3E                            %3Cpath d%3D%22M59.6363636%2C17.114094 L4.36363636%2C17.114094 C1.95366655%2C17.114094 0%2C19.1000792 0%2C21.5499161 L0%2C59.9937081 C0%2C62.443545 1.95366655%2C64.4295302 4.36363636%2C64.4295302 L59.6363636%2C64.4295302 C62.0463335%2C64.4295302 64%2C62.443545 64%2C59.9937081 L64%2C21.5499161 C64%2C20.3734629 63.5402611%2C19.2451942 62.7219205%2C18.4133162 C61.9035799%2C17.5814382 60.793672%2C17.114094 59.6363636%2C17.114094 Z M45.4545455%2C38.4134333 C41.6066523%2C44.1826847 37.0892806%2C49.4598771 32%2C54.1310298 C32%2C54.1310298 21.8181818%2C43.958211 18.5272727%2C38.4097368 C16.9155294%2C35.7376681 17.1365013%2C32.3228633 19.0786853%2C29.8884408 C21.0208694%2C27.4540182 24.2620911%2C26.5291509 27.1668224%2C27.580529 C30.0715538%2C28.6319071 32.0083904%2C31.4309914 32%2C34.5653576 C31.9822124%2C31.4239983 33.9192573%2C28.6142419 36.8300472%2C27.5591928 C39.740837%2C26.5041437 42.9896675%2C27.4342201 44.9310492%2C29.8783506 C46.8724309%2C32.3224812 47.0823741%2C35.7468781 45.4545455%2C38.4171298 L45.4545455%2C38.4134333 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                        %3C%2Fg%3E                    %3C%2Fg%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\") left center no-repeat;\n    padding-left:6rem; }\n  .v-record-ghost .v-record-ghost__medication{\n    background:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2246px%22 height%3D%2285px%22 viewBox%3D%220 0 46 85%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 49.1 (51147) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3E1_Aetna_StorytellingIcon_Pharmacy_Violet%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22Medical-Record%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22Medical-Record-%2FEmpty-States-2%22 transform%3D%22translate(-269.000000%2C -481.000000)%22 fill%3D%22%237D3F98%22 fill-rule%3D%22nonzero%22%3E            %3Cg id%3D%22add-empyty-state%22 transform%3D%22translate(40.000000%2C 449.000000)%22%3E                %3Cg id%3D%22Graph_mini%22%3E                    %3Cg id%3D%221_Aetna_StorytellingIcon_Pharmacy_Violet%22 transform%3D%22translate(229.000000%2C 32.000000)%22%3E                        %3Cpolygon id%3D%22Shape%22 points%3D%2262.2631955 7.70439658 62.2631955 0 37.5531268 0 37.5531268 7.70439658 35.0882975 7.70439658 35.0882975 12.8492357 64.7403798 12.8492357 64.7403798 7.70439658%22%3E%3C%2Fpolygon%3E                        %3Cpolygon id%3D%22Shape%22 points%3D%2227.174898 7.70954142 27.174898 0 2.46482935 0 2.46482935 7.70954142 0 7.70954142 0 12.8492357 29.6520824 12.8492357 29.6520824 7.70954142%22%3E%3C%2Fpolygon%3E                        %3Cpath d%3D%22M35.0882975%2C17.297048 L35.0882975%2C77.0190055 C35.0882975%2C81.155303 38.3961935%2C84.5084347 42.4766901%2C84.5084347 L57.3519872%2C84.5084347 C61.4324838%2C84.5084347 64.7403798%2C81.155303 64.7403798%2C77.0190055 L64.7403798%2C17.297048 L35.0882975%2C17.297048 Z M41.59624%2C59.2378521 C40.6141663%2C58.2459374 40.0621445%2C56.8984566 40.0621445%2C55.4931374 C40.0621445%2C54.0878183 40.6141663%2C52.7403374 41.59624%2C51.7484228 L45.2904363%2C48.0037081 L45.3458492%2C47.9475374 L52.7342418%2C55.4369667 L52.6788289%2C55.4931374 L52.0015596%2C56.1796685 L48.9784756%2C59.2440933 C47.9991243%2C60.2387707 46.6693616%2C60.7972188 45.2830009%2C60.7960477 C43.8966401%2C60.7948766 42.5677975%2C60.2341827 41.590083%2C59.2378521 L41.59624%2C59.2378521 Z M57.3766152%2C70.9400853 L42.6675569%2C70.9400853 C43.2828292%2C67.3098039 46.3883113%2C64.6565562 50.022086%2C64.6565562 C53.6558608%2C64.6565562 56.7613429%2C67.3098039 57.3766152%2C70.9400853 Z M50.0190075%2C79.7838531 C46.3639392%2C79.780153 43.2494663%2C77.0933467 42.6613999%2C73.4365618 L57.3827722%2C73.4365618 C56.7812556%2C77.0809456 53.6703559%2C79.751475 50.0251645%2C79.7526471 L50.0190075%2C79.7838531 Z M58.2016524%2C49.9010302 L54.4643571%2C53.6894332 L47.0759645%2C46.2000039 L50.8132598%2C42.4116009 C52.853508%2C40.3434521 56.1614041%2C40.3434521 58.2016524%2C42.4116009 C60.2419007%2C44.4797497 60.2419007%2C47.8328814 58.2016524%2C49.9010302 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                        %3Cpath d%3D%22M0%2C17.297048 L0%2C77.0190055 C0%2C81.155303 3.30858305%2C84.5084347 7.38992707%2C84.5084347 L22.2621553%2C84.5084347 C26.3434993%2C84.5084347 29.6520824%2C81.155303 29.6520824%2C77.0190055 L29.6520824%2C17.297048 L0%2C17.297048 Z M14.9276527%2C40.845062 C18.5931461%2C40.8329484 21.7248265%2C43.5201391 22.3175798%2C47.1861121 L7.56851697%2C47.1861121 C8.15940212%2C43.5318072 11.2738048%2C40.8482606 14.9276527%2C40.845062 Z M22.2867884%2C49.6888297 C21.6713883%2C53.3191111 18.5652612%2C55.9723589 14.9307318%2C55.9723589 C11.2962024%2C55.9723589 8.19007529%2C53.3191111 7.57467525%2C49.6888297 L22.2867884%2C49.6888297 Z M10.1919411%2C72.5877598 L9.5145311%2C71.9012288 L6.49081928%2C68.836804 C5.17073588%2C67.4989463 4.65518461%2C65.5489762 5.13836863%2C63.7214286 C5.62155266%2C61.8938809 7.03006483%2C60.4664037 8.83333223%2C59.9767138 C10.6365996%2C59.487024 12.560663%2C60.0095169 13.8807463%2C61.3473747 L16.9044582%2C64.4117995 L17.5818682%2C65.0983305 L17.6372926%2C65.1545012 L10.2473655%2C72.6439305 L10.1919411%2C72.5877598 Z M23.1243135%2C78.2048318 C22.1455771%2C79.2003353 20.8159985%2C79.7599061 19.4293499%2C79.7599061 C18.0427014%2C79.7599061 16.7131228%2C79.2003353 15.7343864%2C78.2048318 L11.9963149%2C74.4164288 L19.386242%2C66.9269995 L23.1243135%2C70.7154025 C24.1049616%2C71.7089753 24.6548834%2C73.0573891 24.6525723%2C74.4627089 C24.6502612%2C75.8680287 24.0959075%2C77.2145773 23.1119969%2C78.2048318 L23.1243135%2C78.2048318 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                    %3C%2Fg%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\") right 2rem no-repeat;\n    padding-right:6rem; }\n  .v-record-ghost .v-record-ghost__surgery{\n    background:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2245px%22 height%3D%2285px%22 viewBox%3D%220 0 45 85%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 49.1 (51147) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3E1_Aetna_StorytellingIcon_Results_Violet%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22Medical-Record%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22Medical-Record-%2FEmpty-States-2%22 transform%3D%22translate(-45.000000%2C -723.000000)%22 fill%3D%22%2300A78E%22 fill-rule%3D%22nonzero%22%3E            %3Cg id%3D%22add-empyty-state%22 transform%3D%22translate(40.000000%2C 685.000000)%22%3E                %3Cg id%3D%22Graph_mini%22%3E                    %3Cg id%3D%221_Aetna_StorytellingIcon_Results_Violet%22 transform%3D%22translate(-10.601329%2C 38.000000)%22%3E                        %3Cpath d%3D%22M45.4385382%2C10.9705882 L14.5016611%2C10.9705882 L14.5016611%2C9 L8.70099668%2C9 L8.70099668%2C76 L51.2392027%2C76 L51.2392027%2C9 L45.4385382%2C9 L45.4385382%2C10.9705882 Z M14.5016611%2C25.8288235 L21.825%2C25.8288235 L26.10299%2C21.3506618 L33.8372093%2C29.3118382 L37.2886047%2C25.8288235 L45.4385382%2C25.8288235 L45.4385382%2C27.7994118 L38.1006977%2C27.7994118 L33.8372093%2C32.1002206 L26.10299%2C24.1636765 L22.637093%2C27.7994118 L14.5016611%2C27.7994118 L14.5016611%2C25.8288235 Z M29.9700997%2C62.2058824 L14.5016611%2C62.2058824 L14.5016611%2C60.2352941 L29.9700997%2C60.2352941 L29.9700997%2C62.2058824 Z M45.4385382%2C56.2941176 L14.5016611%2C56.2941176 L14.5016611%2C54.3235294 L45.4385382%2C54.3235294 L45.4385382%2C56.2941176 Z M45.4385382%2C50.3823529 L14.5016611%2C50.3823529 L14.5016611%2C48.4117647 L45.4385382%2C48.4117647 L45.4385382%2C50.3823529 Z M45.4385382%2C44.4705882 L14.5016611%2C44.4705882 L14.5016611%2C42.5 L45.4385382%2C42.5 L45.4385382%2C44.4705882 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                        %3Cpath d%3D%22M54.3208056%2C0 L5.61939369%2C0 C2.51588825%2C0 0%2C2.59471338 0%2C5.79545455 L0%2C79.2045455 C0%2C82.4052866 2.51588825%2C85 5.61939369%2C85 L54.3208056%2C85 C57.4243111%2C85 59.9401993%2C82.4052866 59.9401993%2C79.2045455 L59.9401993%2C5.79545455 C59.9401993%2C2.59471338 57.4243111%2C0 54.3208056%2C0 Z M52.4476744%2C77.2727273 L7.49252492%2C77.2727273 L7.49252492%2C7.72727273 L14.9850498%2C7.72727273 L14.9850498%2C5.79545455 L44.9551495%2C5.79545455 L44.9551495%2C7.72727273 L52.4476744%2C7.72727273 L52.4476744%2C77.2727273 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                    %3C%2Fg%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\") left 3.3rem no-repeat;\n    padding-left:6rem; }\n  .v-record-ghost .v-record-ghost__allergy{\n    background:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2276px%22 height%3D%22117px%22 viewBox%3D%220 0 76 117%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 49.1 (51147) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3EGroup 6%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22Medical-Record%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22Medical-Record-%2FEmpty-States-2%22 transform%3D%22translate(-239.000000%2C -942.000000)%22 fill%3D%22%23EF1E7B%22%3E            %3Cg id%3D%22add-empyty-state%22 transform%3D%22translate(40.000000%2C 926.000000)%22%3E                %3Cg id%3D%22Graph_mini%22%3E                    %3Cg id%3D%22Group-6%22 transform%3D%22translate(199.000000%2C 16.000000)%22%3E                        %3Cpath d%3D%22M83.2373214%2C19.2840709 C95.0023619%2C24.2319043 104.349643%2C33.804935 109.010958%2C45.7314177 L103.580441%2C45.7314177 C99.435309%2C36.7043727 92.2025949%2C29.3937999 83.2373214%2C25.1568352 L83.2373214%2C19.2840709 Z M47.3164292%2C19 L47.3164292%2C25.1568352 C38.4659577%2C29.3395448 31.3039582%2C36.5176501 27.134063%2C45.3854858 L20.9887857%2C45.3854858 C25.7872761%2C33.3882975 35.3416899%2C23.8133888 47.3164292%2C19 Z M108.444678%2C81.6523099 C103.617306%2C92.9343011 94.5437917%2C101.960949 83.2373214%2C106.715929 L83.2373214%2C101.535029 C91.9724204%2C97.4068437 99.0627816%2C90.3608484 103.255092%2C81.6523099 L108.444678%2C81.6523099 Z M21.2718952%2C81.306378 L27.134063%2C81.306378 C31.3039582%2C90.1742137 38.4659577%2C97.352319 47.3164292%2C101.535029 L47.3164292%2C107 C35.5727857%2C102.279503 26.1569513%2C92.9794939 21.2718952%2C81.306378 Z%22 id%3D%22Combined-Shape%22%3E%3C%2Fpath%3E                        %3Cpath d%3D%22M35%2C63 C35%2C58.581722 31.4370305%2C55 27.0418848%2C55 L19%2C55 L19%2C71 L27.0418848%2C71 C31.4370305%2C71 35%2C67.418278 35%2C63 Z%22 id%3D%22Shape%22 fill-rule%3D%22nonzero%22%3E%3C%2Fpath%3E                        %3Cpath d%3D%22M13.3472949%2C57.6666667 L13.3472949%2C68.3333333 L7.95811518%2C68.3333333 C5.02801808%2C68.3333333 2.65270506%2C65.9455187 2.65270506%2C63 C2.65270506%2C60.0544813 5.02801808%2C57.6666667 7.95811518%2C57.6666667 L13.3472949%2C57.6666667 Z M16%2C55 L7.95811518%2C55 C3.56296953%2C55 0%2C58.581722 0%2C63 C0%2C67.418278 3.56296953%2C71 7.95811518%2C71 L16%2C71 L16%2C55 Z%22 id%3D%22Shape%22 fill-rule%3D%22nonzero%22%3E%3C%2Fpath%3E                        %3Cpath d%3D%22M70.3308371%2C14.243235 C69.7746218%2C13.8403757 69.444872%2C13.1898991 69.4456431%2C12.4970692 L69.4456431%2C11.017964 C69.4158375%2C9.05935021 68.1089935%2C7.35781542 66.2427274%2C6.84770915 L66.2427274%2C6.04652718 C66.2429489%2C5.54179531 66.1465684%2C5.04181081 65.9589248%2C4.57426971 C68.3346275%2C4.41220517 70.1804475%2C2.41296979 70.1821786%2C0 C67.8937046%2C0.000296672935 65.9653028%2C1.7311861 65.6886365%2C4.03330069 C64.9901366%2C2.84633611 63.727831%2C2.11832906 62.3640912%2C2.11594213 L62.3640912%2C4.7180716 C63.0880801%2C4.7180716 63.6749891%2C5.31284142 63.6749891%2C6.04652718 L63.6749891%2C6.84770915 C61.8311859%2C7.37543109 60.5498008%2C9.06967328 60.5261311%2C11.0111163 L60.5261311%2C12.4902215 C60.5237232%2C13.1874055 60.1889459%2C13.8404194 59.6274227%2C14.243235 C57.220923%2C15.9540313 55.8545404%2C18.8010438 56.0123175%2C21.7757151 C56.4870578%2C26.545203 60.5166747%2C30.1330195 65.2450827%2C29.9962155 C69.9734907%2C29.8594116 73.7945521%2C26.0444565 74%2C21.2552892 C73.9688253%2C18.4539207 72.6016228%2C15.841091 70.3308371%2C14.243235 Z%22 id%3D%22Shape%22 fill-rule%3D%22nonzero%22%3E%3C%2Fpath%3E                        %3Cpath d%3D%22M66.115164%2C94.3462099 L66.115164%2C90.8015912 L68.9023068%2C90.8015912 L68.9023068%2C94.3430596 C73.9408839%2C94.752373 76.7961694%2C97.5029107 77.4681633%2C102.594673 C77.4773232%2C102.664079 77.481918%2C102.734011 77.481918%2C102.804018 C77.481918%2C103.687666 76.7655797%2C104.404005 75.8819316%2C104.404005 L59.136073%2C104.404018 C59.0657593%2C104.404018 58.9955222%2C104.399383 58.9258183%2C104.390144 C58.0498163%2C104.274023 57.4338107%2C103.469749 57.5499312%2C102.593747 L57.5499476%2C102.593749 C58.2231128%2C97.5154544 61.0781849%2C94.7662746 66.115164%2C94.3462099 Z M58.7742327%2C106.864343 L75.9536479%2C106.864343 C75.9536479%2C109.272949 75.9536479%2C110.477252 75.9536479%2C110.477252 C75.494014%2C113.502891 72.6307781%2C116.415671 67.3639403%2C119.215589 C61.936981%2C116.546059 59.0737451%2C113.63328 58.7742327%2C110.477252 C58.7742327%2C110.477252 58.7742327%2C109.272949 58.7742327%2C106.864343 Z%22 id%3D%22Combined-Shape%22 transform%3D%22translate(67.508896%2C 105.008590) rotate(44.000000) translate(-67.508896%2C -105.008590) %22%3E%3C%2Fpath%3E                    %3C%2Fg%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\") right 1rem no-repeat;\n    padding-right:6rem; }\n  .v-record-ghost .v-record-ghost__family-history{\n    background:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2292px%22 height%3D%2280px%22 viewBox%3D%220 0 92 80%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 49.1 (51147) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3Efamily%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22Medical-Record%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22Medical-Record-%2FEmpty-States-2%22 transform%3D%22translate(-204.000000%2C -1249.000000)%22%3E            %3Cg id%3D%22add-empyty-state%22 transform%3D%22translate(40.000000%2C 1165.000000)%22%3E                %3Cg id%3D%22Graph_mini%22%3E                    %3Cg id%3D%22family%22 transform%3D%22translate(164.000000%2C 84.000000)%22%3E                        %3Cg id%3D%221_Aetna_StorytellingIcon_Family_Violet%22 transform%3D%22translate(29.000000%2C 24.000000)%22%3E%3C%2Fg%3E                        %3Cg id%3D%22Group-8%22 transform%3D%22translate(70.500000%2C 45.000000) scale(-1%2C 1) translate(-70.500000%2C -45.000000) translate(55.000000%2C 10.000000)%22%3E%3C%2Fg%3E                        %3Cg id%3D%22Group-7%22 fill%3D%22%237D3F98%22 fill-rule%3D%22nonzero%22%3E                            %3Cpath d%3D%22M18.516129%2C45 C22.003332%2C45.0021939 24.8303369%2C47.8282901 24.8347282%2C51.316568 L24.8387097%2C80 L23.2461201%2C80 L23.2461201%2C51.3245335 C23.2461201%2C48.7114247 21.128431%2C46.5930815 18.516129%2C46.5930815 L18.516129%2C67.283427 L13.8870968%2C67.283427 L13.8870968%2C75.2163362 C13.8870968%2C77.8582808 11.8146084%2C80 9.25806452%2C80 C6.70152059%2C80 4.62903226%2C77.8582808 4.62903226%2C75.2163362 L4.62903226%2C67.283427 L0%2C67.283427 L0%2C51.3578129 C0.00148765299%2C43.4260295 4.73820415%2C36.3174972 11.9081855%2C33.4868421 C13.8565093%2C34.7353086 16.1040609%2C35.3953665 18.3965457%2C35.3923349 L18.516129%2C35.3923349 L18.516129%2C44.9596625 C15.1389924%2C44.9640551 12.402342%2C47.7921226 12.3980914%2C51.2820715 L13.9411022%2C51.2820715 C13.9453494%2C48.6727698 15.9911728%2C46.5586062 18.516129%2C46.5542171 L18.516129%2C45 Z M18.6020072%2C13.1326505 C22.6957642%2C13.1330952 26.3183249%2C15.8081772 27.5580313%2C19.7462315 C28.7977377%2C23.6842859 27.3693791%2C27.9793118 24.0267133%2C30.3647853 C20.6840475%2C32.7502588 16.1960984%2C32.6773706 12.9311972%2C30.1845844 C9.666296%2C27.6917982 8.37557593%2C23.3526121 9.74016159%2C19.4568537 C7.83379435%2C19.67311 5.98859623%2C18.6980113 5.07856404%2C16.993423 C4.16853185%2C15.2888346 4.37640336%2C13.1970441 5.60371812%2C11.7088492 C6.83103288%2C10.2206544 8.83134163%2C9.6348901 10.6571778%2C10.2290096 C12.4830141%2C10.8231291 13.7677432%2C12.477831 13.9028403%2C14.409349 C15.3301518%2C13.5726435 16.9514405%2C13.1321618 18.6020072%2C13.1326505 Z M44.27%2C22.5830769 C38.0483432%2C22.5830769 33.0046939%2C17.6237695 33.0046939%2C11.5061538 C33.0046939%2C5.38853816 38.0483432%2C0.429230769 44.27%2C0.429230769 C50.4916568%2C0.429230769 55.5353061%2C5.38853816 55.5353061%2C11.5061538 C55.5353061%2C17.6237695 50.4916568%2C22.5830769 44.27%2C22.5830769 Z M55.5306122%2C33.6461538 L55.5306122%2C54 L49.8979592%2C54 L49.8979592%2C72.4015385 C49.8979592%2C75.4603463 47.3761345%2C77.94 44.2653061%2C77.94 C41.1544777%2C77.94 38.6326531%2C75.4603463 38.6326531%2C72.4015385 L38.6326531%2C54 L33%2C54 L33%2C33.6461538 C33.0050244%2C30.1286531 34.7088217%2C26.8225793 37.5906122%2C24.7384615 C41.7959325%2C26.7895952 46.7346797%2C26.7895952 50.94%2C24.7384615 C53.8217905%2C26.8225793 55.5255879%2C30.1286531 55.5306122%2C33.6461538 Z%22 id%3D%22Combined-Shape%22%3E%3C%2Fpath%3E                            %3Cpath d%3D%22M88.1509452%2C79.95 L86.4510895%2C79.95 L86.4510895%2C49.95 C86.4510899%2C48.6364561 85.9186051%2C47.3767724 84.970895%2C46.4483475 C84.0231849%2C45.5199225 82.7379689%2C44.9988943 81.3982684%2C45 L81.3982684%2C43.3333333 C85.1186864%2C43.3379246 88.1335135%2C46.2938884 88.1381962%2C49.9416667 L88.1509452%2C79.95 Z M81.3982684%2C30 C75.7654421%2C30 71.1991342%2C25.5228475 71.1991342%2C20 C71.1991342%2C14.4771525 75.7654421%2C10 81.3982684%2C10 C87.0310947%2C10 91.5974026%2C14.4771525 91.5974026%2C20 C91.5974026%2C25.5228475 87.0310947%2C30 81.3982684%2C30 Z M76.3666955%2C49.9416667 C76.3713571%2C47.2176054 78.6199735%2C45.0091681 81.3982684%2C45 L81.3982684%2C58.3333333 L76.2987013%2C58.3333333 L76.2987013%2C74.9583333 C76.2987013%2C77.7197571 74.0155473%2C79.9583333 71.1991342%2C79.9583333 C68.3827211%2C79.9583333 66.0995671%2C77.7197571 66.0995671%2C74.9583333 L66.0995671%2C58.3333333 L61%2C58.3333333 L61%2C50.0208333 C61.0009655%2C41.7313919 66.2172587%2C34.301688 74.1143867%2C31.3416667 C76.260755%2C32.6465937 78.7367672%2C33.3365021 81.2622799%2C33.3333333 L81.3982684%2C33.3333333 L81.3982684%2C43.3333333 C77.68117%2C43.3425106 74.6715095%2C46.2971345 74.6668398%2C49.9416667 L76.3666955%2C49.9416667 Z%22 id%3D%22Combined-Shape%22 transform%3D%22translate(76.298701%2C 44.979167) scale(-1%2C 1) translate(-76.298701%2C -44.979167) %22%3E%3C%2Fpath%3E                        %3C%2Fg%3E                    %3C%2Fg%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\") right 2rem bottom 1rem no-repeat;\n    padding-right:4rem; }\n  .v-record-ghost .v-record-ghost__document{\n    background:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2243px%22 height%3D%2285px%22 viewBox%3D%220 0 43 85%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 49.1 (51147) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3E1_Aetna_StorytellingIcon_Documents_Violet%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22Medical-Record%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22Medical-Record-%2FEmpty-States-2%22 transform%3D%22translate(-45.000000%2C -1437.000000)%22 fill%3D%22%2300A78E%22 fill-rule%3D%22nonzero%22%3E            %3Cg id%3D%22add-empyty-state%22 transform%3D%22translate(40.000000%2C 1405.000000)%22%3E                %3Cg id%3D%22Graph_mini%22%3E                    %3Cg id%3D%221_Aetna_StorytellingIcon_Documents_Violet%22 transform%3D%22translate(-14.000000%2C 32.000000)%22%3E                        %3Cpath d%3D%22M42.625%2C0 L5.8125%2C0 C2.60234489%2C0 0%2C2.59471338 0%2C5.79545455 L0%2C79.2045455 C0%2C82.4052866 2.60234489%2C85 5.8125%2C85 L56.1875%2C85 C59.3976551%2C85 62%2C82.4052866 62%2C79.2045455 L62%2C19.3181818 L42.625%2C0 Z M31%2C61.8181818 L11.625%2C61.8181818 L11.625%2C59.8863636 L31%2C59.8863636 L31%2C61.8181818 Z M50.375%2C56.0227273 L11.625%2C56.0227273 L11.625%2C54.0909091 L50.375%2C54.0909091 L50.375%2C56.0227273 Z M50.375%2C50.2272727 L11.625%2C50.2272727 L11.625%2C48.2954545 L50.375%2C48.2954545 L50.375%2C50.2272727 Z M50.375%2C44.4318182 L11.625%2C44.4318182 L11.625%2C42.5 L50.375%2C42.5 L50.375%2C44.4318182 Z M50.375%2C38.6363636 L11.625%2C38.6363636 L11.625%2C36.7045455 L50.375%2C36.7045455 L50.375%2C38.6363636 Z M50.375%2C32.8409091 L11.625%2C32.8409091 L11.625%2C30.9090909 L50.375%2C30.9090909 L50.375%2C32.8409091 Z M42.625%2C19.3181818 L42.625%2C5.79545455 L56.1875%2C19.3181818 L42.625%2C19.3181818 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E                    %3C%2Fg%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\") left no-repeat;\n    padding-left:6rem; }\n  .v-record-ghost .v-record-ghost__health{\n    background:url(\"data:image/svg+xml,%3Csvg width%3D%2247px%22 height%3D%2263px%22 viewBox%3D%220 0 47 63%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 49.3 (51167) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22**Dashboard%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22DB-%2F-APP-nothing-connected%22 transform%3D%22translate(-46.000000%2C -813.000000)%22 fill%3D%22%2300F0CC%22 fill-rule%3D%22nonzero%22%3E            %3Cg id%3D%22health-data%22 transform%3D%22translate(40.000000%2C 740.000000)%22%3E                %3Cg id%3D%22health-kit-empyty-state-copy%22 transform%3D%22translate(0.000000%2C 40.000000)%22%3E                    %3Cg id%3D%22Graph_mini%22%3E                        %3Cpath d%3D%22M35.4999987%2C33.0368842 C25.8622924%2C33.0368077 18.0385604%2C40.759158 18.0000096%2C50.3101042 C17.9818878%2C40.732056 10.1321851%2C32.9820723 0.467208048%2C33.0000311 C-9.19776905%2C33.01799 -17.0180904%2C40.7970907 -16.9999686%2C50.375139 C-17.0056667%2C53.3769653 -16.2134716%2C56.3273326 -14.703095%2C58.9293717 C-14.3443452%2C59.5103485 -13.9374705%2C60.1346817 -13.5262207%2C60.7676863 L-2.26935275%2C60.7676863 L4.2362682%2C49.5166807 C4.54777083%2C48.9819862 5.12263312%2C48.65173 5.74564226%2C48.6495512 C6.3686514%2C48.65173 6.94351369%2C48.9819862 7.25501632%2C49.5166807 L18.0350096%2C67.8044423 L25.2537551%2C55.7903628 C25.5636826%2C55.258329 26.1345015%2C54.9284836 26.7543792%2C54.9232333 C27.3689151%2C54.9230446 27.9385172%2C55.2423126 28.2550032%2C55.7643489 L31.2868763%2C60.7676863 L35.6268736%2C60.7676863 C36.5933713%2C60.7676863 37.3768725%2C61.5441405 37.3768725%2C62.5019453 C37.3768725%2C63.4597501 36.5933713%2C64.2362044 35.6268736%2C64.2362044 L30.311252%2C64.2362044 C29.7002254%2C64.2400709 29.1314109%2C63.9278181 28.8106279%2C63.4124313 L26.7762542%2C60.0523044 L19.5356337%2C72.0837265 C19.2249173%2C72.6170884 18.6520786%2C72.9471387 18.0306346%2C72.9508561 C17.4091906%2C72.9471387 16.8363519%2C72.6170884 16.5256355%2C72.0837265 L5.75001726%2C53.8393214 L0.246270685%2C63.3777461 C-0.0667970421%2C63.9151198 -0.645717234%2C64.2457903 -1.27185337%2C64.2448757 L-13.4868458%2C64.2448757 C-14.4533435%2C64.2448757 -15.2368447%2C65.0213299 -15.2368447%2C65.9791347 C-15.2368447%2C66.9369395 -14.4533435%2C67.7133937 -13.4868458%2C67.7133937 L-8.27184901%2C67.7133937 C2.11439452%2C80.3864917 18.0000096%2C95.4615385 18.0000096%2C95.4615385 C18.1400095%2C95.3271334 42.8368691%2C71.9016293 50.6987392%2C58.925036 C52.2099019%2C56.3246903 53.0035868%2C53.3758895 52.9999878%2C50.375139 C52.997572%2C40.7987839 45.1632675%2C33.0368839 35.4999987%2C33.0368842 Z%22 id%3D%22Shape-Copy-2%22%3E%3C%2Fpath%3E                    %3C%2Fg%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\") left top 3rem no-repeat;\n    padding-left:6rem; }\n"]
            },] },
];
RecordGhostComponent.ctorParameters = function () { return []; };
RecordGhostComponent.propDecorators = {
    "type": [{ type: core.Input },],
};
var RecordTypeComponent =               (function () {
    function RecordTypeComponent() {
    }
    Object.defineProperty(RecordTypeComponent.prototype, "icon", {
        get: function () {
            switch (this.type) {
                case RecordType.CONDITION:
                    return 'heart-rate';
                case RecordType.MEDICATION:
                    return 'pill';
                case RecordType.SURGERY:
                    return 'surgeon';
                case RecordType.ALLERGY:
                    return 'allergy';
                case RecordType.HISTORY:
                    return 'familyhistoryshort';
                case RecordType.DOCUMENT:
                    return 'document';
                case RecordType.APPOINTMENT:
                    return 'calendar';
                default:
                    return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    RecordTypeComponent.prototype.writeValue = function (value) {
        if (this.onChange) {
            this.selected = value;
            this.onChange(this.selected);
        }
    };
    RecordTypeComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RecordTypeComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return RecordTypeComponent;
}());
RecordTypeComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'v-record-type',
                template: "\n    <button class=\"v-record-type\" (click)=\"writeValue(!selected)\" type=\"button\" (ngModel)=\"selected\" [ngClass]=\"[selected ? 'v-record-type--selected' : '', isTall ? 'v-record-type--tall' : '', 'v-record-type--' + type]\">\n        <v-icon [icon]=\"icon\"></v-icon>\n        <div [ngClass]=\"[isTall ? 'v-record-type__title--large' :'v-record-type__title']\" [translate]=\"'component.record-type.' + type\"></div>\n    </button>\n  ",
                providers: [
                    { provide: forms.NG_VALUE_ACCESSOR, useExisting: core.forwardRef(function () { return RecordTypeComponent; }), multi: true }
                ],
                styles: [".v-record-type{\n  border:solid 1px #fff;\n  -webkit-box-shadow:0 2px 3px rgba(100, 100, 100, 0.2);\n          box-shadow:0 2px 3px rgba(100, 100, 100, 0.2);\n  background:#fff;\n  border-radius:.6rem;\n  padding:1.5rem .5rem;\n  text-align:center;\n  width:100%; }\n  @supports (-moz-appearance: none){\n    .v-record-type:hover, .v-record-type:focus{\n      cursor:pointer;\n      -webkit-box-shadow:0 1px 8px 1px rgba(0, 0, 0, 0.3);\n              box-shadow:0 1px 8px 1px rgba(0, 0, 0, 0.3); } }\n  @media all and (-ms-high-contrast: active), (-ms-high-contrast: none){\n    .v-record-type:hover, .v-record-type:focus{\n      cursor:pointer;\n      -webkit-box-shadow:0 1px 8px 1px rgba(0, 0, 0, 0.3);\n              box-shadow:0 1px 8px 1px rgba(0, 0, 0, 0.3); } }\n  @media (hover: hover){\n    .v-record-type:hover, .v-record-type:focus{\n      cursor:pointer;\n      -webkit-box-shadow:0 1px 8px 1px rgba(0, 0, 0, 0.3);\n              box-shadow:0 1px 8px 1px rgba(0, 0, 0, 0.3); } }\n  .v-record-type v-icon{\n    font-size:2rem;\n    line-height:1;\n    margin-bottom:.7rem; }\n  .v-record-type .v-record-type__title{\n    overflow:hidden;\n    text-overflow:ellipsis;\n    white-space:nowrap;\n    font:600 1.2rem/2rem \"Open Sans\";\n    line-height:2.4rem;\n    margin-top:.7rem; }\n  .v-record-type .v-record-type__title--large{\n    font:600 1.6rem/2.4rem \"Open Sans\"; }\n  .v-record-type.v-record-type--condition{\n    color:#d20962; }\n  .v-record-type.v-record-type--medication{\n    color:#7d3f98; }\n  .v-record-type.v-record-type--allergy{\n    color:#d20962; }\n  .v-record-type.v-record-type--surgery{\n    color:#414141; }\n  .v-record-type.v-record-type--family-history{\n    color:#7d3f98; }\n  .v-record-type.v-record-type--document{\n    color:#414141; }\n  .v-record-type.v-record-type--appointment{\n    color:#7d3f98; }\n  .v-record-type.v-record-type--tall{\n    padding:3.65rem .5rem; }\n  .v-record-type.v-record-type--selected{\n    border-color:currentColor; }\n"]
            },] },
];
RecordTypeComponent.ctorParameters = function () { return []; };
RecordTypeComponent.propDecorators = {
    "type": [{ type: core.Input },],
    "isTall": [{ type: core.Input },],
};
var RecordComponent =               (function () {
    function RecordComponent() {
    }
    Object.defineProperty(RecordComponent.prototype, "icon", {
        get: function () {
            switch (this.type) {
                case RecordType.CONDITION:
                    return 'heart-rate';
                case RecordType.MEDICATION:
                    return 'pill';
                case RecordType.SURGERY:
                    return 'surgeon';
                case RecordType.ALLERGY:
                    return 'allergy';
                case RecordType.HISTORY:
                    return 'familyhistoryshort';
                case RecordType.DOCUMENT:
                    return 'document';
                default:
                    return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return RecordComponent;
}());
RecordComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'v-record',
                template: "\n    <section [class]=\"'v-record v-record--' + type\" [ngClass]=\"{'v-record--small': !title && !info}\" type=\"button\">\n      <header class=\"v-record__header\">\n        <v-icon class=\"v-record__icon\" [icon]=\"icon\"></v-icon>\n      </header>\n      <div class=\"v-record__content\">\n        <div class=\"v-record__title\" [innerText]=\"title || ''| titlecase\"></div>\n        <div class=\"v-record__tagline\" [innerText]=\"info || '' | titlecase\"></div>\n      </div>\n    </section>\n  ",
                styles: [".v-record{\n  background:#fff;\n  -webkit-box-shadow:0 0.2rem 0.3rem 0 rgba(65, 65, 65, 0.2);\n          box-shadow:0 0.2rem 0.3rem 0 rgba(65, 65, 65, 0.2);\n  border-radius:.6rem;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:column;\n          flex-direction:column;\n  font:1.2rem/2rem \"Open Sans\";\n  height:100%;\n  overflow:hidden;\n  -webkit-transition:-webkit-box-shadow 600ms ease-in-out;\n  transition:-webkit-box-shadow 600ms ease-in-out;\n  transition:box-shadow 600ms ease-in-out;\n  transition:box-shadow 600ms ease-in-out, -webkit-box-shadow 600ms ease-in-out; }\n  .v-record .v-record__content{\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1; }\n  .v-record .v-record__tagline{\n    font-weight:600; }\n  @supports (-moz-appearance: none){\n    .v-record:hover, .v-record:focus{\n      cursor:pointer;\n      -webkit-box-shadow:0 0.2rem 0.3rem 0 rgba(65, 65, 65, 0.4);\n              box-shadow:0 0.2rem 0.3rem 0 rgba(65, 65, 65, 0.4); } }\n  @media all and (-ms-high-contrast: active), (-ms-high-contrast: none){\n    .v-record:hover, .v-record:focus{\n      cursor:pointer;\n      -webkit-box-shadow:0 0.2rem 0.3rem 0 rgba(65, 65, 65, 0.4);\n              box-shadow:0 0.2rem 0.3rem 0 rgba(65, 65, 65, 0.4); } }\n  @media (hover: hover){\n    .v-record:hover, .v-record:focus{\n      cursor:pointer;\n      -webkit-box-shadow:0 0.2rem 0.3rem 0 rgba(65, 65, 65, 0.4);\n              box-shadow:0 0.2rem 0.3rem 0 rgba(65, 65, 65, 0.4); } }\n.v-record--condition{\n  color:#fff;\n  min-height:13.5rem; }\n  .v-record--condition .v-record__header{\n    background:#ef1e7b;\n    padding:1rem 1rem 1.4rem 0; }\n  .v-record--condition .v-record__content{\n    background:#d20962;\n    min-height:3.6rem;\n    padding:1rem 2rem; }\n  .v-record--condition .v-record__icon{\n    font-size:4rem;\n    line-height:1; }\n.v-record--small{\n  min-height:initial; }\n  .v-record--small .v-record__header{\n    padding:.5rem .5rem 1rem; }\n  .v-record--small .v-record__icon{\n    font-size:1.8rem; }\n.v-record--family-history{\n  color:#fff;\n  min-height:13.5rem; }\n  .v-record--family-history .v-record__header{\n    background:#66cabb;\n    padding:1rem 1rem 1.4rem 0; }\n  .v-record--family-history .v-record__content{\n    background:#00a78e;\n    min-height:3.6rem;\n    padding:1rem 2rem; }\n  .v-record--family-history .v-record__icon{\n    font-size:4rem;\n    line-height:1; }\n.v-record--small{\n  min-height:initial; }\n  .v-record--small .v-record__header{\n    padding:.5rem .5rem 1rem; }\n  .v-record--small .v-record__icon{\n    font-size:1.8rem; }\n.v-record--surgery{\n  border-top:5px solid #7d3f98;\n  color:#000;\n  padding:1.5rem 2rem;\n  min-height:13.5rem; }\n  .v-record--surgery.v-record--small{\n    min-height:7rem; }\n  .v-record--surgery .v-record__icon{\n    color:#7d3f98;\n    font-size:2rem;\n    line-height:2rem; }\n    @media (min-width: 800px){\n      .v-record--surgery .v-record__icon{\n        font-size:2.2rem;\n        line-height:2.2rem;\n        float:left;\n        margin:0 0 1rem; } }\n  .v-record--surgery .v-record__header{\n    padding-bottom:1rem; }\n  .v-record--surgery .v-record__content{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n    -webkit-box-pack:end;\n        -ms-flex-pack:end;\n            justify-content:flex-end; }\n.v-record--medication{\n  color:#000;\n  padding:1.7rem 2rem; }\n  .v-record--medication .v-record__icon{\n    color:#d20962;\n    font-size:1.4rem;\n    line-height:1.4rem; }\n    @media (min-width: 800px){\n      .v-record--medication .v-record__icon{\n        font-size:2rem;\n        line-height:2rem;\n        float:left;\n        margin:0 0 1rem; } }\n  .v-record--medication .v-record__title{\n    line-height:2.4rem; }\n  .v-record--medication .v-record__tagline{\n    line-height:1; }\n.v-record--allergy{\n  color:#000;\n  padding:1.7rem 2rem; }\n  .v-record--allergy .v-record__icon{\n    color:#00a78e;\n    font-size:1.4rem;\n    line-height:1.4rem; }\n    @media (min-width: 800px){\n      .v-record--allergy .v-record__icon{\n        font-size:2rem;\n        line-height:2rem;\n        float:left;\n        margin:0 0 1rem; } }\n  .v-record--allergy .v-record__title{\n    line-height:2.4rem; }\n  .v-record--allergy .v-record__tagline{\n    line-height:1; }\n"]
            },] },
];
RecordComponent.ctorParameters = function () { return []; };
RecordComponent.propDecorators = {
    "title": [{ type: core.Input },],
    "info": [{ type: core.Input },],
    "type": [{ type: core.Input },],
};
var TimeSlotComponent =               (function () {
    function TimeSlotComponent() {
    }
    Object.defineProperty(TimeSlotComponent.prototype, "isSelected", {
        get: function () {
            return this.selected === this.date;
        },
        enumerable: true,
        configurable: true
    });
    TimeSlotComponent.prototype.writeValue = function (value) {
        if (this.onChange) {
            this.selected = value;
            this.onChange(value);
        }
    };
    TimeSlotComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TimeSlotComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return TimeSlotComponent;
}());
TimeSlotComponent.decorators = [
    { type: core.Component, args: [{
                selector: "v-time-slot",
                template: "\n    <button class=\"time-slot time-slot--{{theme}}\"\n            type=\"button\"\n            [ngClass]=\"{ 'time-slot--date' : showDate, 'time-slot--selected' : isSelected }\"\n            (click)=\"writeValue(date)\">\n      <span class=\"time-slot__date\" *ngIf=\"showDate\" [innerHtml]=\"date | dayFormat: {format: 'MMM D', tomorrow: true}\"></span>\n      <span class=\"time-slot__time\" [innerHtml]=\"date | moment: 'LT'\"></span>\n    </button>\n  ",
                providers: [
                    { provide: forms.NG_VALUE_ACCESSOR, useExisting: core.forwardRef(function () { return TimeSlotComponent; }), multi: true }
                ],
                styles: [".time-slot{\n  background:#fff;\n  border:1px solid #fff;\n  border-radius:6px;\n  color:#000;\n  cursor:pointer;\n  text-align:center;\n  padding:1.3rem 0;\n  white-space:nowrap;\n  overflow:hidden;\n  width:100%;\n  outline:none;\n  -webkit-transition:border-color 280ms ease-in-out;\n  transition:border-color 280ms ease-in-out; }\n  .time-slot.time-slot--date{\n    padding:0 0 .2rem; }\n  @supports (-moz-appearance: none){\n    .time-slot:hover, .time-slot:focus{\n      border-color:#d20962; } }\n  @media all and (-ms-high-contrast: active), (-ms-high-contrast: none){\n    .time-slot:hover, .time-slot:focus{\n      border-color:#d20962; } }\n  @media (hover: hover){\n    .time-slot:hover, .time-slot:focus{\n      border-color:#d20962; } }\n  .time-slot.time-slot--grey{\n    background:#f5f5f5;\n    padding:0; }\n.time-slot--selected{\n  color:#d20962;\n  outline:0;\n  border-color:#d20962; }\n.time-slot__date{\n  display:block;\n  font:1.6rem/2.4rem \"Open Sans\";\n  font-weight:600;\n  margin:.8rem 0 0; }\n  .time-slot__date + .time-slot__time{\n    margin-bottom:1rem; }\n.time-slot__time{\n  display:block;\n  font:1.6rem/2.4rem \"Open Sans\";\n  font-weight:300; }\n"]
            },] },
];
TimeSlotComponent.ctorParameters = function () { return []; };
TimeSlotComponent.propDecorators = {
    "date": [{ type: core.Input },],
    "theme": [{ type: core.Input },],
    "showDate": [{ type: core.Input },],
};
var TruncateComponent =               (function () {
    function TruncateComponent() {
        this.length = 60;
    }
    Object.defineProperty(TruncateComponent.prototype, "buttonText", {
        get: function () {
            return "component.truncate." + (this.showAll ? 'less' : 'more');
        },
        enumerable: true,
        configurable: true
    });
    TruncateComponent.prototype.ngOnChanges = function () {
        delete this.concat;
        if (this.content && this.content.length > this.length) {
            this.concat = this.content.slice(0, this.length) + '...';
        }
    };
    return TruncateComponent;
}());
TruncateComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'v-truncate',
                styles: [":root{\n  display:inline; }\nbutton{\n  background:none;\n  border:0;\n  color:#7d3f98;\n  cursor:pointer;\n  font-family:\"Open Sans\";\n  font-size:inherit;\n  font-weight:600;\n  outline:0;\n  padding:0; }\n  @supports (-moz-appearance: none){\n    button:hover, button:focus{\n      color:#b18cc1; } }\n  @media all and (-ms-high-contrast: active), (-ms-high-contrast: none){\n    button:hover, button:focus{\n      color:#b18cc1; } }\n  @media (hover: hover){\n    button:hover, button:focus{\n      color:#b18cc1; } }\n"],
                template: "\n    {{concat && !showAll ? concat : content}}\n    <button *ngIf=\"concat\" (click)=\"showAll = !showAll\" [translate]=\"buttonText\"></button>\n  ",
            },] },
];
TruncateComponent.ctorParameters = function () { return []; };
TruncateComponent.propDecorators = {
    "length": [{ type: core.Input },],
    "content": [{ type: core.Input },],
};
var DayFormatPipe =               (function () {
    function DayFormatPipe() {
    }
    DayFormatPipe.prototype.transform = function (date, opts) {
        if (opts === void 0) { opts = {}; }
        if (!date)
            return '';
        if (!opts.format)
            opts.format = 'D MMM';
        return moment$1(date).calendar(null, {
            lastWeek: opts.format,
            lastDay: opts.format,
            sameDay: '[Today]',
            nextDay: opts.tomorrow ? '[Tomorrow]' : opts.format,
            nextWeek: opts.format,
            sameElse: opts.format
        });
    };
    return DayFormatPipe;
}());
DayFormatPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'dayFormat' },] },
];
DayFormatPipe.ctorParameters = function () { return []; };
var HighlightPipe =               (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (content, match, opts) {
        if (opts === void 0) { opts = {}; }
        if (!content)
            return '';
        var pattern = new RegExp("(" + match + ")", opts.first ? 'i' : 'gi');
        return content.replace(pattern, function (match) { return "<span class=\"" + (opts.toggleClass || 'v-highlight') + "\">" + match + "</span>"; });
    };
    return HighlightPipe;
}());
HighlightPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'highlight' },] },
];
HighlightPipe.ctorParameters = function () { return []; };
var MomentPipe =               (function () {
    function MomentPipe(dateUtil) {
        this.dateUtil = dateUtil;
    }
    MomentPipe.prototype.transform = function (date, format) {
        if (format === void 0) { format = 'll'; }
        if (!date)
            return null;
        return this.dateUtil.format(date, format);
    };
    return MomentPipe;
}());
MomentPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'moment' },] },
];
MomentPipe.ctorParameters = function () { return [
    { type: DateUtil, },
]; };
var allergies = [
    'Abacavir sulphate',
    'Abatacept',
    'Abiraterone Acetate',
    'Acamprosate',
    'Acarbose',
    'Acenocoumarol',
    'Acetazolamide',
    'Acetylcysteine Eye Drops',
    'Aciclovir Cream',
    'Aciclovir Eye Ointment',
    'Aciclovir Tablet',
    'Aclidinium',
    'Actrapid Insulin',
    'Adalimumab',
    'Agalsidase',
    'Agomelatine',
    'Albendazole',
    'Albiglutide',
    'Alendronic Acid',
    'Alfacalcidol',
    'Alfuzosin',
    'Aliskiren',
    'Alitretinoin',
    'Allopurinol',
    'Almotriptan',
    'Alogliptin',
    'Alpha Tocopherol',
    'Alphaderm',
    'Amantadine',
    'Ambrisentan',
    'Amiloride',
    'Aminophylline',
    'Aminosalicylic Acid',
    'Amiodarone',
    'Amitriptyline',
    'Amlodipine',
    'Amoxicillin',
    'Ampicillin',
    'Anakinra',
    'Anastrozole',
    'Animal dander',
    'Anoro Ellipta',
    'Antibiotics',
    'Antipsychotics',
    'Anugesic HC Cream',
    'Anusol HC Ointment',
    'Anusol HC Supossitory',
    'Anusol Ointment',
    'Anusol Suppository',
    'Apixaban',
    'Apomorphine',
    'Apraclonidine Drops',
    'Aquamax Cream',
    'Aqueous Cream',
    'Arachis Oil Enema',
    'Aripiprazole',
    'Ascorbic Acid',
    'Aspirin',
    'Atarax',
    'Atazanavir',
    'Atenolol',
    'Atomoxetine',
    'Atorvastatin',
    'Avocado',
    'Azathioprine',
    'Azelaic Acid',
    'Azelastine hydrochloride nasal spray',
    'Azilsartan Medoxomil',
    'Azithromycin',
    'Baclofen',
    'Bactroban',
    'Balneum',
    'Balneum Bath Oil',
    'Balsalazide Sodium',
    'Bambuterol',
    'Basaliximab',
    'Beclometasone',
    'Bedaquiline',
    'Bee Sting',
    'Belimumab',
    'Bendamustine Hydrochloride',
    'Bendroflumethiazide',
    'Benzamycin gel',
    'Benzoyl peroxide',
    'Beta blockers',
    'Betahistine',
    'Betamethasone Dipropionate',
    'Betaxolol',
    'Betnovate',
    'Betnovate-C',
    'Betnovate-N',
    'Bettamousse',
    'Bezafibrate',
    'Bicalutamide',
    'Bisacodyl',
    'Bisoprolol',
    'Bosentan',
    'Brevinor Contraceptive Pill',
    'Brimonidine Drops',
    'Brinzolamide',
    'Brivaracetam',
    'Brizolamide & Timolol',
    'Bromocriptine',
    'Budesonide',
    'Budesonide Capsule',
    'Budesonide Enema',
    'Budesonide Inhaler',
    'Budesonide Nasal Spray',
    'Bumetanide',
    'Bupivacaine',
    'Buprenorphine Patch',
    'Bupropion (Zyban)',
    'Buscopan',
    'Buserelin',
    'Buspirone',
    'Busulfan',
    'Cabergoline',
    'Calamine & Zinc',
    'Calcipotriol & Betamethasone Ointment',
    'Calcipotriol Ointment',
    'Calcitonin',
    'Calcitriol',
    'Calcitriol Ointment',
    'Calcium & Vitamine D',
    'Calmurid HC',
    'Canagliflozin',
    'Canagliflozin & Metformin',
    'Candesartan',
    'Canesten HC',
    'Cangrelor',
    'Cannabis Extract',
    'Capasal Shampoo',
    'Capecitabine',
    'Capsaicin Gel',
    'Captopril',
    'Carbamazepine',
    'Carbimazole',
    'Carbocisteine',
    'Carbomer Eye Drops',
    'Carmellose Eye Drops',
    'Carmustine',
    'Carvedilol',
    'Cat',
    'Ceanel Shampoo',
    'Cefaclor',
    'Cefadroxil',
    'Cefalexin',
    'Cefixime',
    'Cefradine',
    'Cefuroxime',
    'Celecoxib',
    'Celery',
    'Cephalosporin Antibiotics',
    'Cerazette',
    'Cereals',
    'Certolizumab',
    'Cetirizine',
    'Cetraben Emollient',
    'Cetrorelix',
    'Chickenpox Vaccine',
    'Chlorambucil',
    'Chloramphenicol',
    'Chlordiazepoxide',
    'Chlorhexidine',
    'Chlorine',
    'Chloroquine',
    'Chlorphenamine',
    'Chlorpromazine',
    'Chlortalidone',
    'Choriogonadotropin',
    'Chromium',
    'Ciclesonide Inhaler',
    'Ciclosporin',
    'Cilest Contraceptive Pill',
    'Cimetidine',
    'Cinacalcet',
    'Cinchocaine',
    'Cinnarizine',
    'Ciprofibrate',
    'Ciprofloxacin Eye Drops',
    'Ciprofloxacin Tablet',
    'Citalopram',
    'Clarelux',
    'Clarithromycin',
    'Clindamycin Capsule',
    'Clindamycin Cream',
    'Clindamycin Gel',
    'Cloal Tar & Lecithin (Psoriderm)',
    'Clobazam',
    'Clomethiazole',
    'Clomifene',
    'Clomipramine',
    'Clonazepam',
    'Clonidine Hydrochloride',
    'Clopidogrel',
    'Clotrimazole & Hydrocortisone',
    'Clotrimazole Cream (Canesten)',
    'Clotrimazole Pessary (Canesten)',
    'Clotrimazole Spray (Canesten)',
    'Clozapine',
    'Co-Amilofruse',
    'Co-Amilozide',
    'Co-Amoxiclav (Augmentin)',
    'Co-Beneldopa',
    'Co-Careldopa',
    'Co-Codamol',
    'Co-Cyprindiol',
    'Co-Flumactone',
    'Co-Magaldrox',
    'Co-Tenidone',
    'Co-Triamterizide',
    'Co-Trimoxazole',
    'Co-Zidocapt (Captopril & Hydrochlorothiazide)',
    'Coal Tar',
    'Coal Tar & Calamine',
    'Coal Tar Lotion',
    'Coal Tar Shampoo',
    'Cobalt',
    'Cobicistat',
    'Cockroaches',
    'Codeine Linctus',
    'Codeine Phospate',
    'Colchicine',
    'Colecalciferol',
    'Colestyramine',
    'Combivent',
    'Conotrane Cream',
    'Copper Coil',
    'Cow Milk Protein',
    'Cow\'s milk',
    'Cyclizine',
    'Cyclopenthiazide',
    'Cyclopentolate Hydrochloride Eye Drops',
    'Cyclophosphamide',
    'Cyclosporin',
    'Dabigatran Etexilate',
    'Dacarbazine',
    'Daktacort',
    'Dalacin T Solution',
    'Dalteparin Injection',
    'Danaparoid Sodium',
    'Danazol',
    'Dantrolene sodium',
    'Dapagliflozin',
    'Dapoxetine',
    'Darifenacin',
    'Darunavir Ethanolate',
    'Deflazacort',
    'Degarelix',
    'Demeclocycline',
    'Denosumab',
    'Depo-Provera',
    'Dermol',
    'Dermovate',
    'Desmopressin Spray',
    'Desmopressin Tablet',
    'Desmpressin Nasal Drops',
    'Desogestrel',
    'Detergents',
    'Diazepam',
    'Diazoxide',
    'Diclofenac',
    'Didanosine',
    'Digoxin',
    'Dihydrocodeine',
    'Dilantin',
    'Diloxanide Furoate',
    'Diltiazem',
    'Dimethyl Fumarate',
    'Dimeticone',
    'Diprosalic',
    'Dipyridamole',
    'Disopyramide',
    'Disulfiram',
    'Docusate Sodium',
    'Dog',
    'Dolutegravir',
    'Domperidone',
    'Donepezil Hydrochloride',
    'Dorzolamide',
    'Dosulepin',
    'Doublebase',
    'Doxazosin',
    'Doxepin',
    'Doxycycline',
    'Dronedarone',
    'Duac Gel',
    'Dulaglutide',
    'Duloxetine',
    'Dust mites',
    'Dutasteride',
    'E45 Emollient',
    'Econazole Cream',
    'Econazole Pessary',
    'Edoxaban',
    'Efavirenz',
    'Eflornithine Cream',
    'Eformoterol Fumarate Turbohaler',
    'Egg',
    'Eggs',
    'Eletripta',
    'Elidel',
    'Elocon',
    'Elvitegravir',
    'Emedastine Eye Drops',
    'Empagliflozin',
    'Emtricitabine',
    'Enalapril',
    'Enalapril & Hydrochlorothiazide',
    'Enfuvirtide',
    'Enoxaparin Injection',
    'Entacapone',
    'Enzalutamide',
    'Epaderm Cream / Ointment',
    'Ephedrine Hydrochloride',
    'Ephedrine Hydrochloride Nasal Drops',
    'Epilim Chrono',
    'Epilim Chronosphere',
    'Epimax cream',
    'Epinastine Hydrochloride Eye Drops',
    'Episenta',
    'Epiva',
    'Eplerenone',
    'Epoetin',
    'Eprosartan',
    'Ergocalciferol',
    'Ergotamine',
    'Erythromycin',
    'Erythromycin & Zinc',
    'Erythromycin 2%',
    'Escitalopram',
    'Eslicarbazepine Acetate',
    'Esomeprazole',
    'Estramustine Phosphate',
    'Etamsylate',
    'Etanercept',
    'Ethambutol',
    'Etoricoxib',
    'Etravirine',
    'Eumocream',
    'Eumovate',
    'Eurax Hydrocortisone',
    'Exenatide',
    'ExenatideProlonged Release',
    'Ezetimibe',
    'Fafluprost & Timolol Eye Drops',
    'Famotidine',
    'Fampridine',
    'Febuxostat',
    'Felbinac Gel',
    'Felodipine',
    'Fenofibrate',
    'Fenticonazole Capsule',
    'Fenticonazole Cream',
    'Ferrous Fumarate',
    'Ferrous Gluconate',
    'Ferrous Sulfate',
    'Fesoterodine Fumarate',
    'Fexofenadine',
    'Finasteride',
    'Fish',
    'Flecainide',
    'Flucloxacillin',
    'Fluconazole',
    'Fludroxycortide Cream',
    'Flumetasone & Clioquinol Ear Drops',
    'Fluocinolone Acetonide cream / Ointment',
    'Fluocinondide Cream / Ointment',
    'Fluorometholone Eye Drops',
    'Fluorouracil',
    'Fluoxetine',
    'Flupentixol',
    'Flutamide',
    'Fluvastatin',
    'Fluvoxamine',
    'Flydrocortisone Acetate',
    'Folic Acid',
    'Folinic Acid',
    'Follitropin',
    'Follitropin & Lutropin',
    'Fondaparinux Sodium',
    'Formaldehyde',
    'Formoterol Fumarate Turbohaler',
    'Formoterol Inhaler',
    'Fosamprenavir',
    'Fosfomycin',
    'Fosinopril',
    'Frosemide',
    'Frovatriptan',
    'Fruit',
    'Fruits',
    'Fucibet',
    'Fucidin H',
    'Fulvestrant',
    'Furosemide',
    'Fusidic Acid Cream',
    'Fusidic Acid Drops',
    'Fusidic Acid Tablet',
    'Fybogel Mebeverine',
    'Gabapentin',
    'Galantamine',
    'Ganirelix',
    'Garlic',
    'Gaviscon',
    'Gedarel 20/150 Contraceptive Pill',
    'Gedarel 30/150 Contraceptive Pill',
    'Gemfibrozil',
    'General Aneasthetic Drug',
    'Gentamicin & Hydrocortisone Ear Drops',
    'Gentamicin Ear Drops',
    'Gentamicin Eye drops',
    'Glibenclamide',
    'Gliclazide',
    'Glimepiride',
    'Glipizide',
    'Glucagon',
    'Glucosamine',
    'Gluten',
    'Gluten Free Foods',
    'Glycerol Suppository',
    'Glyceryl Trinitrate',
    'Glycopyrronium',
    'Gold',
    'Golimumab',
    'Goserelin (Zoladex)',
    'Grass',
    'Grass and tree pollen',
    'Guanfacine',
    'Hair Dyes',
    'Haloperidol',
    'Hayfever',
    'Heparin Injection',
    'Heparinoid Gel / Cream',
    'Hepatitis A Vaccine',
    'Hepatitis B Vaccine',
    'Hormone Replacement Therapy (HRT) Gel',
    'Hormone Replacement Therapy (HRT) Patch',
    'Hormone Replacement Therapy (HRT) Tablet',
    'House Dust Mite',
    'Household chemicals',
    'Humalog Kwikpen Insulin',
    'Humalog Mix 25 Insulin',
    'Humalog Mix 50 Insulin',
    'Human PapillomaVirus Vaccine',
    'Humulin I Insulin',
    'Humulin M3 Insulin',
    'Humulin S Insulin',
    'Hydralazine Hydrochloride',
    'Hydrochlorothiazide',
    'Hydrous Ointmant',
    'Hydroxychloroquine',
    'Hydroxyethycellulose Eye Drops',
    'Hydroxyzine Hydrochloride',
    'Hyoscine Butylbromide',
    'Hypromellose Eye Drops',
    'Hypurin Bovine Isophane Insulin',
    'Hypurin Bovine Lente Insulin',
    'Hypurin Bovine Neutral Insulin',
    'Hypurin Bovine Protamine Zinc Insulin',
    'Hypurin Insulin',
    'Hypurin Porcine 30/70 Mix Insulin',
    'Hypurin Porcine Isophane Insulin',
    'Hypurin Porcine Neutral Insulin',
    'Ibandronic Acid',
    'Ibuprofen',
    'Ibuprofen Gel',
    'Ifosfamide',
    'Imidapril Hydrochloride',
    'Imimpramine hydrochloride',
    'Imipramine',
    'Imiquimod Cream',
    'Indacaterol',
    'Indacaterol Inhaler',
    'Indapamide',
    'Indinavir',
    'Indoramin',
    'Infacol',
    'Infliximab',
    'Influenza Vaccine',
    'Inosine Pranobex',
    'Insect Bite',
    'Insect bites and stings',
    'Insulatard Insulin',
    'Insulin - Other',
    'Insulin Aspart',
    'Insulin Degludec',
    'Insulin Detemir',
    'Insulin Glulisine',
    'Insulin Lispro',
    'Insulin Pump',
    'Insuman Comb 15 Insulin',
    'Insuman Comb 25 Insulin',
    'Insuman Comb 50 Insulin',
    'Insuman Insulin',
    'Insuman Rapid Insulin',
    'Interferon Alfa',
    'Interferon Beta',
    'Interferon Gamma',
    'Intravenous Contrast',
    'Iodine',
    'Ipratropium Bromide',
    'Ipratropium Bromide Inhailor (Atrovent)',
    'Ipratropium Bromide Nasal Spray',
    'Irbesartan',
    'Isosorbide Dinitrate',
    'Isosorbide Mononitrate',
    'Isotretinoin (Roaccutane)',
    'Isotretinoin Gel',
    'Ispaghula Husk Granules',
    'Isradipine',
    'Itraconazole',
    'Ivabradine',
    'Ivermectin',
    'Japanese Encephalitis Vaccine',
    'Katya 30/75 Contraceptive Pill',
    'Ketoconazole Cream',
    'Ketoconazole Shampoo',
    'Ketoconazole Tablet',
    'Ketoprofen',
    'Ketoprofen gel',
    'Ketorolac',
    'Ketotifen',
    'Labetalol Hydrochloride',
    'Lacidipine',
    'Lacosamide',
    'Lactose',
    'Lactulose',
    'Lamivudine',
    'Lamotrigine',
    'Lanreotide',
    'Lansoprazole',
    'Lantus Insulin',
    'Latanoprost & Timolol Eye Drops',
    'Latanoprost Eye Drops',
    'Latex',
    'Leflunomide',
    'Lenalidomide',
    'Letrozole',
    'Leuprorelin',
    'Levamisole',
    'Levemir Insulin',
    'Levest Contraceptive Pill',
    'Levetiracetam',
    'Levocetirizine',
    'Levofloxacin Eye Drops',
    'Levofloxacin Tablet',
    'Levonorgestrel',
    'Levothyroxine',
    'Lidocaine',
    'Linaclotide',
    'Linagliptin',
    'Linezolid',
    'Liothyronine',
    'Liraglutide',
    'Liraglutide & insulin degludec',
    'Lisdexamfetamine Mesilate',
    'Lisinopril',
    'Lisinopril & Hydrochlorothiazide',
    'Lithium',
    'Lixisenatide',
    'Local Aneasthetic',
    'Lodoxamide Eye Drops',
    'Loestrin 20 Contraceptive Pill',
    'Loestrin 30 Contraceptive Pill',
    'Lofepramine',
    'Lofexidine Hydrochloride',
    'Logynon Contraceptive Pill',
    'Logynon ED Contraceptive Pill',
    'Lomitapide',
    'Lomustine',
    'Loperamide',
    'Loratadine',
    'Lorazepam',
    'Losartan',
    'Loteprednol (Lotemax) Eye Drops',
    'Lubiprostone',
    'Lutropin Alfa',
    'Lymecycline',
    'Macitentan',
    'Macrogol Laxative',
    'Magnesium Supplement',
    'Malathion',
    'Mannitol',
    'Maraviroc',
    'Marvelon Contraceptive Pill',
    'Measles Mumps & Rubella Vaccine',
    'Meat',
    'Mebendazole',
    'Mebeverine Hydrochloride',
    'Mefenamic Acid',
    'Mefloquine',
    'Melatonin',
    'Meloxicam',
    'Melphalan',
    'Memantine',
    'Menotrophin',
    'Mercaptopurine',
    'Mercilon Contraceptive Pill',
    'Mesalazine Enema',
    'Mesalazine Foam',
    'Mesalazine Granules',
    'Mesalazine Modified Release Tablets',
    'Mesalazine Suppository',
    'Mesalazine Tablets',
    'Mesterolonne',
    'Metanium Ointment',
    'Metformin',
    'Metformin Modified Release',
    'Methadone',
    'Methocarbamol',
    'Methotrexate',
    'Methylcellulose',
    'Methyldopa',
    'Methylnaltrexone Bromide',
    'Methylphenidate',
    'Methylprednisolone Tablets',
    'Metoclopramide',
    'Metolazone',
    'Metoprolol',
    'Metronidazole',
    'Mianserin',
    'Miconazole Capsule',
    'Miconazole Cream',
    'Miconazole Oromucosal Gel',
    'Miconazole Powder',
    'Miconazole Spray',
    'Microgynon 30 Contraceptive Pill',
    'Microgynon 30 ED Contraceptive Pill',
    'Migril',
    'Mildew',
    'Milk',
    'Millinette 20/75 Contraceptive Pill',
    'Millinette 30/75 Contraceptive Pill',
    'Minocycline',
    'Minoxidil',
    'Mirena Coil',
    'Mirtazapine',
    'Mitomycin',
    'Moclobemide',
    'Modafinil',
    'Moexipril Hydrochloride',
    'Mold',
    'Molluscs',
    'Mometasone Cream / Ointment',
    'Mometasone Inhaler (Asmanex)',
    'Mometasone Nasal Spray',
    'Montelukast',
    'Morphine Sulfate',
    'Mould',
    'Movicol',
    'Moxonidine',
    'Mucolytic',
    'Multivatamins',
    'Mupirocin',
    'Mustard',
    'Nadolol',
    'Nafarelin',
    'Naloxegol',
    'Nandrolone',
    'Naproxen',
    'Naratriptan',
    'Natalizumab',
    'Nateglinide',
    'Nebivolol',
    'Nedocromil Eye drops',
    'Nedocromil Inhaler',
    'Neomycin Sulfate Drops',
    'Neostigmine',
    'Neostigmine & Glycopyrronium Bromide',
    'Nevirapine',
    'Nicardipine',
    'Nickel',
    'Nicorandil',
    'Nicotinamide 4% gel',
    'Nicotine Replacement Therapy',
    'Nicotinic Acid',
    'Nifedipine',
    'Nimodipine',
    'Nintedanib',
    'Nitrazepam',
    'Nitrofurantoin',
    'Nivolumab',
    'Nizatidine',
    'Non-steroidal anti-inflammatory drugs (NSAIDs)',
    'Nonoxinol (Gygel)',
    'Norethisterone',
    'Norimin Contraceptive Pill',
    'Norinyl-1 Contraceptive Pill',
    'Nortriptyline',
    'NovoMix 30 Insulin',
    'NovoRapid Insulin',
    'Nuts',
    'Nystatin',
    'Oats',
    'Octreotide',
    'Ofloxacin',
    'Oilatum Cream',
    'Oilatum Emollient',
    'Oilatum Plus Bath',
    'Olanzapine',
    'Olive Oil Ear Drops',
    'Olmesartan',
    'Olmesartan Medoxomil',
    'Olodaterol',
    'Olodaterrol Inhaler (Striverdi Respimat)',
    'Olopatadine Eye Drops',
    'Olsalazine Sodium',
    'Omalizumab Injection',
    'Omega 3 Acid Ethyl Esterase',
    'Omeprazole',
    'Ondansetron',
    'Oral Prednisolone',
    'Orlistat',
    'Orphendarine Hydrochloride',
    'Oseltamivir',
    'Ovranette Contraceptive Pill',
    'Oxcarbazepine',
    'Oxybutynin',
    'Oxycodone',
    'Oxymetholone',
    'Oxytetracycline',
    'Paediatric Movicol',
    'Pamidronate Disodium',
    'Pancreatin',
    'Panobinostat',
    'Pantoprazole',
    'Paracetamol',
    'Paroxetine',
    'Pasireotide',
    'Peanut',
    'Peginterferon Alfa',
    'Peginterferon Beta',
    'Penicillamine',
    'Penicillin - Anaphylaxis',
    'Penicillin - Other',
    'Penicillin - Rash',
    'Peppermint Oil',
    'Perampanel',
    'Perfume',
    'Pergolide',
    'Perindopril',
    'Perindopril Arginine',
    'Perindopril Arginine & Indapamide',
    'Perindopril Erbumine',
    'Permethrin',
    'Pets',
    'Phenelzine',
    'Phenindione',
    'Phenobarbital',
    'Phenoxymethylpenicillin',
    'Phenytoin',
    'Phosphate Enema',
    'Phosphenytoin Sodium',
    'Pindolol',
    'Pioglitazone',
    'Pirfenidone',
    'Piroxicam gel',
    'Pizotifen',
    'Plaster',
    'Pollen',
    'Pomalidomide',
    'Potassium Permanganate',
    'Pramipexole',
    'Prasugrel',
    'Pravastatin',
    'Prawns',
    'Prazosin',
    'Prednisolone',
    'Pregabalin',
    'Primaquine',
    'Primidone',
    'Prochlorperazine',
    'Proctofoam HC Foam',
    'Procyclidine',
    'Progesterone Cream',
    'Progesterone Pessary',
    'Progesterone Tablet',
    'Proguanil Hydrochloride',
    'Promethazine Hydrochloride',
    'Promethazine Teoclate',
    'Propiverine',
    'Propranolol',
    'Propylthiouracil',
    'Prucalopride',
    'Pyrazinamide',
    'Pyridostigmine Bromide',
    'Pyrimethamine',
    'Qlaira Contraceptive Pill',
    'Quetiapine',
    'Quinagolide',
    'Quinapril',
    'Quinine',
    'Quinolone Antibiotics',
    'Rabeprazole',
    'Rabies Vaccine',
    'Raloxifene',
    'Raltegravir',
    'Ramipril',
    'Ranitidine',
    'Ranitidine Solution',
    'Ranolazine',
    'Rasagiline',
    'Reboxitine',
    'Red meat',
    'Repaglinide',
    'Retapamulin Ointment',
    'Retigabine',
    'Rice',
    'Rifampicin',
    'Rigevidon Contraceptive Pill',
    'Rilpivirine',
    'Risedronate Sodium',
    'Risperidone',
    'Ritonavir',
    'Rituximab',
    'Rivaroxaban',
    'Rivastigmine',
    'Rizatriptan',
    'Ropinirole',
    'Rosuvastatin',
    'Rotavirus Vaccine',
    'Rotigotine',
    'Rufinamide',
    'Salbutamol',
    'Salbutamol Inhaler',
    'Salbutamol Nebuliser',
    'Salicylic Acid',
    'Salmeterol',
    'Salmeterol Accuhaler',
    'Salmeterol Inhaler',
    'Saquinavir',
    'Saxagliptin',
    'Secukinumab',
    'Selegiline',
    'Semen',
    'Senna',
    'Sertraline',
    'Sesame Seeds',
    'Shelfish',
    'Shellfish',
    'Shingles Vaccine',
    'Simvastatin',
    'Siopel Cream',
    'Sirolimus',
    'Sitagliptin',
    'Sodium Alginate',
    'Sodium Aurothiomalate',
    'Sodium Chloride Nose Drops',
    'Sodium Citrate Enema',
    'Sodium Clodronate',
    'Sodium Cromoglicate Eye Drops',
    'Sodium Cromoglicate Inhaler',
    'Sodium Cromoglicate Nasal Spray',
    'Sodium Feredetate (Iron)',
    'Sodium Hyaluronate Eye Drops',
    'Sodium Phenylbutyrate',
    'Sodium Picosulfate',
    'Sodium Valproate',
    'Sofosbuvir & Ledipasvir',
    'Solifenacin (Vesicare)',
    'Somatropin',
    'Sotalol',
    'Soya',
    'Soya Bath Oil',
    'Spiolto Respimat',
    'Spironolactone',
    'Stavudine',
    'Streptomycin',
    'Strontium Ranelate',
    'Sucralfate',
    'Sudocrem',
    'Sulfa Drugs',
    'Sulfadiazine',
    'Sulfasalazine',
    'Sulfasalazine Suppository',
    'Sulfasalazine Suspension',
    'Sulfasalazine Tablet',
    'Sulfinpyrazone',
    'Sulfites',
    'Sulfonamides',
    'Sulphonamides',
    'Sulphur Dioxide (Sulphites)',
    'Sulpride',
    'Sumatriptan',
    'Sunya 20/75 Contraceptive Pill',
    'Synphase Contraceptive Pill',
    'Tacrolimus',
    'Tacrolimus Ointment',
    'Tamoxifen',
    'Tamsulosin',
    'Tazarotene',
    'Tegretol',
    'Teicoplanin',
    'Telmisartan',
    'Telvancin',
    'Temazepam',
    'Temozolomide',
    'Tenofovir Disoproxil',
    'Terazosin',
    'Terbutaline Inhaler',
    'Terbutaline Sulphate Turbohaler',
    'Terbutaline Tablet',
    'Teriflunomide',
    'Teriparatide',
    'Testosterone',
    'Testosterone Gel',
    'Tetrabenazine',
    'Tetracycline',
    'Thalidomide',
    'Theophylline',
    'Thiamine',
    'Thiotepa',
    'Tiagabine',
    'Ticagrelor',
    'Timolol',
    'Tinidazole',
    'Tinzaparin Injection',
    'Tiotropium',
    'Tiotropium (Spiriva)',
    'Tipranavir',
    'Tizanidine',
    'Tobramycin',
    'Tobramycin Eye drops',
    'Tocilizumab',
    'Tolbutamide',
    'Tolcapone',
    'Tolfenamic Acid',
    'Tolterodine',
    'Topiramate',
    'Torasemide',
    'Toujeo Insulin',
    'Tpiramate',
    'Tramadol',
    'Trandolapril',
    'Tranexamic Acid',
    'Trazadone hydrochloride',
    'Trazodone',
    'Treclin Gel',
    'Tree Nuts (Cashew / Walnut)',
    'Treosulfan',
    'Tresiba Insulin',
    'Tretinoin preparations',
    'Triadene Contraceptive Pill',
    'Triamterene',
    'Tricyclic Antidepressants',
    'Trihexyphenidyl',
    'Trimethoprim',
    'Trimipramine',
    'Tripotassium Dicitratobismuthate',
    'Triptafen',
    'Triptorelin',
    'TriRegol Contraceptive Pill',
    'Trospium',
    'Ultibro Breezhaler',
    'Umeclidinium',
    'Umeclidinium Inhailor',
    'Unguentum',
    'Ursodeoxycholic Acid',
    'Ustekinumab',
    'Valaciclovir',
    'Valproic Acid',
    'Valsartan',
    'Vancomycin',
    'Varenicline (Champix)',
    'Varicella Zoster Vaccine',
    'Vedolizumab',
    'Venlafaxine',
    'Verapamil',
    'Vigabatrin',
    'Vildagliptin',
    'Vitamin B Complex',
    'Vitamin C',
    'Vitamin D',
    'Vortioxetine',
    'Warfarin',
    'Weeds',
    'Wheat',
    'White Soft Paraffin',
    'Xipamide',
    'Xultophy Insulin',
    'Xylometazoline Hydrochloride Nasal Drops',
    'Yasmin Contraceptive Pill',
    'Yellow Fever Vaccine',
    'Yellow Soft Paraffin',
    'Zafirlukast',
    'Zanamivir',
    'ZeroAQS Emollient',
    'Zerobase Cream',
    'Zidovudine',
    'Zidovudine & Lamivudine',
    'Zinc Acetate',
    'Zinc Sulfate',
    'Zoely Contraceptive Pill',
    'Zoledronic Acid',
    'Zolmitriptan',
    'Zolpidem',
    'Zonisamide',
    'Zopiclone',
    'Zuclopenthixol (Clopixol)'
];
var AllergyService =               (function () {
    function AllergyService(http$$1, config) {
        this.http = http$$1;
        this.config = config;
        this.allergyTypes = [
            { key: 'Env', value: 'Environmental' },
            { key: 'env', value: 'Environmental' },
            { key: 'Food', value: 'Food' },
            { key: 'Med', value: 'Medication' }
        ];
    }
    AllergyService.prototype.convert = function (response) {
        var allergies$$1 = {
            allergyId: response.allergyId,
            allergyName: response.allergyName,
            allergyNotes: response.allergyNotes,
            allergyType: this.convertType(response.allergyType)
        };
        return allergies$$1;
    };
    AllergyService.prototype.convertType = function (type) {
        var typeConverted = this.allergyTypes.find(function (res) { return res.key === type; });
        return typeConverted ? typeConverted.value : '';
    };
    AllergyService.prototype.fetchAll = function (individualId) {
        var _this = this;
        return this.http.get(this.config.get.apiUrl + "/vhealth_members/" + individualId + "/allergies")
            .pipe(operators.map(function (response) { return response.allergies.map(function (allergy) { return _this.convert(allergy); }); }));
    };
    AllergyService.prototype.save = function (allergy, dependent) {
        var params = {
            individualId: dependent.id,
            allergyName: allergy.allergyName,
            allergyNotes: allergy.allergyNotes,
            allergyId: '',
            activity: ''
        };
        if (allergy.allergyId) {
            params.activity = 'UPDATE';
            params.allergyId = allergy.allergyId;
            return this.http.put(this.config.get.apiUrl + "/vhealth_allergies/" + params.allergyId, JSON.stringify(params))
                .pipe(operators.map(function (response) { return response.allergyId ? response : allergy; }));
        }
        else {
            params.activity = 'ADD';
            delete params.allergyId;
            return this.http.post(this.config.get.apiUrl + "/vhealth_members/" + params.individualId + "/allergies", JSON.stringify(params))
                .pipe(operators.map(function (response) { return response.allergyId ? response : allergy; }));
        }
    };
    AllergyService.prototype.remove = function (allergyId) {
        return this.http.delete(this.config.get.apiUrl + "/vhealth_allergies/" + allergyId);
    };
    AllergyService.prototype.types = function () {
        return this.http.post(this.config.get.apiUrl + "/allergies/types/fetch", null)
            .pipe(operators.map(function (response) { return response.allergies; }));
    };
    AllergyService.prototype.lookup = function (keyword) {
        return of.of(allergies.filter(function (res) { return res.toLowerCase().match(keyword.toLowerCase()); }));
    };
    return AllergyService;
}());
AllergyService.decorators = [
    { type: core.Injectable },
];
AllergyService.ctorParameters = function () { return [
    { type: http.HttpClient, },
    { type: ConfigService, },
]; };
var AuthStatus = {
    LOGGED_IN: 'loggedIn',
    LOGGED_OUT: 'loggedOut',
    INACTIVE: 'inactive',
    REFRESH_ERROR: 'refreshError',
};
var AuthService =               (function () {
    function AuthService(http$$1, config) {
        this.http = http$$1;
        this.config = config;
        this.userExpiry = moment.utc();
        this.status = new ReplaySubject.ReplaySubject(1);
        this.authStore = StoreFactory.load(StoreID.AUTH);
        this.authStore.user = 'auth';
    }
    Object.defineProperty(AuthService.prototype, "userToken", {
        set: function (userToken) {
            Session.INDIVIDUAL_ID = userToken.individualId;
            this.token = userToken;
            this.config.updateUser(userToken.userId);
            this.changeStatus(AuthStatus.LOGGED_IN);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.loadToken().pipe(operators.flatMap(function (token) {
            if (!token) {
                _this.changeStatus(AuthStatus.LOGGED_OUT);
                return of.of();
            }
            var isTokenExpired = moment.utc((token.expiry - 30) * 1000).isBefore(Date.now());
            var isUserExpired = _this.userExpiry.isBefore(Date.now());
            console.log("Token will expire on:", moment.utc((token.expiry - 30) * 1000).toDate());
            console.log("User will expire on:", _this.userExpiry.toDate());
            if (isUserExpired) {
                _this.changeStatus(AuthStatus.INACTIVE);
                return of.of();
            }
            else if (isTokenExpired) {
                return _this.http
                    .post("" + _this.config.get.authUrl, token.refreshToken)
                    .pipe(operators.map(function (token) {
                    if (token) {
                        _this.updateLoginToken(token);
                    }
                    else {
                        _this.changeStatus(AuthStatus.REFRESH_ERROR);
                    }
                    return token;
                }));
            }
            else {
                _this.extendUserExpiry();
                return of.of(token);
            }
        }));
    };
    AuthService.prototype.extendUserExpiry = function (minutes) {
        var _this = this;
        if (minutes === void 0) { minutes = 30; }
        if (this.token) {
            this.userExpiry = moment.utc().add(minutes, 'minutes');
            this.authStore.put(AuthService.USER_EXPIRY_KEY, this.userExpiry.format('x'));
            if (this.expiryTimer) {
                this.expiryTimer.unsubscribe();
            }
            this.expiryTimer = timer.timer(this.userExpiry.toDate().getTime() - Date.now())
                .subscribe(function () { return _this.changeStatus(AuthStatus.INACTIVE); });
        }
    };
    AuthService.prototype.changeStatus = function (status) {
        if (status !== AuthStatus.LOGGED_IN) {
            delete this.token;
            this.authStore.clear(AuthService.AUTH_TOKEN_KEY);
            this.authStore.clear(AuthService.USER_EXPIRY_KEY);
            Session.INDIVIDUAL_ID = null;
            Session.DEPENDENTS = [];
            Session.ACTIVE_DEPENDENT = null;
            this.config.updateUser(null);
        }
        if (this.currentStatus !== status) {
            this.status.next({ previous: this.currentStatus, next: status });
        }
        this.currentStatus = status;
    };
    AuthService.prototype.clearToken = function () {
        delete this.token;
        this.authStore.clear(AuthService.AUTH_TOKEN_KEY);
        this.authStore.clear(AuthService.USER_EXPIRY_KEY);
    };
    AuthService.prototype.updateLoginToken = function (userToken) {
        this.userToken = userToken;
        this.authStore.put(AuthService.AUTH_TOKEN_KEY, userToken);
        this.extendUserExpiry();
        return userToken;
    };
    AuthService.prototype.loadToken = function () {
        var _this = this;
        if (!this.storedAuth) {
            this.storedAuth = Promise.all([
                this.authStore.get(AuthService.AUTH_TOKEN_KEY),
                this.authStore.get(AuthService.USER_EXPIRY_KEY)
            ]).then(function (_a) {
                var _b = __read(_a, 2), userToken = _b[0], expiry = _b[1];
                if (userToken) {
                    _this.userExpiry = moment.utc(expiry, 'x');
                    _this.userToken = userToken;
                }
            });
        }
        return fromPromise.fromPromise(this.storedAuth.then(function () { return _this.token; }));
    };
    AuthService.prototype.initiateOutboundSSO = function () {
        return this.http.get("" + this.config.get.outboundSsoUrl, { headers: { 'Authorization': this.token.accessToken } });
    };
    AuthService.prototype.getConverted = function () {
        return this.token.converted;
    };
    return AuthService;
}());
AuthService.AUTH_TOKEN_KEY = 'auth_token';
AuthService.USER_EXPIRY_KEY = 'auth_expiry';
AuthService.decorators = [
    { type: core.Injectable },
];
AuthService.ctorParameters = function () { return [
    { type: http.HttpClient, },
    { type: ConfigService, },
]; };
var AuthTokenInterceptor =               (function () {
    function AuthTokenInterceptor(config, userService) {
        this.config = config;
        this.userService = userService;
    }
    AuthTokenInterceptor.prototype.checkUrlRequiresAuth = function (url) {
        if (url.startsWith(this.config.get.apiUrl)) {
            var iswhitelist = [
                this.config.get.inviteUrl,
                '/faqs',
                '/vhealth_faqs'
            ].find(function (whitelist) {
                var match = url.match(whitelist);
                return match && match.length > 0;
            });
            if (!iswhitelist) {
                return true;
            }
        }
        if (url.startsWith(this.config.get.inviteUrl)) {
            return true;
        }
        return false;
    };
    AuthTokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var authRequired = this.checkUrlRequiresAuth(request.url);
        if (!authRequired) {
            return next.handle(request);
        }
        return this.userService.isLoggedIn().pipe(operators.flatMap(function (token) {
            if (token) {
                request = request.clone({
                    setHeaders: {
                        'Authorization': token.accessToken,
                        'X-IBM-Client-Id': token.clientId,
                        'ID_Token': token.idToken,
                    }
                });
                return next.handle(request).pipe(operators.catchError(function (error) {
                    if (error instanceof http.HttpErrorResponse && error.status === 401) {
                        _this.userService.changeStatus(AuthStatus.INACTIVE);
                    }
                    return _throw._throw(error);
                }));
            }
            else {
                return _throw._throw(AuthStatus.LOGGED_OUT);
            }
        }));
    };
    return AuthTokenInterceptor;
}());
AuthTokenInterceptor.decorators = [
    { type: core.Injectable },
];
AuthTokenInterceptor.ctorParameters = function () { return [
    { type: ConfigService, },
    { type: AuthService, },
]; };
var conditions = [
    'A limp in a child',
    'Abdominal aortic aneurysm',
    'Abdominal aortic aneurysm screening',
    'Abortion',
    'Abscess',
    'Acanthosis nigricans',
    'Achalasia',
    'Acid and chemical burns',
    'Acne',
    'Acoustic neuroma (vestibular schwannoma)',
    'Acromegaly',
    'Actinic keratoses (solar keratoses)',
    'Actinomycosis',
    'Acupuncture',
    'Acute cholecystitis',
    'Acute kidney injury',
    'Acute lymphoblastic leukaemia',
    'Acute myeloid leukaemia',
    'Acute pancreatitis',
    'Acute respiratory distress syndrome',
    'Addison\'s disease',
    'Adenoids and adenoidectomy',
    'Age-related cataracts',
    'Agoraphobia',
    'Air or gas embolism',
    'Albinism',
    'Alcohol misuse',
    'Alcohol poisoning',
    'Alcohol-related liver disease',
    'Alexander technique',
    'Alkaptonuria',
    'Allergic rhinitis',
    'Allergies',
    'Altitude sickness',
    'Alzheimer\'s disease',
    'Amniocentesis',
    'Amputation',
    'Amyloidosis',
    'Anabolic steroid misuse',
    'Anaesthesia',
    'Anal cancer',
    'Anal fissure',
    'Anal fistula',
    'Anal pain (proctalgia)',
    'Anaphylaxis',
    'Androgen insensitivity syndrome',
    'Angelman syndrome',
    'Angina',
    'Angioedema',
    'Angiography',
    'Animal and human bites',
    'Ankylosing spondylitis',
    'Anorexia nervosa',
    'Antacids',
    'Antibiotics',
    'Anticoagulant medicines',
    'Antidepressants',
    'Antifungal medicines',
    'Antihistamines',
    'Antiphospholipid syndrome (APS)',
    'Antisocial personality disorder',
    'Anxiety disorders in children',
    'Aortic valve replacement',
    'Aphasia',
    'Appendicitis',
    'Arrhythmia',
    'Arterial thrombosis',
    'Arthritis',
    'Arthroscopy',
    'Asbestosis',
    'Aspergillosis',
    'Aspirin',
    'Asthma',
    'Astigmatism',
    'Ataxia',
    'Atherosclerosis (arteriosclerosis)',
    'Athlete\'s foot',
    'Atopic eczema',
    'Atrial fibrillation',
    'Attention deficit hyperactivity disorder (ADHD)',
    'Auditory processing disorder',
    'Autism spectrum disorder (ASD)',
    'Autosomal dominant polycystic kidney disease',
    'Autosomal recessive polycystic kidney disease',
    'Back pain',
    'Bacterial vaginosis',
    'Bad breath (halitosis)',
    'Baker\'s cyst',
    'Balanitis',
    'Barium enema',
    'Bartholin\'s cyst',
    'Bedbugs',
    'Bedwetting',
    'Behçet\'s disease',
    'Bell\'s palsy',
    'Benign brain tumour (non-cancerous)',
    'Benign prostate enlargement',
    'Beta-blockers',
    'Bile duct cancer (cholangiocarcinoma)',
    'Binge eating disorder',
    'Biological and biosimilar medicines',
    'Biopsy',
    'Bipolar disorder',
    'Bird flu',
    'Birthmarks',
    'Black eye',
    'Bladder cancer',
    'Bladder stones',
    'Bleeding from the bottom (rectal bleeding)',
    'Blepharitis',
    'Blindness and vision loss',
    'Blisters',
    'Blood clots',
    'Blood groups',
    'Blood in semen (haematospermia)',
    'Blood in urine',
    'Blood pressure test',
    'Blood tests',
    'Blood transfusion',
    'Blue skin or lips (cyanosis)',
    'Blushing',
    'Body dysmorphic disorder (BDD)',
    'Body odour',
    'Body piercing',
    'Boils and carbuncles',
    'Bone cancer',
    'Bone cyst',
    'Borderline personality disorder',
    'Bornholm disease',
    'Botulism',
    'Bowel cancer',
    'Bowel cancer screening',
    'Bowel incontinence',
    'Bowel polyps',
    'Bowen\'s disease',
    'Brain abscess',
    'Brain aneurysm',
    'Brain stem death',
    'Brain tumours',
    'Breast abscess',
    'Breast cancer in men',
    'Breast cancer in women',
    'Breast cancer screening',
    'Breast lumps',
    'Breast pain',
    'Breast reduction on the NHS',
    'Breath-holding spells in children',
    'Broken ankle',
    'Broken arm or wrist',
    'Broken collarbone',
    'Broken finger',
    'Broken leg',
    'Broken nose',
    'Broken or bruised ribs',
    'Broken or knocked-out tooth',
    'Broken toe',
    'Bronchiectasis',
    'Bronchiolitis',
    'Bronchitis',
    'Bronchodilators',
    'Brucellosis',
    'Brugada syndrome',
    'Bulimia',
    'Bullous pemphigoid',
    'Bunions',
    'Burns and scalds',
    'Bursitis',
    'Caesarean section',
    'Cancer',
    'Carbon monoxide poisoning',
    'Carcinoembryonic antigen (CEA) test',
    'Carcinoid syndrome and carcinoid tumours',
    'Cardiac catheterisation and coronary angiography',
    'Cardiomyopathy',
    'Cardiovascular disease',
    'Carotid endarterectomy',
    'Carpal tunnel syndrome',
    'Cartilage damage',
    'Cataract surgery',
    'Catarrh',
    'Cavernoma',
    'Cavernous sinus thrombosis',
    'Cellulitis',
    'Cerebral palsy',
    'Cervical cancer',
    'Cervical rib',
    'Cervical screening',
    'Cervical spondylosis',
    'Charcot-Marie - Tooth disease',
    'Charles Bonnet syndrome',
    'Chemotherapy',
    'Chest infection',
    'Chest pain',
    'Chiari malformation',
    'Chickenpox',
    'Chilblains',
    'Childhood cataracts',
    'Chiropractic',
    'Chlamydia',
    'Cholera',
    'Cholesteatoma',
    'Chorionic villus sampling',
    'Chronic fatigue syndrome (CFS/ME)',
    'Chronic kidney disease',
    'Chronic lymphocytic leukaemia',
    'Chronic myeloid leukaemia',
    'Chronic obstructive pulmonary disease (COPD)',
    'Chronic pancreatitis',
    'Chronic traumatic encephalopathy',
    'Circumcision in boys',
    'Circumcision in men',
    'Cirrhosis',
    'Claustrophobia',
    'Cleft lip and palate',
    'Clinical depression',
    'Clinical trials',
    'Clopidogrel',
    'Clostridium difficile',
    'Club foot',
    'Cluster headaches',
    'Coated or white tongue',
    'Coccydynia (tailbone pain)',
    'Coeliac disease',
    'Cognitive behavioural therapy (CBT)',
    'Cold sores',
    'Colic',
    'Colostomy',
    'Colour vision deficiency (colour blindness)',
    'Colposcopy',
    'Coma',
    'Common cold',
    'Compartment syndrome',
    'Complex regional pain syndrome',
    'Concussion',
    'Congenital heart disease',
    'Conjunctivitis',
    'Consent to treatment',
    'Constipation',
    'Contact dermatitis',
    'Cornea transplant',
    'Corns and calluses',
    'Coronary angioplasty and stent insertion',
    'Coronary artery bypass graft',
    'Coronary heart disease',
    'Corticobasal degeneration',
    'Costochondritis',
    'Cough',
    'Coughing up blood (blood in phlegm)',
    'Counselling',
    'Cradle cap',
    'Craniosynostosis',
    'Creutzfeldt-Jakob disease',
    'Crohn\'s disease',
    'Croup',
    'CT scan',
    'Cushing\'s syndrome',
    'Cuts and grazes',
    'Cyclical vomiting syndrome',
    'Cyclospora',
    'Cyclothymia',
    'Cystic fibrosis',
    'Cystitis',
    'Cystoscopy',
    'Cytomegalovirus (CMV)',
    'Dandruff',
    'Deafblindness',
    'Decongestants',
    'Deep vein thrombosis',
    'Dehydration',
    'Dementia with Lewy bodies',
    'Dengue',
    'Dental abscess',
    'Dentures (false teeth)',
    'Detached retina (retinal detachment)',
    'Developmental co-ordination disorder (dyspraxia) in children',
    'Developmental dysplasia of the hip',
    'DEXA (DXA) scan',
    'Diabetes',
    'Diabetes insipidus',
    'Diabetic eye screening',
    'Diabetic ketoacidosis',
    'Diabetic retinopathy',
    'Dialysis',
    'Diarrhoea',
    'DiGeorge syndrome (22q11 deletion)',
    'Diphtheria',
    'Discoid eczema',
    'Dislocated kneecap',
    'Dislocated shoulder',
    'Disorders of consciousness',
    'Disorders of sex development',
    'Dissociative disorders',
    'Diverticular disease and diverticulitis',
    'Dizziness',
    'Double vision',
    'Down\'s syndrome',
    'Dry eye syndrome',
    'Dry mouth',
    'Dupuytren\'s contracture',
    'Dysarthria (difficulty speaking)',
    'Dysentery',
    'Dyslexia',
    'Dysphagia (swallowing problems)',
    'Dyspraxia (developmental co-ordination disorder) in adults',
    'Dystonia',
    'E.coli infection',
    'Ear infections',
    'Earache',
    'Early menopause',
    'Early or delayed puberty',
    'Earwax build-up',
    'Eating disorders',
    'Ebola virus disease',
    'Echocardiogram',
    'Ectopic pregnancy',
    'Ectropion',
    'Edwards\' syndrome (trisomy 18)',
    'Ehlers-Danlos syndromes',
    'Ejaculation problems',
    'Elbow and arm pain',
    'Electrocardiogram (ECG)',
    'Electroencephalogram (EEG)',
    'Electrolyte test',
    'Embolism',
    'Emollients',
    'Empyema',
    'Encephalitis',
    'Endocarditis',
    'Endometriosis',
    'Endoscopy',
    'Enhanced recovery',
    'Epidermolysis bullosa',
    'Epididymitis',
    'Epidural',
    'Epiglottitis',
    'Epilepsy',
    'Erectile dysfunction (impotence)',
    'Erythema multiforme',
    'Erythema nodosum',
    'Erythromelalgia',
    'Euthanasia and assisted suicide',
    'Ewing sarcoma',
    'Excessive daytime sleepiness (hypersomnia)',
    'Excessive sweating (hyperhidrosis)',
    'Exophthalmos (bulging eyes)',
    'Eye cancer',
    'Eye injuries',
    'Eye tests for children',
    'Eyelid problems',
    'Fabricated or induced illness',
    'Fainting',
    'Falls',
    'Febrile seizures',
    'Female genital mutilation (FGM)',
    'Femoral hernia repair',
    'Fever in children',
    'Fibroids',
    'Fibromyalgia',
    'First aid',
    'Flat feet',
    'Flatulence',
    'Floaters and flashes in the eyes',
    'Flu',
    'Fluoride',
    'Foetal alcohol syndrome',
    'Food allergy',
    'Food colours and hyperactivity',
    'Food intolerance',
    'Food poisoning',
    'Foot drop',
    'Foot pain',
    'Frontotemporal dementia',
    'Frostbite',
    'Frozen shoulder',
    'Fungal nail infection',
    'Gallbladder cancer',
    'Gallbladder removal',
    'Gallstones',
    'Ganglion cyst',
    'Gangrene',
    'Gastrectomy',
    'Gastritis',
    'Gastroparesis',
    'Gastroscopy',
    'Gender dysphoria',
    'General anaesthesia',
    'Generalised anxiety disorder in adults',
    'Genetics',
    'Genital herpes',
    'Genital warts',
    'Gestational diabetes',
    'Giardiasis',
    'Gilbert\'s syndrome',
    'Glandular fever',
    'Glaucoma',
    'Glomerulonephritis',
    'Glue ear',
    'Glutaric aciduria type 1',
    'Goitre',
    'Gonorrhoea',
    'Gout',
    'Granuloma annulare',
    'Granulomatosis with polyangiitis (Wegener\'s granulomatosis)',
    'Group B strep',
    'Growing pains (recurrent limb pain in children)',
    'Guillain-Barré syndrome',
    'Gum disease',
    'Haemochromatosis',
    'Haemophilia',
    'Haemophilus influenzae type b (Hib)',
    'Haemorrhoids (piles)',
    'Hair dye reactions',
    'Hair loss',
    'Hairy cell leukaemia',
    'Hallucinations and hearing voices',
    'Hamstring injury',
    'Hand',
    'Hand pain',
    'Hand tendon repair',
    'Having an operation (surgery)',
    'Hay fever',
    'Head and neck cancer',
    'Head lice and nits',
    'Headaches',
    'Health anxiety',
    'Hearing loss',
    'Hearing tests',
    'Hearing tests for children',
    'Heart attack',
    'Heart block',
    'Heart failure',
    'Heart palpitations and ectopic beats',
    'Heart transplant',
    'Heart-lung transplant',
    'Heartburn and acid reflux',
    'Heat exhaustion and heatstroke',
    'Heat rash (prickly heat)',
    'Heavy periods',
    'Heel pain',
    'Help for suicidal thoughts',
    'Henoch-Schönlein purpura (HSP)',
    'Hepatitis',
    'Hepatitis A',
    'Hepatitis B',
    'Hepatitis C',
    'Herbal medicines',
    'Herceptin (trastuzumab)',
    'Hereditary haemorrhagic telangiectasia (HHT)',
    'Hereditary neuropathy with pressure palsies (HNPP)',
    'Hereditary spastic paraplegia',
    'Hernia',
    'Herpes simplex eye infections',
    'Herpetic whitlow (whitlow finger)',
    'Hiatus hernia',
    'Hiccups',
    'Hidradenitis suppurativa (HS)',
    'High blood pressure (hypertension)',
    'High cholesterol',
    'Hip fracture',
    'Hip pain in adults',
    'Hip pain in children (irritable hip)',
    'Hip replacement',
    'Hirschsprung\'s disease',
    'Hirsutism',
    'HIV and AIDS',
    'Hives',
    'Hoarding disorder',
    'Hodgkin lymphoma',
    'Home oxygen therapy',
    'Homeopathy',
    'Homocystinuria',
    'Hookworm infection',
    'Hormone replacement therapy (HRT)',
    'Huntington\'s disease',
    'Hydrocephalus',
    'Hydronephrosis',
    'Hyperacusis',
    'Hyperglycaemia (high blood sugar)',
    'Hyperparathyroidism',
    'Hypnotherapy',
    'Hypoparathyroidism',
    'Hypothermia',
    'Hypotonia',
    'Hysterectomy',
    'Hysteroscopy',
    'Ibuprofen',
    'Ichthyosis',
    'Idiopathic pulmonary fibrosis',
    'Ileostomy',
    'Impetigo',
    'Indigestion',
    'Infertility',
    'Inflammatory bowel disease',
    'Ingrown hairs',
    'Ingrown toenail',
    'Inguinal hernia repair',
    'Insect bites and stings',
    'Insomnia',
    'Intensive care',
    'Interstitial cystitis',
    'Intracranial hypertension',
    'Intrauterine insemination (IUI)',
    'Iron deficiency anaemia',
    'Irregular periods',
    'Irritable bowel syndrome (IBS)',
    'Isovaleric acidaemia',
    'Itchy anus',
    'Itchy skin',
    'IVF',
    'Japanese encephalitis',
    'Jaundice',
    'Jellyfish and other sea creature stings',
    'Jet lag',
    'Joint hypermobility syndrome',
    'Joint pain',
    'Kaposi\'s sarcoma',
    'Kawasaki disease',
    'Keratosis pilaris (chicken skin)',
    'Kidney cancer',
    'Kidney infection',
    'Kidney stones',
    'Kidney transplant',
    'Klinefelter syndrome',
    'Knee ligament surgery',
    'Knee pain',
    'Knee replacement',
    'Knock knees',
    'Kwashiorkor',
    'Kyphosis',
    'Labial fusion',
    'Labyrinthitis',
    'Lactate dehydrogenase (LDH) test',
    'Lactose intolerance',
    'Lambert-Eaton myasthenic syndrome',
    'Laparoscopy (keyhole surgery)',
    'Laryngeal (larynx) cancer',
    'Laryngitis',
    'Laxatives',
    'Lazy eye (amblyopia)',
    'Leg cramps',
    'Legionnaires\' disease',
    'Leptospirosis (Weil\'s disease)',
    'Leukoplakia',
    'Lichen planus',
    'Lichen sclerosus',
    'Lipoedema',
    'Lipoma',
    'Listeriosis',
    'Liver cancer',
    'Liver disease',
    'Liver transplant',
    'Local anaesthesia',
    'Long QT syndrome',
    'Long-sightedness',
    'Loss of libido (reduced sex drive)',
    'Lost or changed sense of smell',
    'Low blood pressure (hypotension)',
    'Low blood sugar (hypoglycaemia)',
    'Low sperm count',
    'Low white blood cell count',
    'Lumbar decompression surgery',
    'Lumbar puncture',
    'Lumps',
    'Lung cancer',
    'Lung transplant',
    'Lupus',
    'Lyme disease',
    'Lymphoedema',
    'Macular degeneration',
    'Macular hole',
    'Magnesium test',
    'Malaria',
    'Malignant brain tumour (brain cancer)',
    'Mallet finger',
    'Malnutrition',
    'Maple syrup urine disease',
    'Marfan syndrome',
    'Mastectomy',
    'Mastitis',
    'Mastocytosis',
    'Mastoiditis',
    'MCADD',
    'Measles',
    'Medically unexplained symptoms',
    'Medicines information',
    'Memory loss (amnesia)',
    'Meningitis',
    'Menopause',
    'Mesothelioma',
    'Metabolic syndrome',
    'Metallic taste',
    'Metatarsalgia',
    'Migraine',
    'Minor head injury / lump on head',
    'Miscarriage',
    'Mitral valve problems',
    'Mobile phone safety',
    'Molar pregnancy',
    'Moles',
    'Molluscum contagiosum',
    'Morton\'s neuroma',
    'Motion sickness',
    'Motor neurone disease',
    'Mouth cancer',
    'Mouth ulcers',
    'MRI scan',
    'MRSA',
    'Mucositis',
    'Multiple myeloma',
    'Multiple sclerosis',
    'Multiple system atrophy',
    'Mumps',
    'Munchausen\'s syndrome',
    'Muscular dystrophy',
    'Myasthenia gravis',
    'Mycobacterium chimaera infection',
    'Myelodysplastic syndrome (myelodysplasia)',
    'Myositis (polymyositis and dermatomyositis)',
    'Ménière\'s disease',
    'Nail patella syndrome',
    'Nail problems',
    'Narcolepsy',
    'Nasal and sinus cancer',
    'Nasal polyps',
    'Nasopharyngeal cancer',
    'Nausea and vomiting in adults',
    'Neck pain',
    'Necrotising fasciitis',
    'Neonatal herpes (herpes in a baby)',
    'Nephrotic syndrome in children',
    'Neuroblastoma',
    'Neuroendocrine tumours',
    'Neurofibromatosis type 1',
    'Neurofibromatosis type 2',
    'Neuromyelitis optica',
    'Newborn jaundice',
    'Newborn respiratory distress syndrome',
    'Night sweats',
    'Night terrors and nightmares',
    'Nipple discharge',
    'Non-alcoholic fatty liver disease (NAFLD)',
    'Non-allergic rhinitis',
    'Non-gonococcal urethritis',
    'Non-Hodgkin lymphoma',
    'Noonan syndrome',
    'Norovirus',
    'Nosebleed',
    'NSAIDs',
    'Pacemaker implantation',
    'Paget\'s disease of bone',
    'Paget\'s disease of the nipple',
    'Pancreas transplant',
    'Pancreatic cancer',
    'Panic disorder',
    'Paracetamol',
    'Paralysis',
    'Parkinson\'s disease',
    'Patau\'s syndrome',
    'Peak flow test',
    'Pelvic inflammatory disease',
    'Pelvic organ prolapse',
    'Pelvic pain',
    'Pemphigus vulgaris',
    'Penile cancer',
    'Perforated eardrum',
    'Pericarditis',
    'Period pain',
    'Periods',
    'Peripheral arterial disease (PAD)',
    'Peripheral neuropathy',
    'Peritonitis',
    'Persistent trophoblastic disease and choriocarcinoma',
    'Personality disorder',
    'PET scan',
    'Phaeochromocytoma',
    'Phenylketonuria',
    'Phlebitis (superficial thrombophlebitis)',
    'Phobias',
    'Phosphate test',
    'Photodynamic therapy (PDT)',
    'Physiotherapy',
    'Pilonidal sinus',
    'Pins and needles',
    'PIP breast implants',
    'Pityriasis rosea',
    'Pityriasis versicolor',
    'Plagiocephaly and brachycephaly (flat head syndrome)',
    'Plastic surgery',
    'Pleurisy',
    'Pneumococcal infections',
    'Pneumonia',
    'Poisoning',
    'Polio',
    'Polycystic ovary syndrome',
    'Polycythaemia',
    'Polyhydramnios (too much amniotic fluid)',
    'Polymorphic light eruption',
    'Polymyalgia rheumatica',
    'Pompholyx (dyshidrotic eczema)',
    'Post-herpetic neuralgia',
    'Post-mortem',
    'Post-polio syndrome',
    'Post-traumatic stress disorder (PTSD)',
    'Postmenopausal bleeding',
    'Postnatal depression',
    'Postpartum psychosis',
    'Postural tachycardia syndrome (PoTS)',
    'Potassium test',
    'Prader-Willi syndrome',
    'Pre-eclampsia',
    'Predictive genetic tests for cancer risk genes',
    'Premenstrual syndrome (PMS)',
    'Pressure ulcers (pressure sores)',
    'Priapism (painful erections)',
    'Primary biliary cholangitis (primary biliary cirrhosis)',
    'Probiotics',
    'Problems swallowing pills',
    'Progressive supranuclear palsy',
    'Prosopagnosia (face blindness)',
    'Prostate cancer',
    'Prostate problems',
    'Prostatitis',
    'Psoriasis',
    'Psoriatic arthritis',
    'Psychiatry',
    'Psychosis',
    'Psychotherapy',
    'Pubic lice',
    'Pudendal neuralgia',
    'Pulmonary embolism',
    'Pulmonary hypertension',
    'Pyoderma gangrenosum',
    'Q fever',
    'Rabies',
    'Radiotherapy',
    'Raynaud\'s',
    'Reactive arthritis',
    'Rectal examination',
    'Red blood cell count',
    'Red eye',
    'Reflux in babies',
    'Repetitive strain injury (RSI)',
    'Respiratory tract infections',
    'Restless legs syndrome',
    'Restricted growth (dwarfism)',
    'Retinal migraine',
    'Retinoblastoma (eye cancer in children)',
    'Rett syndrome',
    'Reye\'s syndrome',
    'Rhesus disease',
    'Rheumatic fever',
    'Rheumatoid arthritis',
    'Rickets and osteomalacia',
    'Ringworm',
    'Root canal treatment',
    'Rosacea',
    'Roseola',
    'Roundworm',
    'Rubella',
    'Salivary gland stones',
    'Salmonella infection',
    'Sarcoidosis',
    'SARS (severe acute respiratory syndrome)',
    'Scabies',
    'Scarlet fever',
    'Scars',
    'Schistosomiasis (bilharzia)',
    'Schizophrenia',
    'Sciatica',
    'Scleroderma',
    'Scoliosis',
    'Scurvy',
    'Seasonal affective disorder (SAD)',
    'Selective mutism',
    'Selective serotonin reuptake inhibitors (SSRIs)',
    'Self-harm',
    'Sepsis',
    'Septic arthritis',
    'Septic shock',
    'Severe head injury',
    'Sexually transmitted infections (STIs)',
    'Shin splints',
    'Shingles',
    'Short-sightedness (myopia)',
    'Shortness of breath',
    'Shoulder impingement',
    'Shoulder pain',
    'Sick building syndrome',
    'Sickle cell disease',
    'Sickness and diarrhoea',
    'Silicosis',
    'Sinusitis (sinus infection)',
    'Sjögren\'s syndrome',
    'Skin cancer (melanoma)',
    'Skin cancer (non-melanoma)',
    'Skin cyst',
    'Skin picking disorder',
    'Skin rashes in babies',
    'Skin rashes in children',
    'Skin tags',
    'Slapped cheek syndrome',
    'Sleep paralysis',
    'Sleepwalking',
    'Slipped disc',
    'Small bowel transplant',
    'Smelling things that aren\'t there (phantosmia)',
    'Smelly urine',
    'Snake bites',
    'Snoring',
    'Social anxiety (social phobia)',
    'Soft tissue sarcomas',
    'Soiling (child pooing their pants)',
    'Sore or dry lips',
    'Sore or white tongue',
    'Sore throat',
    'Spina bifida',
    'Spinal muscular atrophy',
    'Spirometry',
    'Spleen problems and spleen removal',
    'Spondylolisthesis',
    'Sports injuries',
    'Sprains and strains',
    'Squint',
    'Stammering',
    'Staphylococcal infections',
    'Statins',
    'Stem cell and bone marrow transplants',
    'Steroid inhalers',
    'Steroid injections',
    'Steroid nasal sprays',
    'Steroid tablets',
    'Steroids',
    'Stevens-Johnson syndrome',
    'Stillbirth',
    'Stomach ache',
    'Stomach cancer',
    'Stomach ulcer',
    'Stop smoking treatments',
    'Stopped or missed periods',
    'Stretch marks',
    'Stroke',
    'Stye',
    'Subarachnoid haemorrhage',
    'Subdural haematoma',
    'Sudden confusion (delirium)',
    'Sudden infant death syndrome (SIDS)',
    'Sunburn',
    'Supraventricular tachycardia (SVT)',
    'Swine flu (H1N1)',
    'Swollen glands',
    'Syphilis',
    'Tapeworms',
    'Tay-Sachs disease',
    'Teeth grinding (bruxism)',
    'Temporal arteritis',
    'Temporomandibular disorder (TMD)',
    'Tendonitis',
    'Tennis elbow',
    'TENS (transcutaneous electrical nerve stimulation)',
    'Tension-type headaches',
    'Testicle lumps and swellings',
    'Testicular cancer',
    'Tetanus',
    'Thalassaemia',
    'The male menopause',
    'Thirst',
    'Threadworms',
    'Thrombophilia',
    'Thrush in men and women',
    'Thyroid cancer',
    'Thyroiditis',
    'Tick-borne encephalitis',
    'Tics',
    'Tight foreskin (phimosis and paraphimosis)',
    'Tinnitus',
    'Tongue-tie',
    'Tonsillitis',
    'Tooth decay',
    'Toothache',
    'Topical corticosteroids',
    'Total iron-binding capacity (TIBC or transferrin) test',
    'Total protein test',
    'Tourette\'s syndrome',
    'Toxic shock syndrome',
    'Toxocariasis',
    'Toxoplasmosis',
    'Tracheostomy',
    'Transient ischaemic attack (TIA)',
    'Transurethral resection of the prostate (TURP)',
    'Travel vaccinations',
    'Tremor or shaking hands',
    'Trichomoniasis',
    'Trichotillomania (hair pulling disorder)',
    'Trigeminal neuralgia',
    'Trigger finger',
    'Trimethylaminuria (fish odour syndrome)',
    'Tuberculosis (TB)',
    'Tuberous sclerosis',
    'Turner syndrome',
    'Twitching eyes and muscles',
    'Type 1 diabetes',
    'Type 2 diabetes',
    'Typhoid fever',
    'Typhus',
    'Ulcerative colitis',
    'Ultrasound scan',
    'Umbilical hernia repair',
    'Underactive thyroid (hypothyroidism)',
    'Undescended testicles',
    'Unintentional weight loss',
    'Urinary catheter',
    'Urinary incontinence',
    'Urinary tract infections (UTIs)',
    'Urinary tract infections in children',
    'Urine albumin to creatinine ratio (ACR)',
    'Uveitis',
    'Vaginal cancer',
    'Vaginal discharge',
    'Vaginal dryness',
    'Vaginismus',
    'Vaginitis',
    'Varicose eczema',
    'Varicose veins',
    'Vascular dementia',
    'Vasculitis',
    'Venous leg ulcer',
    'Vertigo',
    'Vestibular neuronitis',
    'Vitamin B12 or folate deficiency anaemia',
    'Vitamins and minerals',
    'Vitiligo',
    'Vomiting blood (haematemesis)',
    'Vomiting in children and babies',
    'Von Willebrand disease',
    'Vulval cancer',
    'Vulvodynia (vulval pain)',
    'Warfarin',
    'Warts and verrucas',
    'Watering eyes',
    'Weight loss surgery',
    'West Nile virus',
    'Whiplash',
    'Whooping cough',
    'Wisdom tooth removal',
    'Wolff-Parkinson - White syndrome',
    'Womb (uterus) cancer',
    'Worms in humans',
    'X-ray',
    'Yellow fever',
    'Zika virus'
];
var ConditionStatus = {
    PAST: 'PT',
    CURRENT: 'CT',
    DT: 'DT',
    FR: 'FR',
    PR: 'PR',
    ST: 'ST',
    UST: 'UST',
    CT: 'CT',
    PT: 'PT',
    FAMILY: 'family-history',
};
var currentConditionStatus = ['DT', 'PR', 'ST', 'UST', 'CT'];
var pastConditionStatus = ['PT', 'FR'];
var ConditionService =               (function () {
    function ConditionService(http$$1, config, translate) {
        this.http = http$$1;
        this.config = config;
        this.translate = translate;
        this.translate.setDefaultLang('en');
    }
    ConditionService.prototype.fetchAll = function (individualId) {
        var _this = this;
        return this.http.get(this.config.get.apiUrl + "/vhealth_members/" + individualId + "/conditions")
            .pipe(operators.map(function (response) {
            return response.conditions.map(function (res) {
                var conditions$$1 = res;
                conditions$$1.status = _this.convertStatus(res.status);
                conditions$$1.statusDescription = _this.convertStatusDescription(res.status);
                return res;
            });
        }));
    };
    ConditionService.prototype.convertStatus = function (status) {
        if (currentConditionStatus.includes(status))
            return ConditionStatus.CURRENT;
        else if (pastConditionStatus.includes(status))
            return ConditionStatus.PAST;
        return null;
    };
    ConditionService.prototype.convertStatusDescription = function (status) {
        var translateStr = '';
        if (currentConditionStatus.includes(status))
            translateStr = 'component.record-type.condition.status.current';
        else if (pastConditionStatus.includes(status))
            translateStr = 'component.record-type.condition.status.past';
        else
            return null;
        return this.translate.instant(translateStr);
    };
    ConditionService.prototype.save = function (condition, dependent) {
        var params = {
            individualId: dependent.id,
            conditionName: condition.conditionName,
            conditionCode: condition.conditionCode,
            status: condition.status,
            statusDescription: condition.statusDescription,
            conditionId: '',
            activity: ''
        };
        if (condition.conditionId) {
            params.activity = 'UPDATE';
            params.conditionId = condition.conditionId;
            return this.http.put(this.config.get.apiUrl + "/vhealth_conditions/" + params.conditionId, JSON.stringify(params))
                .pipe(operators.map(function (response) { return response.conditionId ? response : condition; }));
        }
        else {
            params.activity = 'ADD';
            delete params.conditionId;
            return this.http.post(this.config.get.apiUrl + "/vhealth_members/" + params.individualId + "/conditions", JSON.stringify(params))
                .pipe(operators.map(function (response) { return response.conditionId ? response : condition; }));
        }
    };
    ConditionService.prototype.remove = function (conditionId) {
        return this.http.delete(this.config.get.apiUrl + "/vhealth_conditions/" + conditionId);
    };
    ConditionService.prototype.lookup = function (keyword) {
        return of.of(conditions.filter(function (res) { return res.toLowerCase().match(keyword.toLowerCase()); }));
    };
    ConditionService.prototype.search = function (keyword) {
        return this.http.get(this.config.get.apiUrl + "/v3/vhealth_conditions")
            .pipe(operators.map(function (response) { return response.conditions.filter(function (res) { return res.conditionName.toLowerCase().match(keyword.toLowerCase()); }); }));
    };
    return ConditionService;
}());
ConditionService.decorators = [
    { type: core.Injectable },
];
ConditionService.ctorParameters = function () { return [
    { type: http.HttpClient, },
    { type: ConfigService, },
    { type: core$1.TranslateService, },
]; };
var CommunicationType = {
    phone: 'Phone',
    sms: 'SMS',
    email: 'Email',
};
var ConsentType = {
    research: 'RESEARCH-VH',
    marketing: 'MARKETING-VH',
    tandc: 'TERM_CON-VH',
    data: 'DATASHARING_CON-VH',
    privacy: 'PRIVACY_POL-VH',
};
var ConsentService =               (function () {
    function ConsentService(http$$1, config) {
        this.http = http$$1;
        this.config = config;
    }
    ConsentService.prototype.getTermsAndConditions = function (dependentID) {
        var httpParams = new http.HttpParams();
        httpParams.set('key', ConsentType.tandc);
        httpParams.set('version', '1');
        return this.http.get(this.config.get.apiUrl + "/members/" + dependentID + "/communicationpreferences", { params: httpParams })
            .pipe(operators.map(function (response) { return response; }));
    };
    ConsentService.prototype.convertConsent = function (response) {
        var arr = response.map(function (config) {
            var comms = config.communicationReference.map(function (communication) { return communication.communicationType; });
            return {
                key: config.key,
                isSelected: comms.length > 0,
                phone: comms.indexOf(CommunicationType.phone) > -1,
                sms: comms.indexOf(CommunicationType.sms) > -1,
                email: comms.indexOf(CommunicationType.email) > -1,
            };
        });
        var marketingOptions = arr.find(function (option) { return option.key === ConsentType.marketing; });
        var researchOptions = arr.find(function (option) { return option.key === ConsentType.research; });
        return {
            marketing: {
                isSelected: marketingOptions && marketingOptions.isSelected ? marketingOptions.isSelected : false,
                phone: marketingOptions && marketingOptions.phone ? marketingOptions.phone : false,
                sms: marketingOptions && marketingOptions.sms ? marketingOptions.sms : false,
                email: marketingOptions && marketingOptions.email ? marketingOptions.email : false,
            },
            research: {
                isSelected: researchOptions && researchOptions.isSelected ? researchOptions.isSelected : false,
                sms: researchOptions && researchOptions.sms ? researchOptions.sms : false,
                email: researchOptions && researchOptions.email ? researchOptions.email : false,
                phone: researchOptions && researchOptions.phone ? researchOptions.phone : false,
            }
        };
    };
    ConsentService.prototype.mapConsentParams = function (consent) {
        return Object.entries(consent).map(function (item) {
            var config = item[1];
            var comms = [];
            if (config.isSelected) {
                Object.entries(config).map(function (commItem) {
                    if (CommunicationType[((commItem[0]))])
                        comms.push({ communicationType: CommunicationType[((commItem[0]))] });
                });
                return {
                    consentStatus: 'Y',
                    key: ConsentType[((item[0]))],
                    communicationReference: comms
                };
            }
            return null;
        });
    };
    ConsentService.prototype.retrieveConsent = function (dependentID) {
        return this.http.get(this.config.get.apiUrl + "/members/" + dependentID + "/communicationpreferences")
            .pipe(operators.map(function (response) { return response; }));
    };
    ConsentService.prototype.addConsent = function (params, dependentID) {
        return this.http.post(this.config.get.apiUrl + "/members/" + dependentID + "/communicationpreferences", JSON.stringify({ consents: params }))
            .pipe(operators.map(function (response) { return response; }));
    };
    ConsentService.prototype.getConsent = function (key) {
        var httpParams = new http.HttpParams();
        httpParams.set('key', key);
        httpParams.set('version', '1');
        return this.http.get(this.config.get.apiUrl + "/useragreement", { params: httpParams })
            .pipe(operators.map(function (response) { return response; }));
    };
    ConsentService.prototype.addCommsConsent = function (params, dependentID) {
        var consentArray = this.mapConsentParams(params).filter(function (res) { return res; });
        return this.http.post(this.config.get.apiUrl + "/members/" + dependentID + "/communicationpreferences", JSON.stringify({ consents: consentArray }))
            .pipe(operators.map(function (response) { return response; }));
    };
    ConsentService.prototype.getTermsAndConditionsConsent = function (dependentID) {
        var httpParams = new http.HttpParams();
        httpParams.set('key', ConsentType.tandc);
        httpParams.set('version', '1');
        return this.http.get(this.config.get.apiUrl + "/members/" + dependentID + "/communicationpreferences", { params: httpParams })
            .pipe(operators.map(function (response) {
            return response.consents.filter(function (consent) { return consent.key === ConsentType.tandc; });
        }), operators.map(function (response) {
            var hasConsent = response.find(function (res) { return res.consentStatus === 'Y'; });
            if (hasConsent)
                return true;
            return false;
        }));
    };
    ConsentService.prototype.getFilteredConsent = function (filter, dependentID) {
        return this.http.get(this.config.get.apiUrl + "/members/" + dependentID + "/communicationpreferences")
            .pipe(operators.map(function (response) {
            return response.consents.find(function (consent) { return consent.key === filter; });
        }));
    };
    ConsentService.prototype.getNotificationConsent = function (dependentID) {
        var _this = this;
        return this.http.get(this.config.get.apiUrl + "/members/" + dependentID + "/communicationpreferences")
            .pipe(operators.map(function (response) {
            return _this.convertConsent(response.consents.filter(function (consent) {
                if (consent.key === ConsentType.research || consent.key === ConsentType.marketing)
                    return consent;
            }));
        }));
    };
    return ConsentService;
}());
ConsentService.decorators = [
    { type: core.Injectable },
];
ConsentService.ctorParameters = function () { return [
    { type: http.HttpClient, },
    { type: ConfigService, },
]; };
var DocumentService =               (function () {
    function DocumentService(http$$1, config, dateUtil) {
        this.http = http$$1;
        this.config = config;
        this.dateUtil = dateUtil;
    }
    DocumentService.prototype.convert = function (document) {
        var response = {
            id: document && document.responseBody && document.responseBody[0].body ? document.responseBody[0].body.mediaId : '',
            title: document && document.responseBody && document.responseBody[0].body ? document.responseBody[0].body.documentTitle : '',
            notes: document && document.responseBody && document.responseBody[0].body ? document.responseBody[0].body.documentTitle : '',
            author: document && document.responseBody && document.responseBody[0].body ? document.responseBody[0].body.documentTitle : '',
            appointmentId: document && document.responseBody && document.responseBody[0].body ? document.responseBody[0].body.appointmentId : '',
            mimeType: document && document.responseBody && document.responseBody[0].body ? document.responseBody[0].body.mimeType : '',
            dependentId: document && document.responseBody && document.responseBody[0].body ? document.responseBody[0].body.individualId : '',
            created: new Date(),
            type: this.convertFileType(document && document.responseBody && document.responseBody[0].body ? document.responseBody[0].body.mimeType : '')
        };
        if (document && document.fileContent && document.fileContent[0] && document.fileContent[0].body) {
            var byteCharacters = window.atob((document.fileContent[0].body));
            var byteNumbers = new Array(byteCharacters.length);
            for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            response.file = DocumentService.convertFromByteArray(byteArray, document.responseBody[0].body.mimeType);
        }
        else {
            response.file = new Observable.Observable();
        }
        return response;
    };
    DocumentService.prototype.convertFileType = function (mimeType) {
        if (mimeType)
            mimeType = mimeType.toLowerCase();
        switch (mimeType) {
            case 'image/jpeg':
            case 'image/png':
            case 'jpg':
            case 'png':
                return FileType.IMAGE;
            case 'doc':
            case 'docx':
            case 'txt':
            case 'application/msword':
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                return FileType.DOCUMENT;
            case 'xls':
            case 'xlsx':
            case 'csv':
            case 'application/vnd.ms-excel':
            case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
            case 'text/csv':
                return FileType.SPREADSHEET;
            case 'application/pdf':
            case 'pdf':
                return FileType.PDF;
            default:
                return null;
        }
    };
    DocumentService.prototype.fetchDocuments = function (dependentId) {
        var _this = this;
        return this.http.get(this.config.get.apiUrl + "/vhealth_members/" + dependentId + "/documents")
            .pipe(operators.map(function (response) { return response.documents.map(function (document) { return _this.convert(document); }); }));
    };
    DocumentService.prototype.getDocument = function (documentId, dependentId) {
        var _this = this;
        return this.http.get(this.config.get.apiUrl + "/vhealth_members/" + dependentId + "/documents/" + documentId)
            .pipe(operators.map(function (response) { return _this.convert(response); }));
    };
    DocumentService.prototype.uploadDocument = function (file, info, dependent, appointmentId) {
        var _this = this;
        if (info === void 0) { info = {}; }
        if (!this.convertFileType(file.name.split('.').pop())) {
            return _throw._throw('Invalid mime type');
        }
        var formData = new FormData();
        var params = {
            notes: info.notes,
            appointmentId: appointmentId,
            documentTitle: info.title + '.' + file.name.split('.').pop().toLowerCase(),
            createdTime: this.dateUtil.formatAPIDate(new Date()),
            individualId: String(dependent.id),
            documentAuthor: dependent.firstName + ' ' + dependent.lastName,
            mimeType: file.name.split('.').pop().toLowerCase(),
            activity: 'ADD'
        };
        formData.append("requestBody", JSON.stringify(params));
        formData.append("fileContent", file);
        var httpOptions = {
            headers: new http.HttpHeaders({
                'enctype': 'multipart/form-data; boundary=----WebKitFormBoundaryuL67FWkv1CA'
            })
        };
        return (this.http.post(this.config.get.apiUrl + "/vhealth_documents/upload", formData, httpOptions))
            .pipe(operators.flatMap(function (_a) {
            var mediaId = _a.mediaId;
            return _this.getDocument(mediaId, dependent.id);
        }));
    };
    DocumentService.prototype.removeDocument = function (documentId, dependent) {
        return this.http.delete(this.config.get.apiUrl + "/vhealth_members/" + dependent.id + "/documents/" + documentId);
    };
    DocumentService.prototype.updateDocument = function (documentId, info) {
        var params = {
            mediaId: documentId,
            documentTitle: info.title,
            notes: info.notes,
            activity: 'UPDATE'
        };
        return this.http.post(this.config.get.mockUrl + "/documents/activity", JSON.stringify(params));
    };
    DocumentService.convertFromByteArray = function (array, mimeType) {
        var signedArray = new Int8Array(array);
        return of.of(new Blob([signedArray], { type: mimeType }));
    };
    DocumentService.convertToByteArray = function (blob) {
        var reader = new FileReader();
        return new Observable.Observable(function (observer) {
            reader.onerror = observer.error;
            reader.onload = function () {
                observer.next(Array.from(new Int8Array(reader.result)));
            };
            reader.readAsArrayBuffer(blob);
        });
    };
    return DocumentService;
}());
DocumentService.decorators = [
    { type: core.Injectable },
];
DocumentService.ctorParameters = function () { return [
    { type: http.HttpClient, },
    { type: ConfigService, },
    { type: DateUtil, },
]; };
var familyMemberConditions = [
    {
        "key": "AAA",
        "value": "Abdominal aortic aneurysm"
    },
    {
        "key": "AAAS",
        "value": "Abdominal aortic aneurysm screening"
    },
    {
        "key": "AATM",
        "value": "Adenoids and adenoidectomy"
    },
    {
        "key": "AB",
        "value": "Abortion"
    },
    {
        "key": "AC",
        "value": "Acanthosis nigricans"
    },
    {
        "key": "ACAN",
        "value": "Anal cancer"
    },
    {
        "key": "ACB",
        "value": "Acid and chemical burns"
    },
    {
        "key": "ACCY",
        "value": "Acute cholecystitis"
    },
    {
        "key": "ACH",
        "value": "Achalasia"
    },
    {
        "key": "ACK",
        "value": "Actinic keratoses (solar keratoses)"
    },
    {
        "key": "ACN",
        "value": "Acne"
    },
    {
        "key": "ACP",
        "value": "Acupuncture"
    },
    {
        "key": "ACR",
        "value": "Urine albumin to creatinine ratio (ACR)"
    },
    {
        "key": "ACRGLY",
        "value": "Acromegaly"
    },
    {
        "key": "ACT",
        "value": "Actinomycosis"
    },
    {
        "key": "AD",
        "value": "Addison's disease"
    },
    {
        "key": "ADHD",
        "value": "Attention deficit hyperactivity disorder (ADHD)"
    },
    {
        "key": "ADIC",
        "value": "Anxiety disorders in children"
    },
    {
        "key": "ADPKD",
        "value": "Autosomal dominant polycystic kidney disease"
    },
    {
        "key": "AFIST",
        "value": "Anal fistula"
    },
    {
        "key": "AGEM",
        "value": "Air or gas embolism"
    },
    {
        "key": "AGP",
        "value": "Agoraphobia"
    },
    {
        "key": "AGR",
        "value": "Age-related cataracts"
    },
    {
        "key": "AHB",
        "value": "Animal and human bites"
    },
    {
        "key": "AIS",
        "value": "Androgen insensitivity syndrome"
    },
    {
        "key": "AKI",
        "value": "Acute kidney injury"
    },
    {
        "key": "ALB",
        "value": "Albinism"
    },
    {
        "key": "ALC",
        "value": "Alcoholism"
    },
    {
        "key": "ALCHP",
        "value": "Alcohol poisoning"
    },
    {
        "key": "ALL",
        "value": "Acute lymphoblastic leukaemia"
    },
    {
        "key": "ALM",
        "value": "Alcohol misuse"
    },
    {
        "key": "ALMPCHLD",
        "value": "A limp in a child"
    },
    {
        "key": "ALP",
        "value": "Alkaptonuria"
    },
    {
        "key": "ALRG",
        "value": "Allergies"
    },
    {
        "key": "ALRGR",
        "value": "Allergic rhinitis"
    },
    {
        "key": "ALS",
        "value": "Altitude sickness"
    },
    {
        "key": "ALZD",
        "value": "Alzheimer's disease"
    },
    {
        "key": "AML",
        "value": "Acute myeloid leukaemia"
    },
    {
        "key": "AMO",
        "value": "Amniocentesis"
    },
    {
        "key": "AMP",
        "value": "Amputation"
    },
    {
        "key": "AMY",
        "value": "Amyloidosis"
    },
    {
        "key": "ANCM",
        "value": "Anticoagulant medicines"
    },
    {
        "key": "AND",
        "value": "Antidepressants"
    },
    {
        "key": "ANFIS",
        "value": "Anal fissure"
    },
    {
        "key": "ANFM",
        "value": "Antifungal medicines"
    },
    {
        "key": "ANG",
        "value": "Angina"
    },
    {
        "key": "ANGD",
        "value": "Angioedema"
    },
    {
        "key": "ANGG",
        "value": "Angiography"
    },
    {
        "key": "ANNE",
        "value": "Anorexia nervosa"
    },
    {
        "key": "ANPS",
        "value": "Antiphospholipid syndrome (APS)"
    },
    {
        "key": "ANPX",
        "value": "Anaphylaxis"
    },
    {
        "key": "ANS",
        "value": "Ankylosing spondylitis"
    },
    {
        "key": "ANST",
        "value": "Anaesthesia"
    },
    {
        "key": "ANTA",
        "value": "Antacids"
    },
    {
        "key": "ANTH",
        "value": "Antihistamines"
    },
    {
        "key": "ANTI",
        "value": "Antibiotics"
    },
    {
        "key": "ANV",
        "value": "Acoustic neuroma (vestibular schwannoma)"
    },
    {
        "key": "AP",
        "value": "Acute pancreatitis"
    },
    {
        "key": "APD",
        "value": "Auditory processing disorder"
    },
    {
        "key": "APHA",
        "value": "Aphasia"
    },
    {
        "key": "APN",
        "value": "Anal pain (proctalgia)"
    },
    {
        "key": "APP",
        "value": "Appendicitis"
    },
    {
        "key": "ARDS",
        "value": "Acute respiratory distress syndrome"
    },
    {
        "key": "ARLD",
        "value": "Alcohol-related liver disease"
    },
    {
        "key": "ARPKD",
        "value": "Autosomal recessive polycystic kidney disease"
    },
    {
        "key": "ARTH",
        "value": "Arthritis"
    },
    {
        "key": "ARTS",
        "value": "Arthroscopy"
    },
    {
        "key": "ARTTH",
        "value": "Arterial thrombosis"
    },
    {
        "key": "AS",
        "value": "Abscess"
    },
    {
        "key": "ASBE",
        "value": "Asbestosis"
    },
    {
        "key": "ASD",
        "value": "Autism spectrum disorder (ASD)"
    },
    {
        "key": "ASGLPE",
        "value": "Aspergillosis"
    },
    {
        "key": "ASM",
        "value": "Anabolic steroid misuse"
    },
    {
        "key": "ASPE",
        "value": "Aspirin"
    },
    {
        "key": "AST",
        "value": "Asthma"
    },
    {
        "key": "ASTGM",
        "value": "Astigmatism"
    },
    {
        "key": "ASY",
        "value": "Angelman syndrome"
    },
    {
        "key": "ATA",
        "value": "Ataxia"
    },
    {
        "key": "ATEC",
        "value": "Atopic eczema"
    },
    {
        "key": "ATF",
        "value": "Atrial fibrillation"
    },
    {
        "key": "ATHF",
        "value": "Athlete's foot"
    },
    {
        "key": "ATPDS",
        "value": "Antisocial personality disorder"
    },
    {
        "key": "ATRL",
        "value": "Atherosclerosis (arteriosclerosis)"
    },
    {
        "key": "AUT",
        "value": "Autism"
    },
    {
        "key": "AVR",
        "value": "Aortic valve replacement"
    },
    {
        "key": "AXT",
        "value": "Alexander technique"
    },
    {
        "key": "BABM",
        "value": "Biological and biosimilar medicines"
    },
    {
        "key": "BAC",
        "value": "Boils and carbuncles"
    },
    {
        "key": "BALAN",
        "value": "Balanitis"
    },
    {
        "key": "BANEU",
        "value": "Brain aneurysm"
    },
    {
        "key": "BANK",
        "value": "Broken ankle"
    },
    {
        "key": "BAOW",
        "value": "Broken arm or wrist"
    },
    {
        "key": "BAS",
        "value": "Brain abscess"
    },
    {
        "key": "BASC",
        "value": "Burns and scalds"
    },
    {
        "key": "BAVL",
        "value": "Blindness and vision loss"
    },
    {
        "key": "BB",
        "value": "Bad breath (halitosis)"
    },
    {
        "key": "BBLO",
        "value": "Beta-blockers"
    },
    {
        "key": "BBT",
        "value": "Benign brain tumour (non-cancerous)"
    },
    {
        "key": "BBUG",
        "value": "Bedbugs"
    },
    {
        "key": "BC",
        "value": "Breast cancer"
    },
    {
        "key": "BCAN",
        "value": "Bone cancer"
    },
    {
        "key": "BCAR",
        "value": "Bowel cancer"
    },
    {
        "key": "BCIM",
        "value": "Breast cancer in men"
    },
    {
        "key": "BCIW",
        "value": "Breast cancer in women"
    },
    {
        "key": "BCLOT",
        "value": "Blood clots"
    },
    {
        "key": "BCS",
        "value": "Bowel cancer screening"
    },
    {
        "key": "BCSR",
        "value": "Breast cancer screening"
    },
    {
        "key": "BCTS",
        "value": "Bronchiectasis"
    },
    {
        "key": "BCYS",
        "value": "Bone cyst"
    },
    {
        "key": "BCYST",
        "value": "Bartholin's cyst"
    },
    {
        "key": "BDC",
        "value": "Bile duct cancer (cholangiocarcinoma)"
    },
    {
        "key": "BDD",
        "value": "Body dysmorphic disorder (BDD)"
    },
    {
        "key": "BDRPDS",
        "value": "Borderline personality disorder"
    },
    {
        "key": "BE",
        "value": "Black eye"
    },
    {
        "key": "BED",
        "value": "Binge eating disorder"
    },
    {
        "key": "BEHD",
        "value": "Behçet's disease"
    },
    {
        "key": "BENE",
        "value": "Barium enema"
    },
    {
        "key": "BF",
        "value": "Bird flu"
    },
    {
        "key": "BFTB",
        "value": "Bleeding from the bottom (rectal bleeding)"
    },
    {
        "key": "BGRP",
        "value": "Blood groups"
    },
    {
        "key": "BHD",
        "value": "Bornholm disease"
    },
    {
        "key": "BHSC",
        "value": "Breath-holding spells in children"
    },
    {
        "key": "BIC",
        "value": "Bowel incontinence"
    },
    {
        "key": "BIS",
        "value": "Blood in semen (haematospermia)"
    },
    {
        "key": "BIU",
        "value": "Blood in urine"
    },
    {
        "key": "BKL",
        "value": "Broken leg"
    },
    {
        "key": "BKOT",
        "value": "Broken or knocked-out tooth"
    },
    {
        "key": "BKRCYST",
        "value": "Baker's cyst"
    },
    {
        "key": "BLDRCAN",
        "value": "Bladder cancer"
    },
    {
        "key": "BLEPH",
        "value": "Blepharitis"
    },
    {
        "key": "BLISS",
        "value": "Blisters"
    },
    {
        "key": "BLP",
        "value": "Bell's palsy"
    },
    {
        "key": "BLS",
        "value": "Blushing"
    },
    {
        "key": "BLSN",
        "value": "Bladder stones"
    },
    {
        "key": "BM",
        "value": "Birthmarks"
    },
    {
        "key": "BO",
        "value": "Body odour"
    },
    {
        "key": "BOBR",
        "value": "Broken or bruised ribs"
    },
    {
        "key": "BOSY",
        "value": "Biopsy"
    },
    {
        "key": "BP",
        "value": "Back pain"
    },
    {
        "key": "BPD",
        "value": "Bipolar disorder"
    },
    {
        "key": "BPE",
        "value": "Benign prostate enlargement"
    },
    {
        "key": "BPIE",
        "value": "Body piercing"
    },
    {
        "key": "BPT",
        "value": "Blood pressure test"
    },
    {
        "key": "BRAB",
        "value": "Breast abscess"
    },
    {
        "key": "BRC",
        "value": "Broken collarbone"
    },
    {
        "key": "BRCD",
        "value": "Bronchodilators"
    },
    {
        "key": "BRCL",
        "value": "Bronchiolitis"
    },
    {
        "key": "BRF",
        "value": "Broken finger"
    },
    {
        "key": "BRLP",
        "value": "Breast lumps"
    },
    {
        "key": "BRNO",
        "value": "Broken nose"
    },
    {
        "key": "BROC",
        "value": "Bronchitis"
    },
    {
        "key": "BROTN",
        "value": "Breast reduction on the NHS"
    },
    {
        "key": "BRP",
        "value": "Breast pain"
    },
    {
        "key": "BRUC",
        "value": "Brucellosis"
    },
    {
        "key": "BRUS",
        "value": "Brugada syndrome"
    },
    {
        "key": "BSD",
        "value": "Brain stem death"
    },
    {
        "key": "BSOL",
        "value": "Blue skin or lips (cyanosis)"
    },
    {
        "key": "BTLM",
        "value": "Botulism"
    },
    {
        "key": "BTOE",
        "value": "Broken toe"
    },
    {
        "key": "BTRF",
        "value": "Blood transfusion"
    },
    {
        "key": "BTST",
        "value": "Blood tests"
    },
    {
        "key": "BTUM",
        "value": "Brain tumours"
    },
    {
        "key": "BULI",
        "value": "Bulimia"
    },
    {
        "key": "BUNI",
        "value": "Bunions"
    },
    {
        "key": "BUPE",
        "value": "Bullous pemphigoid"
    },
    {
        "key": "BURSI",
        "value": "Bursitis"
    },
    {
        "key": "BV",
        "value": "Bacterial vaginosis"
    },
    {
        "key": "BWD",
        "value": "Bowen's disease"
    },
    {
        "key": "BWETT",
        "value": "Bedwetting"
    },
    {
        "key": "BWP",
        "value": "Bowel polyps"
    },
    {
        "key": "CAASI",
        "value": "Coronary angioplasty and stent insertion"
    },
    {
        "key": "CABG",
        "value": "Coronary artery bypass graft"
    },
    {
        "key": "CAC",
        "value": "Corns and calluses"
    },
    {
        "key": "CAD",
        "value": "Cartilage damage"
    },
    {
        "key": "CAES",
        "value": "Caesarean section"
    },
    {
        "key": "CAG",
        "value": "Cuts and grazes"
    },
    {
        "key": "CANCER",
        "value": "Cancer"
    },
    {
        "key": "CARM",
        "value": "Cardiomyopathy"
    },
    {
        "key": "CARV",
        "value": "Cardiovascular disease"
    },
    {
        "key": "CAS",
        "value": "Cataract surgery"
    },
    {
        "key": "CASTH",
        "value": "Cavernous sinus thrombosis"
    },
    {
        "key": "CATA",
        "value": "Catarrh"
    },
    {
        "key": "CAVE",
        "value": "Cavernoma"
    },
    {
        "key": "CAWT",
        "value": "Coated or white tongue"
    },
    {
        "key": "CC",
        "value": "Colorectal Cancer"
    },
    {
        "key": "CCACA",
        "value": "Cardiac catheterisation and coronary angiography"
    },
    {
        "key": "CCOLD",
        "value": "Common cold"
    },
    {
        "key": "CCSP",
        "value": "Cyclospora"
    },
    {
        "key": "CEA",
        "value": "Carcinoembryonic antigen (CEA) test"
    },
    {
        "key": "CELLU",
        "value": "Cellulitis"
    },
    {
        "key": "CERP",
        "value": "Cerebral palsy"
    },
    {
        "key": "CET",
        "value": "Carotid endarterectomy"
    },
    {
        "key": "CHBL",
        "value": "Chilblains"
    },
    {
        "key": "CHBSD",
        "value": "Charles Bonnet syndrome"
    },
    {
        "key": "CHD",
        "value": "Coronary heart disease"
    },
    {
        "key": "CHDCT",
        "value": "Childhood cataracts"
    },
    {
        "key": "CHEMO",
        "value": "Chemotherapy"
    },
    {
        "key": "CHFSY",
        "value": "Chronic fatigue syndrome (CFS/ME)"
    },
    {
        "key": "CHIF",
        "value": "Chest infection"
    },
    {
        "key": "CHKD",
        "value": "Chronic kidney disease"
    },
    {
        "key": "CHLLE",
        "value": "Chronic lymphocytic leukaemia"
    },
    {
        "key": "CHLMD",
        "value": "Chlamydia"
    },
    {
        "key": "CHMAL",
        "value": "Chiari malformation"
    },
    {
        "key": "CHMLE",
        "value": "Chronic myeloid leukaemia"
    },
    {
        "key": "CHMTD",
        "value": "Charcot-Marie-Tooth disease"
    },
    {
        "key": "CHOL",
        "value": "Cholera"
    },
    {
        "key": "CHOTT",
        "value": "Cholesteatoma"
    },
    {
        "key": "CHPAN",
        "value": "Chronic pancreatitis"
    },
    {
        "key": "CHPOX",
        "value": "Chickenpox"
    },
    {
        "key": "CHPR",
        "value": "Chiropractic"
    },
    {
        "key": "CHRNCOPD",
        "value": "Chronic obstructive pulmonary disease (COPD)"
    },
    {
        "key": "CHTEN",
        "value": "Chronic traumatic encephalopathy"
    },
    {
        "key": "CHVS",
        "value": "Chorionic villus sampling"
    },
    {
        "key": "CIB",
        "value": "Circumcision in boys"
    },
    {
        "key": "CIM",
        "value": "Circumcision in men"
    },
    {
        "key": "CIRH",
        "value": "Cirrhosis"
    },
    {
        "key": "CJVT",
        "value": "Conjunctivitis"
    },
    {
        "key": "CLAP",
        "value": "Cleft lip and palate"
    },
    {
        "key": "CLDEP",
        "value": "Clinical depression"
    },
    {
        "key": "CLOPI",
        "value": "Clopidogrel"
    },
    {
        "key": "CLOSD",
        "value": "Clostridium difficile"
    },
    {
        "key": "CLSTP",
        "value": "Claustrophobia"
    },
    {
        "key": "CLTHY",
        "value": "Cyclothymia"
    },
    {
        "key": "CLTR",
        "value": "Clinical trials"
    },
    {
        "key": "CLUBF",
        "value": "Club foot"
    },
    {
        "key": "CLUTH",
        "value": "Cluster headaches"
    },
    {
        "key": "CMP",
        "value": "Carbon monoxide poisoning"
    },
    {
        "key": "CMV",
        "value": "Cytomegalovirus (CMV)"
    },
    {
        "key": "CNGHDS",
        "value": "Congenital heart disease"
    },
    {
        "key": "CNT",
        "value": "Cognitive behavioural therapy (CBT)"
    },
    {
        "key": "COCCY",
        "value": "Coccydynia (tailbone pain)"
    },
    {
        "key": "COCHD",
        "value": "Costochondritis"
    },
    {
        "key": "COEL",
        "value": "Coeliac disease"
    },
    {
        "key": "COLDS",
        "value": "Cold sores"
    },
    {
        "key": "COLIC",
        "value": "Colic"
    },
    {
        "key": "COLOS",
        "value": "Colostomy"
    },
    {
        "key": "COLP",
        "value": "Colposcopy"
    },
    {
        "key": "COMA",
        "value": "Coma"
    },
    {
        "key": "CONC",
        "value": "Concussion"
    },
    {
        "key": "CONDER",
        "value": "Contact dermatitis"
    },
    {
        "key": "CONSTP",
        "value": "Constipation"
    },
    {
        "key": "COPD",
        "value": "COPD"
    },
    {
        "key": "CORDEG",
        "value": "Corticobasal degeneration"
    },
    {
        "key": "CORTRA",
        "value": "Cornea transplant"
    },
    {
        "key": "COTT",
        "value": "Consent to treatment"
    },
    {
        "key": "COUGH",
        "value": "Cough"
    },
    {
        "key": "COUNS",
        "value": "Counselling"
    },
    {
        "key": "CP",
        "value": "Chest pain"
    },
    {
        "key": "CRANI",
        "value": "Craniosynostosis"
    },
    {
        "key": "CRCAP",
        "value": "Cradle cap"
    },
    {
        "key": "CRJD",
        "value": "Creutzfeldt-Jakob disease"
    },
    {
        "key": "CROD",
        "value": "Crohn's disease"
    },
    {
        "key": "CROP",
        "value": "Croup"
    },
    {
        "key": "CRPS",
        "value": "Complex regional pain syndrome"
    },
    {
        "key": "CSACT",
        "value": "Carcinoid syndrome and carcinoid tumours"
    },
    {
        "key": "CSYN",
        "value": "Cushing's syndrome"
    },
    {
        "key": "CSYND",
        "value": "Compartment syndrome"
    },
    {
        "key": "CTS",
        "value": "Carpal tunnel syndrome"
    },
    {
        "key": "CTSC",
        "value": "CT scan"
    },
    {
        "key": "CUPB",
        "value": "Coughing up blood (blood in phlegm)"
    },
    {
        "key": "CVCAN",
        "value": "Cervical cancer"
    },
    {
        "key": "CVD",
        "value": "Colour vision deficiency (colour blindness)"
    },
    {
        "key": "CVR",
        "value": "Cervical rib"
    },
    {
        "key": "CVS",
        "value": "Cyclical vomiting syndrome"
    },
    {
        "key": "CVSC",
        "value": "Cervical screening"
    },
    {
        "key": "CVSP",
        "value": "Cervical spondylosis"
    },
    {
        "key": "CYFIB",
        "value": "Cystic fibrosis"
    },
    {
        "key": "CYSTI",
        "value": "Cystitis"
    },
    {
        "key": "CYSTO",
        "value": "Cystoscopy"
    },
    {
        "key": "DA",
        "value": "Drug Abuse"
    },
    {
        "key": "DABS",
        "value": "Dental abscess"
    },
    {
        "key": "DANRF",
        "value": "Dandruff"
    },
    {
        "key": "DCGST",
        "value": "Decongestants"
    },
    {
        "key": "DCORD",
        "value": "Developmental co-ordination disorder (dyspraxia) in children"
    },
    {
        "key": "DDOTH",
        "value": "Developmental dysplasia of the hip"
    },
    {
        "key": "DEFBLI",
        "value": "Deafblindness"
    },
    {
        "key": "DEHYD",
        "value": "Dehydration"
    },
    {
        "key": "DENGU",
        "value": "Dengue"
    },
    {
        "key": "DENT",
        "value": "Dentures (false teeth)"
    },
    {
        "key": "DEPR",
        "value": "Depression"
    },
    {
        "key": "DERET",
        "value": "Detached retina (retinal detachment)"
    },
    {
        "key": "DESYN",
        "value": "Dry eye syndrome"
    },
    {
        "key": "DGSYN",
        "value": "DiGeorge syndrome (22q11 deletion)"
    },
    {
        "key": "DIAB",
        "value": "Diabetes"
    },
    {
        "key": "DIABIN",
        "value": "Diabetes insipidus"
    },
    {
        "key": "DIAESC",
        "value": "Diabetic eye screening"
    },
    {
        "key": "DIAKET",
        "value": "Diabetic ketoacidosis"
    },
    {
        "key": "DIAL",
        "value": "Dialysis"
    },
    {
        "key": "DIARR",
        "value": "Diarrhoea"
    },
    {
        "key": "DIDAD",
        "value": "Diverticular disease and diverticulitis"
    },
    {
        "key": "DILSH",
        "value": "Dislocated shoulder"
    },
    {
        "key": "DIPHT",
        "value": "Diphtheria"
    },
    {
        "key": "DIRETI",
        "value": "Diabetic retinopathy"
    },
    {
        "key": "DISECZ",
        "value": "Discoid eczema"
    },
    {
        "key": "DISLKN",
        "value": "Dislocated kneecap"
    },
    {
        "key": "DIZZ",
        "value": "Dizziness"
    },
    {
        "key": "DOCON",
        "value": "Disorders of consciousness"
    },
    {
        "key": "DOSD",
        "value": "Disorders of sex development"
    },
    {
        "key": "DOV",
        "value": "Double vision"
    },
    {
        "key": "DRYM",
        "value": "Dry mouth"
    },
    {
        "key": "DSSD",
        "value": "Dissociative disorders"
    },
    {
        "key": "DSSYN",
        "value": "Down's syndrome"
    },
    {
        "key": "DUPC",
        "value": "Dupuytren's contracture"
    },
    {
        "key": "DVTH",
        "value": "Deep vein thrombosis"
    },
    {
        "key": "DWLB",
        "value": "Dementia with Lewy bodies"
    },
    {
        "key": "DXA",
        "value": "DEXA (DXA) scan"
    },
    {
        "key": "DYSAR",
        "value": "Dysarthria (difficulty speaking)"
    },
    {
        "key": "DYSEN",
        "value": "Dysentery"
    },
    {
        "key": "DYSLE",
        "value": "Dyslexia"
    },
    {
        "key": "DYSPH",
        "value": "Dysphagia (swallowing problems)"
    },
    {
        "key": "DYSPR",
        "value": "Dyspraxia (developmental co-ordination disorder) in adults"
    },
    {
        "key": "DYST",
        "value": "Dystonia"
    },
    {
        "key": "EARACH",
        "value": "Earache"
    },
    {
        "key": "EARBUP",
        "value": "Earwax build-up"
    },
    {
        "key": "EARI",
        "value": "Ear infections"
    },
    {
        "key": "EATDIS",
        "value": "Eating disorders"
    },
    {
        "key": "EBOLA",
        "value": "Ebola virus disease"
    },
    {
        "key": "ECG",
        "value": "Electrocardiogram (ECG)"
    },
    {
        "key": "ECHOCD",
        "value": "Echocardiogram"
    },
    {
        "key": "ECINF",
        "value": "E. coli infection"
    },
    {
        "key": "ECT",
        "value": "Electrolyte test"
    },
    {
        "key": "ECTPR",
        "value": "Ectopic pregnancy"
    },
    {
        "key": "ECTRO",
        "value": "Ectropion"
    },
    {
        "key": "EDSYN",
        "value": "Edwards' syndrome (trisomy 18)"
    },
    {
        "key": "EEG",
        "value": "Electroencephalogram (EEG)"
    },
    {
        "key": "EHDANS",
        "value": "Ehlers-Danlos syndromes"
    },
    {
        "key": "EJPROB",
        "value": "Ejaculation problems"
    },
    {
        "key": "ELAP",
        "value": "Elbow and arm pain"
    },
    {
        "key": "EMBO",
        "value": "Embolism"
    },
    {
        "key": "EMENOP",
        "value": "Early menopause"
    },
    {
        "key": "EMOL",
        "value": "Emollients"
    },
    {
        "key": "EMPY",
        "value": "Empyema"
    },
    {
        "key": "ENCE",
        "value": "Encephalitis"
    },
    {
        "key": "ENDOC",
        "value": "Endocarditis"
    },
    {
        "key": "ENDOME",
        "value": "Endometriosis"
    },
    {
        "key": "ENDOS",
        "value": "Endoscopy"
    },
    {
        "key": "ENREC",
        "value": "Enhanced recovery"
    },
    {
        "key": "EOCAN",
        "value": "Endometrial/Ovarian Cancer"
    },
    {
        "key": "EODPUB",
        "value": "Early or delayed puberty"
    },
    {
        "key": "EPID",
        "value": "Epidural"
    },
    {
        "key": "EPIDBUL",
        "value": "Epidermolysis bullosa"
    },
    {
        "key": "EPIDY",
        "value": "Epididymitis"
    },
    {
        "key": "EPIGLO",
        "value": "Epiglottitis"
    },
    {
        "key": "EPILEP",
        "value": "Epilepsy"
    },
    {
        "key": "ERDYSF",
        "value": "Erectile dysfunction (impotence)"
    },
    {
        "key": "ERYMU",
        "value": "Erythema multiforme"
    },
    {
        "key": "ERYNOD",
        "value": "Erythema nodosum"
    },
    {
        "key": "ERYTH",
        "value": "Erythromelalgia"
    },
    {
        "key": "ETC",
        "value": "Eye tests for children"
    },
    {
        "key": "EUTAAS",
        "value": "Euthanasia and assisted suicide"
    },
    {
        "key": "EWSAR",
        "value": "Ewing sarcoma"
    },
    {
        "key": "EXDSL",
        "value": "Excessive daytime sleepiness (hypersomnia)"
    },
    {
        "key": "EXOP",
        "value": "Exophthalmos (bulging eyes)"
    },
    {
        "key": "EXSWE",
        "value": "Excessive sweating (hyperhidrosis)"
    },
    {
        "key": "EYECAN",
        "value": "Eye cancer"
    },
    {
        "key": "EYEI",
        "value": "Eye injuries"
    },
    {
        "key": "EYPRO",
        "value": "Eyelid problems"
    },
    {
        "key": "FABOII",
        "value": "Fabricated or induced illness"
    },
    {
        "key": "FAFE",
        "value": "Floaters and flashes in the eyes"
    },
    {
        "key": "FAINT",
        "value": "Fainting"
    },
    {
        "key": "FALLS",
        "value": "Falls"
    },
    {
        "key": "FCAHY",
        "value": "Food colours and hyperactivity"
    },
    {
        "key": "FDRP",
        "value": "Foot drop"
    },
    {
        "key": "FEBRSE",
        "value": "Febrile seizures"
    },
    {
        "key": "FGM",
        "value": "Female genital mutilation (FGM)"
    },
    {
        "key": "FHR",
        "value": "Femoral hernia repair"
    },
    {
        "key": "FIBRO",
        "value": "Fibroids"
    },
    {
        "key": "FIBROM",
        "value": "Fibromyalgia"
    },
    {
        "key": "FIRSTAID",
        "value": "First aid"
    },
    {
        "key": "FLATF",
        "value": "Flat feet"
    },
    {
        "key": "FLATU",
        "value": "Flatulence"
    },
    {
        "key": "FLU",
        "value": "Flu"
    },
    {
        "key": "FLUOR",
        "value": "Fluoride"
    },
    {
        "key": "FNI",
        "value": "Fungal nail infection"
    },
    {
        "key": "FOALSY",
        "value": "Foetal alcohol syndrome"
    },
    {
        "key": "FOCH",
        "value": "Fever in children"
    },
    {
        "key": "FOODALL",
        "value": "Food allergy"
    },
    {
        "key": "FOODI",
        "value": "Food intolerance"
    },
    {
        "key": "FOODP",
        "value": "Food poisoning"
    },
    {
        "key": "FPAIN",
        "value": "Foot pain"
    },
    {
        "key": "FROSH",
        "value": "Frozen shoulder"
    },
    {
        "key": "FROST",
        "value": "Frostbite"
    },
    {
        "key": "FTD",
        "value": "Frontotemporal dementia"
    },
    {
        "key": "GADA",
        "value": "Generalised anxiety disorder in adults"
    },
    {
        "key": "GALCAN",
        "value": "Gallbladder cancer"
    },
    {
        "key": "GALRE",
        "value": "Gallbladder removal"
    },
    {
        "key": "GALSTN",
        "value": "Gallstones"
    },
    {
        "key": "GANGCY",
        "value": "Ganglion cyst"
    },
    {
        "key": "GANGR",
        "value": "Gangrene"
    },
    {
        "key": "GASTRE",
        "value": "Gastrectomy"
    },
    {
        "key": "GASTRI",
        "value": "Gastritis"
    },
    {
        "key": "GASTRO",
        "value": "Gastroparesis"
    },
    {
        "key": "GASTSC",
        "value": "Gastroscopy"
    },
    {
        "key": "GBS",
        "value": "Guillain-Barré syndrome"
    },
    {
        "key": "GBSTR",
        "value": "Group B strep"
    },
    {
        "key": "GENANA",
        "value": "General anaesthesia"
    },
    {
        "key": "GENDYS",
        "value": "Gender dysphoria"
    },
    {
        "key": "GENET",
        "value": "Genetics"
    },
    {
        "key": "GENIH",
        "value": "Genital herpes"
    },
    {
        "key": "GENIW",
        "value": "Genital warts"
    },
    {
        "key": "GESTD",
        "value": "Gestational diabetes"
    },
    {
        "key": "GIAD",
        "value": "Giardiasis"
    },
    {
        "key": "GILBS",
        "value": "Gilbert's syndrome"
    },
    {
        "key": "GLANF",
        "value": "Glandular fever"
    },
    {
        "key": "GLAUC",
        "value": "Glaucoma"
    },
    {
        "key": "GLOMP",
        "value": "Glomerulonephritis"
    },
    {
        "key": "GLUA",
        "value": "Glutaric aciduria type 1"
    },
    {
        "key": "GLUE",
        "value": "Glue ear"
    },
    {
        "key": "GOITRE",
        "value": "Goitre"
    },
    {
        "key": "GONOR",
        "value": "Gonorrhoea"
    },
    {
        "key": "GOUT",
        "value": "Gout"
    },
    {
        "key": "GPAEB",
        "value": "Heart palpitations and ectopic beats"
    },
    {
        "key": "GRANA",
        "value": "Granuloma annulare"
    },
    {
        "key": "GROWP",
        "value": "Growing pains (recurrent limb pain in children)"
    },
    {
        "key": "GUMD",
        "value": "Gum disease"
    },
    {
        "key": "GWP",
        "value": "Granulomatosis with polyangiitis (Wegener's granulomatosis)"
    },
    {
        "key": "HAAR",
        "value": "Heartburn and acid reflux"
    },
    {
        "key": "HAB50",
        "value": "Heart Attack Before Age 50 Yrs"
    },
    {
        "key": "HAEMOPH",
        "value": "Haemophilia"
    },
    {
        "key": "HAHV",
        "value": "Hallucinations and hearing voices"
    },
    {
        "key": "HAIRL",
        "value": "Hair loss"
    },
    {
        "key": "HAMCH",
        "value": "Haemochromatosis"
    },
    {
        "key": "HAMST",
        "value": "Hamstring injury"
    },
    {
        "key": "HANC",
        "value": "Head and neck cancer"
    },
    {
        "key": "HANDP",
        "value": "Hand"
    },
    {
        "key": "HANDPN",
        "value": "Hand pain"
    },
    {
        "key": "HAYF",
        "value": "Hay fever"
    },
    {
        "key": "HBLOCK",
        "value": "Heart block"
    },
    {
        "key": "HBP",
        "value": "High blood pressure (hypertension)"
    },
    {
        "key": "HBS",
        "value": "Hyperglycaemia (high blood sugar)"
    },
    {
        "key": "HCHOL",
        "value": "High cholesterol"
    },
    {
        "key": "HCLE",
        "value": "Hairy cell leukaemia"
    },
    {
        "key": "HDR",
        "value": "Hair dye reactions"
    },
    {
        "key": "HEAANX",
        "value": "Health anxiety"
    },
    {
        "key": "HEADA",
        "value": "Headaches"
    },
    {
        "key": "HEAH",
        "value": "Heat exhaustion and heatstroke"
    },
    {
        "key": "HEALP",
        "value": "Heel pain"
    },
    {
        "key": "HEARL",
        "value": "Hearing loss"
    },
    {
        "key": "HEART",
        "value": "Hearing tests"
    },
    {
        "key": "HEARTA",
        "value": "Heart attack"
    },
    {
        "key": "HEP",
        "value": "Hepatitis"
    },
    {
        "key": "HEP A",
        "value": "Hepatitis A"
    },
    {
        "key": "HEP B",
        "value": "Hepatitis B"
    },
    {
        "key": "HEP C",
        "value": "Hepatitis C"
    },
    {
        "key": "HERBM",
        "value": "Herbal medicines"
    },
    {
        "key": "HERCE",
        "value": "Herceptin (trastuzumab)"
    },
    {
        "key": "HERNIA",
        "value": "Hernia"
    },
    {
        "key": "HFAIL",
        "value": "Heart failure"
    },
    {
        "key": "HFSTH",
        "value": "Help for suicidal thoughts"
    },
    {
        "key": "HHT",
        "value": "Hereditary haemorrhagic telangiectasia (HHT)"
    },
    {
        "key": "HIB",
        "value": "Haemophilus influenzae type b (Hib)"
    },
    {
        "key": "HICCUP",
        "value": "Hiccups"
    },
    {
        "key": "HIDLYM",
        "value": "Hodgkin lymphoma"
    },
    {
        "key": "HIH",
        "value": "Hiatus hernia"
    },
    {
        "key": "HIPF",
        "value": "Hip fracture"
    },
    {
        "key": "HIPP",
        "value": "Hip pain in adults"
    },
    {
        "key": "HIPR",
        "value": "Hip replacement"
    },
    {
        "key": "HIRSCHD",
        "value": "Hirschsprung's disease"
    },
    {
        "key": "HIRSU",
        "value": "Hirsutism"
    },
    {
        "key": "HIV",
        "value": "HIV and AIDS"
    },
    {
        "key": "HIVES",
        "value": "Hives"
    },
    {
        "key": "HKWINF",
        "value": "Hookworm infection"
    },
    {
        "key": "HLN",
        "value": "Head lice and nits"
    },
    {
        "key": "HLT",
        "value": "Heart-lung transplant"
    },
    {
        "key": "HNPP",
        "value": "Hereditary neuropathy with pressure palsies (HNPP)"
    },
    {
        "key": "HOD",
        "value": "Hoarding disorder"
    },
    {
        "key": "HOMCY",
        "value": "Homocystinuria"
    },
    {
        "key": "HOMP",
        "value": "Homeopathy"
    },
    {
        "key": "HOTH",
        "value": "Home oxygen therapy"
    },
    {
        "key": "HPC",
        "value": "Hip pain in children (irritable hip)"
    },
    {
        "key": "HPERIOD",
        "value": "Heavy periods"
    },
    {
        "key": "HPH",
        "value": "Hydrocephalus"
    },
    {
        "key": "HPHR",
        "value": "Hydronephrosis"
    },
    {
        "key": "HPILES",
        "value": "Haemorrhoids (piles)"
    },
    {
        "key": "HPRAC",
        "value": "Hyperacusis"
    },
    {
        "key": "HPTR",
        "value": "Hyperparathyroidism"
    },
    {
        "key": "HRASH",
        "value": "Heat rash (prickly heat)"
    },
    {
        "key": "HRT",
        "value": "Hormone replacement therapy (HRT)"
    },
    {
        "key": "HS",
        "value": "Hidradenitis suppurativa (HS)"
    },
    {
        "key": "HSEI",
        "value": "Herpes simplex eye infections"
    },
    {
        "key": "HSP",
        "value": "Hereditary spastic paraplegia"
    },
    {
        "key": "HSPRA",
        "value": "Henoch-Schönlein purpura (HSP)"
    },
    {
        "key": "HTC",
        "value": "Hearing tests for children"
    },
    {
        "key": "HTR",
        "value": "Hand tendon repair"
    },
    {
        "key": "HTRANS",
        "value": "Heart transplant"
    },
    {
        "key": "HUNTD",
        "value": "Huntington's disease"
    },
    {
        "key": "HWH",
        "value": "Herpetic whitlow (whitlow finger)"
    },
    {
        "key": "HYPERL",
        "value": "Hyperlipidemia"
    },
    {
        "key": "HYPERT",
        "value": "Hypertension"
    },
    {
        "key": "HYPNT",
        "value": "Hypnotherapy"
    },
    {
        "key": "HYPOT",
        "value": "Hypotonia"
    },
    {
        "key": "HYPRA",
        "value": "Hypoparathyroidism"
    },
    {
        "key": "HYPTH",
        "value": "Hypothermia"
    },
    {
        "key": "HYSTE",
        "value": "Hysterectomy"
    },
    {
        "key": "HYSTS",
        "value": "Hysteroscopy"
    },
    {
        "key": "IBS",
        "value": "Irritable bowel syndrome (IBS)"
    },
    {
        "key": "ID",
        "value": "Inherited disorder"
    },
    {
        "key": "IDA",
        "value": "Iron deficiency anaemia"
    },
    {
        "key": "ILEO",
        "value": "Ileostomy"
    },
    {
        "key": "INBS",
        "value": "Insect bites and stings"
    },
    {
        "key": "INDI",
        "value": "Indigestion"
    },
    {
        "key": "INFBD",
        "value": "Inflammatory bowel disease"
    },
    {
        "key": "INFERT",
        "value": "Infertility"
    },
    {
        "key": "INGH",
        "value": "Ingrown hairs"
    },
    {
        "key": "INGT",
        "value": "Ingrown toenail"
    },
    {
        "key": "INHR",
        "value": "Inguinal hernia repair"
    },
    {
        "key": "INSOM",
        "value": "Insomnia"
    },
    {
        "key": "INTC",
        "value": "Intensive care"
    },
    {
        "key": "INTCY",
        "value": "Interstitial cystitis"
    },
    {
        "key": "INTHYP",
        "value": "Intracranial hypertension"
    },
    {
        "key": "IPFI",
        "value": "Idiopathic pulmonary fibrosis"
    },
    {
        "key": "IRRPE",
        "value": "Irregular periods"
    },
    {
        "key": "ISOAC",
        "value": "Isovaleric acidaemia"
    },
    {
        "key": "ITCHYA",
        "value": "Itchy anus"
    },
    {
        "key": "ITCHYS",
        "value": "Itchy skin"
    },
    {
        "key": "IUI",
        "value": "Intrauterine insemination (IUI)"
    },
    {
        "key": "IVF",
        "value": "IVF"
    },
    {
        "key": "JAPEN",
        "value": "Japanese encephalitis"
    },
    {
        "key": "JAUNDI",
        "value": "Jaundice"
    },
    {
        "key": "JETLAG",
        "value": "Jet lag"
    },
    {
        "key": "JHYSY",
        "value": "Joint hypermobility syndrome"
    },
    {
        "key": "JOSCS",
        "value": "Jellyfish and other sea creature stings"
    },
    {
        "key": "JP",
        "value": "Joint pain"
    },
    {
        "key": "KAWAD",
        "value": "Kawasaki disease"
    },
    {
        "key": "KERPIL",
        "value": "Keratosis pilaris (chicken skin)"
    },
    {
        "key": "KIDCAN",
        "value": "Kidney cancer"
    },
    {
        "key": "KIDINF",
        "value": "Kidney infection"
    },
    {
        "key": "KIDNTR",
        "value": "Kidney transplant"
    },
    {
        "key": "KIDSTN",
        "value": "Kidney stones"
    },
    {
        "key": "KILSYN",
        "value": "Klinefelter syndrome"
    },
    {
        "key": "KNEEP",
        "value": "Knee pain"
    },
    {
        "key": "KNEER",
        "value": "Knee replacement"
    },
    {
        "key": "KNLSUR",
        "value": "Knee ligament surgery"
    },
    {
        "key": "KNOKNE",
        "value": "Knock knees"
    },
    {
        "key": "KSAR",
        "value": "Kaposi's sarcoma"
    },
    {
        "key": "KWASH",
        "value": "Kwashiorkor"
    },
    {
        "key": "KYPHO",
        "value": "Kyphosis"
    },
    {
        "key": "LABIAL",
        "value": "Labial fusion"
    },
    {
        "key": "LABY",
        "value": "Labyrinthitis"
    },
    {
        "key": "LACTI",
        "value": "Lactose intolerance"
    },
    {
        "key": "LANSES",
        "value": "Local anaesthesia"
    },
    {
        "key": "LAPA",
        "value": "Laparoscopy (keyhole surgery)"
    },
    {
        "key": "LARYN",
        "value": "Laryngeal (larynx) cancer"
    },
    {
        "key": "LARYNG",
        "value": "Laryngitis"
    },
    {
        "key": "LAXATI",
        "value": "Laxatives"
    },
    {
        "key": "LAZYEYE",
        "value": "Lazy eye (amblyopia)"
    },
    {
        "key": "LBP",
        "value": "Low blood pressure (hypotension)"
    },
    {
        "key": "LBS",
        "value": "Low blood sugar (hypoglycaemia)"
    },
    {
        "key": "LBUP",
        "value": "Ibuprofen"
    },
    {
        "key": "LCHTH",
        "value": "Ichthyosis"
    },
    {
        "key": "LDH",
        "value": "Lactate dehydrogenase (LDH) test"
    },
    {
        "key": "LDS",
        "value": "Lumbar decompression surgery"
    },
    {
        "key": "LEGCR",
        "value": "Leg cramps"
    },
    {
        "key": "LEGID",
        "value": "Legionnaires' disease"
    },
    {
        "key": "LEMSYN",
        "value": "Lambert-Eaton myasthenic syndrome"
    },
    {
        "key": "LEPTOS",
        "value": "Leptospirosis (Weil's disease)"
    },
    {
        "key": "LEUKO",
        "value": "Leukoplakia"
    },
    {
        "key": "LICHEN",
        "value": "Lichen planus"
    },
    {
        "key": "LICHENSC",
        "value": "Lichen sclerosus"
    },
    {
        "key": "LIPOED",
        "value": "Lipoedema"
    },
    {
        "key": "LIPOM",
        "value": "Lipoma"
    },
    {
        "key": "LISTER",
        "value": "Listeriosis"
    },
    {
        "key": "LIVCAN",
        "value": "Liver cancer"
    },
    {
        "key": "LIVD",
        "value": "Liver disease"
    },
    {
        "key": "LIVTR",
        "value": "Liver transplant"
    },
    {
        "key": "LMPE",
        "value": "Impetigo"
    },
    {
        "key": "LOCH",
        "value": "Lost or changed sense of smell"
    },
    {
        "key": "LOLI",
        "value": "Loss of libido (reduced sex drive)"
    },
    {
        "key": "LOSIG",
        "value": "Long-sightedness"
    },
    {
        "key": "LPUNC",
        "value": "Lumbar puncture"
    },
    {
        "key": "LQTSY",
        "value": "Long QT syndrome"
    },
    {
        "key": "LSC",
        "value": "Low sperm count"
    },
    {
        "key": "LTRANS",
        "value": "Lung transplant"
    },
    {
        "key": "LUMP",
        "value": "Lumps"
    },
    {
        "key": "LUNGC",
        "value": "Lung cancer"
    },
    {
        "key": "LUPUS",
        "value": "Lupus"
    },
    {
        "key": "LWBC",
        "value": "Low white blood cell count"
    },
    {
        "key": "LYMED",
        "value": "Lyme disease"
    },
    {
        "key": "LYMPH",
        "value": "Lymphoedema"
    },
    {
        "key": "MACUD",
        "value": "Macular degeneration"
    },
    {
        "key": "MACUH",
        "value": "Macular hole"
    },
    {
        "key": "MAGNT",
        "value": "Magnesium test"
    },
    {
        "key": "MALAR",
        "value": "Malaria"
    },
    {
        "key": "MALETF",
        "value": "Mallet finger"
    },
    {
        "key": "MALMNPSE",
        "value": "The male menopause"
    },
    {
        "key": "MALNU",
        "value": "Malnutrition"
    },
    {
        "key": "MASOTCS",
        "value": "Mastocytosis"
    },
    {
        "key": "MASTCY",
        "value": "Mastectomy"
    },
    {
        "key": "MASTD",
        "value": "Mastoiditis"
    },
    {
        "key": "MASTI",
        "value": "Mastitis"
    },
    {
        "key": "MBT",
        "value": "Malignant brain tumour (brain cancer)"
    },
    {
        "key": "MCAD",
        "value": "MCADD"
    },
    {
        "key": "MCHI",
        "value": "Mycobacterium chimaera infection"
    },
    {
        "key": "MEAS",
        "value": "Measles"
    },
    {
        "key": "MEDI",
        "value": "Medicines information"
    },
    {
        "key": "MEL",
        "value": "Melanoma"
    },
    {
        "key": "MEML",
        "value": "Memory loss (amnesia)"
    },
    {
        "key": "MEND",
        "value": "Ménière's disease"
    },
    {
        "key": "MENG",
        "value": "Meningitis"
    },
    {
        "key": "MENP",
        "value": "Menopause"
    },
    {
        "key": "MESO",
        "value": "Mesothelioma"
    },
    {
        "key": "METAB",
        "value": "Metabolic syndrome"
    },
    {
        "key": "METARS",
        "value": "Metatarsalgia"
    },
    {
        "key": "METAT",
        "value": "Metallic taste"
    },
    {
        "key": "MHI",
        "value": "Minor head injury / lump on head"
    },
    {
        "key": "MIGRA",
        "value": "Migraine"
    },
    {
        "key": "MISCRG",
        "value": "Miscarriage"
    },
    {
        "key": "MMYEL",
        "value": "Multiple myeloma"
    },
    {
        "key": "MND",
        "value": "Motor neurone disease"
    },
    {
        "key": "MOLES",
        "value": "Moles"
    },
    {
        "key": "MOLLC",
        "value": "Molluscum contagiosum"
    },
    {
        "key": "MORN",
        "value": "Morton's neuroma"
    },
    {
        "key": "MOTS",
        "value": "Motion sickness"
    },
    {
        "key": "MOUTHC",
        "value": "Mouth cancer"
    },
    {
        "key": "MOUTHU",
        "value": "Mouth ulcers"
    },
    {
        "key": "MPREG",
        "value": "Molar pregnancy"
    },
    {
        "key": "MPS",
        "value": "Mobile phone safety"
    },
    {
        "key": "MPSDE",
        "value": "Myelodysplastic syndrome (myelodysplasia)"
    },
    {
        "key": "MRIS",
        "value": "MRI scan"
    },
    {
        "key": "MRSA",
        "value": "MRSA"
    },
    {
        "key": "MSA",
        "value": "Multiple system atrophy"
    },
    {
        "key": "MSCLER",
        "value": "Multiple sclerosis"
    },
    {
        "key": "MSUD",
        "value": "Maple syrup urine disease"
    },
    {
        "key": "MSYND",
        "value": "Marfan syndrome"
    },
    {
        "key": "MUCOS",
        "value": "Mucositis"
    },
    {
        "key": "MUMPS",
        "value": "Mumps"
    },
    {
        "key": "MUNSYN",
        "value": "Munchausen's syndrome"
    },
    {
        "key": "MUSDY",
        "value": "Muscular dystrophy"
    },
    {
        "key": "MUSY",
        "value": "Medically unexplained symptoms"
    },
    {
        "key": "MVP",
        "value": "Mitral valve problems"
    },
    {
        "key": "MYASGR",
        "value": "Myasthenia gravis"
    },
    {
        "key": "MYOPIA",
        "value": "Short-sightedness (myopia)"
    },
    {
        "key": "MYSPD",
        "value": "Myositis (polymyositis and dermatomyositis)"
    },
    {
        "key": "NAFLD",
        "value": "Non-alcoholic fatty liver disease (NAFLD)"
    },
    {
        "key": "NAPR",
        "value": "Nail problems"
    },
    {
        "key": "NARCOL",
        "value": "Narcolepsy"
    },
    {
        "key": "NARH",
        "value": "Non-allergic rhinitis"
    },
    {
        "key": "NASCA",
        "value": "Nasal and sinus cancer"
    },
    {
        "key": "NASPCA",
        "value": "Nasopharyngeal cancer"
    },
    {
        "key": "NASPL",
        "value": "Nasal polyps"
    },
    {
        "key": "NAVOAD",
        "value": "Nausea and vomiting in adults"
    },
    {
        "key": "NECFAS",
        "value": "Necrotising fasciitis"
    },
    {
        "key": "NECKP",
        "value": "Neck pain"
    },
    {
        "key": "NEOHER",
        "value": "Neonatal herpes (herpes in a baby)"
    },
    {
        "key": "NEPSYC",
        "value": "Nephrotic syndrome in children"
    },
    {
        "key": "NEUB",
        "value": "Neuroblastoma"
    },
    {
        "key": "NEUET",
        "value": "Neurofibromatosis type 1"
    },
    {
        "key": "NEUETP",
        "value": "Neurofibromatosis type 2"
    },
    {
        "key": "NEUMOP",
        "value": "Neuromyelitis optica"
    },
    {
        "key": "NEURETMR",
        "value": "Neuroendocrine tumours"
    },
    {
        "key": "NEWJAU",
        "value": "Newborn jaundice"
    },
    {
        "key": "NEWRDS",
        "value": "Newborn respiratory distress syndrome"
    },
    {
        "key": "NGOURE",
        "value": "Non-gonococcal urethritis"
    },
    {
        "key": "NIDIS",
        "value": "Nipple discharge"
    },
    {
        "key": "NISW",
        "value": "Night sweats"
    },
    {
        "key": "NOHOLY",
        "value": "Non-Hodgkin lymphoma"
    },
    {
        "key": "NOOSYN",
        "value": "Noonan syndrome"
    },
    {
        "key": "NOROV",
        "value": "Norovirus"
    },
    {
        "key": "NOSBLD",
        "value": "Nosebleed"
    },
    {
        "key": "NPSD",
        "value": "Nail patella syndrome"
    },
    {
        "key": "NSAID",
        "value": "NSAIDs"
    },
    {
        "key": "NTAN",
        "value": "Night terrors and nightmares"
    },
    {
        "key": "PACEI",
        "value": "Pacemaker implantation"
    },
    {
        "key": "PAD",
        "value": "Peripheral arterial disease (PAD)"
    },
    {
        "key": "PAGDOB",
        "value": "Paget's disease of bone"
    },
    {
        "key": "PAKDIS",
        "value": "Parkinson's disease"
    },
    {
        "key": "PANCC",
        "value": "Pancreatic cancer"
    },
    {
        "key": "PANCTR",
        "value": "Pancreas transplant"
    },
    {
        "key": "PANDIS",
        "value": "Panic disorder"
    },
    {
        "key": "PARALY",
        "value": "Paralysis"
    },
    {
        "key": "PARCEM",
        "value": "Paracetamol"
    },
    {
        "key": "PATSYN",
        "value": "Patau's syndrome"
    },
    {
        "key": "PBLMSWP",
        "value": "Problems swallowing pills"
    },
    {
        "key": "PCHTM",
        "value": "Phaeochromocytoma"
    },
    {
        "key": "PDON",
        "value": "Paget's disease of the nipple"
    },
    {
        "key": "PDT",
        "value": "Photodynamic therapy (PDT)"
    },
    {
        "key": "PDWILSYNDM",
        "value": "Prader-Willi syndrome"
    },
    {
        "key": "PECLAM",
        "value": "Pre-eclampsia"
    },
    {
        "key": "PELINFD",
        "value": "Pelvic inflammatory disease"
    },
    {
        "key": "PELVIC",
        "value": "Pelvic pain"
    },
    {
        "key": "PEMPH",
        "value": "Pemphigus vulgaris"
    },
    {
        "key": "PENCAN",
        "value": "Penile cancer"
    },
    {
        "key": "PEOPR",
        "value": "Pelvic organ prolapse"
    },
    {
        "key": "PERDISO",
        "value": "Personality disorder"
    },
    {
        "key": "PERFEAR",
        "value": "Perforated eardrum"
    },
    {
        "key": "PERICAD",
        "value": "Pericarditis"
    },
    {
        "key": "PERINEU",
        "value": "Peripheral neuropathy"
    },
    {
        "key": "PERIODS",
        "value": "Periods"
    },
    {
        "key": "PERPAN",
        "value": "Period pain"
    },
    {
        "key": "PETSCAN",
        "value": "PET scan"
    },
    {
        "key": "PFT",
        "value": "Peak flow test"
    },
    {
        "key": "PGTCR",
        "value": "Predictive genetic tests for cancer risk genes"
    },
    {
        "key": "PHANTOSMIA",
        "value": "Smelling things that aren't there (phantosmia)"
    },
    {
        "key": "PHLEBITIS",
        "value": "Phlebitis (superficial thrombophlebitis)"
    },
    {
        "key": "PHOBIAS",
        "value": "Phobias"
    },
    {
        "key": "PHOS",
        "value": "Phosphate test"
    },
    {
        "key": "PHYTRP",
        "value": "Physiotherapy"
    },
    {
        "key": "PINEDLS",
        "value": "Pins and needles"
    },
    {
        "key": "PIPBI",
        "value": "PIP breast implants"
    },
    {
        "key": "PIVSRC",
        "value": "Pityriasis versicolor"
    },
    {
        "key": "PLAGA",
        "value": "Plagiocephaly and brachycephaly (flat head syndrome)"
    },
    {
        "key": "PLEURISY",
        "value": "Pleurisy"
    },
    {
        "key": "PLNDS",
        "value": "Pilonidal sinus"
    },
    {
        "key": "PLSURG",
        "value": "Plastic surgery"
    },
    {
        "key": "PMS",
        "value": "Premenstrual syndrome (PMS)"
    },
    {
        "key": "PNEUINF",
        "value": "Pneumococcal infections"
    },
    {
        "key": "PNEUM",
        "value": "Pneumonia"
    },
    {
        "key": "PNLK",
        "value": "Phenylketonuria"
    },
    {
        "key": "POISONING",
        "value": "Poisoning"
    },
    {
        "key": "POLIO",
        "value": "Polio"
    },
    {
        "key": "POLYDRM",
        "value": "Polyhydramnios (too much amniotic fluid)"
    },
    {
        "key": "POLYLIGTERU",
        "value": "Polymorphic light eruption"
    },
    {
        "key": "POLYMRHE",
        "value": "Polymyalgia rheumatica"
    },
    {
        "key": "POLYTHMA",
        "value": "Polycythaemia"
    },
    {
        "key": "POMPHOL",
        "value": "Pompholyx (dyshidrotic eczema)"
    },
    {
        "key": "POSTHERNEU",
        "value": "Post-herpetic neuralgia"
    },
    {
        "key": "POSTMENOB",
        "value": "Postmenopausal bleeding"
    },
    {
        "key": "POSYN",
        "value": "Polycystic ovary syndrome"
    },
    {
        "key": "POTS",
        "value": "Postural tachycardia syndrome (PoTS)"
    },
    {
        "key": "PRBOTCS",
        "value": "Probiotics"
    },
    {
        "key": "PRGRSVPALSY",
        "value": "Progressive supranuclear palsy"
    },
    {
        "key": "PRIAPISM ",
        "value": "Priapism (painful erections)"
    },
    {
        "key": "PRMRBILCHGTS",
        "value": "Primary biliary cholangitis (primary biliary cirrhosis)"
    },
    {
        "key": "PROSOPAGNOSIA",
        "value": "Prosopagnosia (face blindness)"
    },
    {
        "key": "PROSTATITIS",
        "value": "Prostatitis"
    },
    {
        "key": "PRSEULS",
        "value": "Pressure ulcers (pressure sores)"
    },
    {
        "key": "PRSTECAN",
        "value": "Prostate cancer"
    },
    {
        "key": "PRSTPRB",
        "value": "Prostate problems"
    },
    {
        "key": "PRTN",
        "value": "Peritonitis"
    },
    {
        "key": "PSORIASIS",
        "value": "Psoriasis"
    },
    {
        "key": "PSRIARTIS",
        "value": "Psoriatic arthritis"
    },
    {
        "key": "PSTMTM",
        "value": "Post-mortem"
    },
    {
        "key": "PSTPTPSYCS",
        "value": "Postpartum psychosis"
    },
    {
        "key": "PSTTDPRN",
        "value": "Postnatal depression"
    },
    {
        "key": "PSYCHIATRY",
        "value": "Psychiatry"
    },
    {
        "key": "PSYCHOSIS",
        "value": "Psychosis"
    },
    {
        "key": "PSYCOTHRP",
        "value": "Psychotherapy"
    },
    {
        "key": "PTASUMTST",
        "value": "Potassium test"
    },
    {
        "key": "PTDACH",
        "value": "Persistent trophoblastic disease and choriocarcinoma"
    },
    {
        "key": "PTPSYNDRM",
        "value": "Post-polio syndrome"
    },
    {
        "key": "PTRS",
        "value": "Pityriasis rosea"
    },
    {
        "key": "PTSD",
        "value": "Post-traumatic stress disorder (PTSD)"
    },
    {
        "key": "PUBICLICE",
        "value": "Pubic lice"
    },
    {
        "key": "PUDNRGIA",
        "value": "Pudendal neuralgia"
    },
    {
        "key": "PULMEMB",
        "value": "Pulmonary embolism"
    },
    {
        "key": "PULMHYP",
        "value": "Pulmonary hypertension"
    },
    {
        "key": "PYODGANG",
        "value": "Pyoderma gangrenosum"
    },
    {
        "key": "QFEVER",
        "value": "Q fever"
    },
    {
        "key": "RABIES",
        "value": "Rabies"
    },
    {
        "key": "RADOTRP",
        "value": "Radiotherapy"
    },
    {
        "key": "RAYNAUD",
        "value": "Raynaud''s"
    },
    {
        "key": "REACTARTRTS",
        "value": "Reactive arthritis"
    },
    {
        "key": "RECTEXAM",
        "value": "Rectal examination"
    },
    {
        "key": "REDBLODCELCNT",
        "value": "Red blood cell count"
    },
    {
        "key": "REDEYE",
        "value": "Red eye"
    },
    {
        "key": "RESDIES",
        "value": "Rhesus disease"
    },
    {
        "key": "RESGRO",
        "value": "Restricted growth (dwarfism)"
    },
    {
        "key": "RETMIG",
        "value": "Retinal migraine"
    },
    {
        "key": "RETSYDRM",
        "value": "Rett syndrome"
    },
    {
        "key": "RETSYND",
        "value": "Rett syndrome"
    },
    {
        "key": "REYESYN",
        "value": "Reye's syndrome"
    },
    {
        "key": "REYSYNDRM",
        "value": "Reye's syndrome"
    },
    {
        "key": "RFLXBABI",
        "value": "Reflux in babies"
    },
    {
        "key": "RHMATARTS",
        "value": "Rheumatoid arthritis"
    },
    {
        "key": "RHMTDART",
        "value": "Rheumatoid arthritis"
    },
    {
        "key": "RHSDSE",
        "value": "Rhesus disease"
    },
    {
        "key": "RHUMFEV",
        "value": "Rheumatic fever"
    },
    {
        "key": "RHUMFVR",
        "value": "Rheumatic fever"
    },
    {
        "key": "RICKANDOST",
        "value": "Rickets and osteomalacia"
    },
    {
        "key": "RLS",
        "value": "Restless legs syndrome"
    },
    {
        "key": "RR",
        "value": "Arrhythmia"
    },
    {
        "key": "RSI",
        "value": "Repetitive strain injury (RSI)"
    },
    {
        "key": "RTI",
        "value": "Respiratory tract infections"
    },
    {
        "key": "RTNBLT",
        "value": "Retinoblastoma (eye cancer in children)"
    },
    {
        "key": "RUBELLA",
        "value": "Rubella"
    },
    {
        "key": "SAD",
        "value": "Seasonal affective disorder (SAD)"
    },
    {
        "key": "SARS",
        "value": "SARS (severe acute respiratory syndrome)"
    },
    {
        "key": "SBDRULHMTOM",
        "value": "Subdural haematoma"
    },
    {
        "key": "SBRNDHMORAGE",
        "value": "Subarachnoid haemorrhage"
    },
    {
        "key": "SCABIES",
        "value": "Scabies"
    },
    {
        "key": "SCARS",
        "value": "Scars"
    },
    {
        "key": "SCBMTRAN",
        "value": "Stem cell and bone marrow transplants"
    },
    {
        "key": "SCIATICA",
        "value": "Sciatica"
    },
    {
        "key": "SCISTMS",
        "value": "Schistosomiasis (bilharzia)"
    },
    {
        "key": "SCKBILDNGSYNDRM",
        "value": "Sick building syndrome"
    },
    {
        "key": "SCKLCLDISE",
        "value": "Sickle cell disease"
    },
    {
        "key": "SCKNDIAE",
        "value": "Sickness and diarrhoea"
    },
    {
        "key": "SCLIOS",
        "value": "Scoliosis"
    },
    {
        "key": "SCLTFEV",
        "value": "Scarlet fever"
    },
    {
        "key": "SCURVY",
        "value": "Scurvy"
    },
    {
        "key": "SDNCONF",
        "value": "Sudden confusion (delirium)"
    },
    {
        "key": "SELMUTSM",
        "value": "Selective mutism"
    },
    {
        "key": "SEPSIS",
        "value": "Sepsis"
    },
    {
        "key": "SFTISUSARCMS",
        "value": "Soft tissue sarcomas"
    },
    {
        "key": "SHINGLES",
        "value": "Shingles"
    },
    {
        "key": "SHLDRIMPGMNT",
        "value": "Shoulder impingement"
    },
    {
        "key": "SHLDRPAN",
        "value": "Shoulder pain"
    },
    {
        "key": "SHNSPLNT",
        "value": "Shin splints"
    },
    {
        "key": "SHRTNSBRET",
        "value": "Shortness of breath"
    },
    {
        "key": "SHZPHNIA",
        "value": "Schizophrenia"
    },
    {
        "key": "SIDS",
        "value": "Sudden infant death syndrome (SIDS)"
    },
    {
        "key": "SILICOSIS",
        "value": "Silicosis"
    },
    {
        "key": "SINUSITIS ",
        "value": "Sinusitis (sinus infection)"
    },
    {
        "key": "SJÖGRSSYNDRM",
        "value": "Sjögren's syndrome"
    },
    {
        "key": "SKIN\\CYST",
        "value": "Skin cyst"
    },
    {
        "key": "SKNCANMLNMA",
        "value": "Skin cancer (melanoma)"
    },
    {
        "key": "SKNCANONMLNMA",
        "value": "Skin cancer (non-melanoma)"
    },
    {
        "key": "SKNPICKDISRDR",
        "value": "Skin picking disorder"
    },
    {
        "key": "SKNRASHBABS",
        "value": "Skin rashes in babies"
    },
    {
        "key": "SKNRASHCHILD",
        "value": "Skin rashes in children"
    },
    {
        "key": "SKNTAG",
        "value": "Skin tags"
    },
    {
        "key": "SLCSYD",
        "value": "Slapped cheek syndrome"
    },
    {
        "key": "SLFHRM",
        "value": "Self-harm"
    },
    {
        "key": "SLIPDISC",
        "value": "Slipped disc"
    },
    {
        "key": "SLMLINFEC",
        "value": "Salmonella infection"
    },
    {
        "key": "SLPPARLS",
        "value": "Sleep paralysis"
    },
    {
        "key": "SLPWALK",
        "value": "Sleepwalking"
    },
    {
        "key": "SLRDRM",
        "value": "Scleroderma"
    },
    {
        "key": "SLYGLNDSTN",
        "value": "Salivary gland stones"
    },
    {
        "key": "SMLBWLTRANS",
        "value": "Small bowel transplant"
    },
    {
        "key": "SMLURN",
        "value": "Smelly urine"
    },
    {
        "key": "SNKBIT",
        "value": "Snake bites"
    },
    {
        "key": "SNORING",
        "value": "Snoring"
    },
    {
        "key": "SOILING ",
        "value": "Soiling (child pooing their pants)"
    },
    {
        "key": "SOLANX",
        "value": "Social anxiety (social phobia)"
    },
    {
        "key": "SORDRLIP",
        "value": "Sore or dry lips"
    },
    {
        "key": "SORTROT",
        "value": "Sore throat"
    },
    {
        "key": "SORWHTTNG",
        "value": "Sore or white tongue"
    },
    {
        "key": "SPIROMETRY",
        "value": "Spirometry"
    },
    {
        "key": "SPLNPROBRMV",
        "value": "Spleen problems and spleen removal"
    },
    {
        "key": "SPNBFD",
        "value": "Spina bifida"
    },
    {
        "key": "SPNMSCARTP",
        "value": "Spinal muscular atrophy"
    },
    {
        "key": "SPONDYLOLISTHESIS",
        "value": "Spondylolisthesis"
    },
    {
        "key": "SPRANSTRN",
        "value": "Sprains and strains"
    },
    {
        "key": "SPRTINJR",
        "value": "Sports injuries"
    },
    {
        "key": "SPTCARTIS",
        "value": "Septic arthritis"
    },
    {
        "key": "SPTCSHK",
        "value": "Septic shock"
    },
    {
        "key": "SQUINT",
        "value": "Squint"
    },
    {
        "key": "SRCDS",
        "value": "Sarcoidosis"
    },
    {
        "key": "SSRI",
        "value": "Selective serotonin reuptake inhibitors (SSRIs)"
    },
    {
        "key": "STAMMERING",
        "value": "Stammering"
    },
    {
        "key": "STATINS",
        "value": "Statins"
    },
    {
        "key": "STEROIDS",
        "value": "Steroids"
    },
    {
        "key": "STEVJOHNSYND",
        "value": "Stevens-Johnson syndrome"
    },
    {
        "key": "STI",
        "value": "Sexually transmitted infections (STIs)"
    },
    {
        "key": "STILLBIRTH",
        "value": "Stillbirth"
    },
    {
        "key": "STMCHE",
        "value": "Stomach ache"
    },
    {
        "key": "STOMCANCR",
        "value": "Stomach cancer"
    },
    {
        "key": "STOMULCR",
        "value": "Stomach ulcer"
    },
    {
        "key": "STPHYLCLINFCT",
        "value": "Staphylococcal infections"
    },
    {
        "key": "STPMISPEROD",
        "value": "Stopped or missed periods"
    },
    {
        "key": "STPSMOKTRET",
        "value": "Stop smoking treatments"
    },
    {
        "key": "STR",
        "value": "Stroke"
    },
    {
        "key": "STRMARK",
        "value": "Stretch marks"
    },
    {
        "key": "STROINHLR",
        "value": "Steroid inhalers"
    },
    {
        "key": "STROINJCT",
        "value": "Steroid injections"
    },
    {
        "key": "STRONASAL",
        "value": "Steroid nasal sprays"
    },
    {
        "key": "STROTABL",
        "value": "Steroid tablets"
    },
    {
        "key": "STYE",
        "value": "Stye"
    },
    {
        "key": "SUNBURN",
        "value": "Sunburn"
    },
    {
        "key": "SURGERY",
        "value": "Having an operation (surgery)"
    },
    {
        "key": "SVRHEDINJRY",
        "value": "Severe head injury"
    },
    {
        "key": "SVT",
        "value": "Supraventricular tachycardia (SVT)"
    },
    {
        "key": "SWLNGLND",
        "value": "Swollen glands"
    },
    {
        "key": "SWNFLU",
        "value": "Swine flu (H1N1)"
    },
    {
        "key": "SYPHILIS",
        "value": "Syphilis"
    },
    {
        "key": "TAPEWORMS",
        "value": "Tapeworms"
    },
    {
        "key": "TBCTRANS",
        "value": "Total iron-binding capacity (TIBC or transferrin) test"
    },
    {
        "key": "TBRSCLRSIS",
        "value": "Tuberous sclerosis"
    },
    {
        "key": "TEM",
        "value": "Twitching eyes and muscles"
    },
    {
        "key": "TENDONITIS",
        "value": "Tendonitis"
    },
    {
        "key": "TENS ",
        "value": "TENS (transcutaneous electrical nerve stimulation)"
    },
    {
        "key": "TENSELB",
        "value": "Tennis elbow"
    },
    {
        "key": "TENTPHDAC",
        "value": "Tension-type headaches"
    },
    {
        "key": "TETANUS",
        "value": "Tetanus"
    },
    {
        "key": "TETGRNDG",
        "value": "Teeth grinding (bruxism)"
    },
    {
        "key": "THALASSAEMIA",
        "value": "Thalassaemia"
    },
    {
        "key": "THIRST",
        "value": "Thirst"
    },
    {
        "key": "THREADWORMS",
        "value": "Threadworms"
    },
    {
        "key": "THROMBOPHILIA",
        "value": "Thrombophilia"
    },
    {
        "key": "THYRCANC",
        "value": "Thyroid cancer"
    },
    {
        "key": "THYROIDITIS",
        "value": "Thyroiditis"
    },
    {
        "key": "TIA",
        "value": "Transient ischaemic attack (TIA)"
    },
    {
        "key": "TICS",
        "value": "Tics"
    },
    {
        "key": "TIGTRFNGR",
        "value": "Trigger finger"
    },
    {
        "key": "TINNITUS",
        "value": "Tinnitus"
    },
    {
        "key": "TITFRSKN",
        "value": "Tight foreskin (phimosis and paraphimosis)"
    },
    {
        "key": "TKBRNENCPLTS",
        "value": "Tick-borne encephalitis"
    },
    {
        "key": "TMD",
        "value": "Temporomandibular disorder (TMD)"
    },
    {
        "key": "TMPARTS",
        "value": "Temporal arteritis"
    },
    {
        "key": "TNGTIE",
        "value": "Tongue-tie"
    },
    {
        "key": "TONSILLITIS",
        "value": "Tonsillitis"
    },
    {
        "key": "TOOTHACHE",
        "value": "Toothache"
    },
    {
        "key": "TOTDCY",
        "value": "Tooth decay"
    },
    {
        "key": "TOTLPRTTST",
        "value": "Total protein test"
    },
    {
        "key": "TOXOCARIASIS",
        "value": "Toxocariasis"
    },
    {
        "key": "TOXOPLASMOSIS",
        "value": "Toxoplasmosis"
    },
    {
        "key": "TPCLCRTSTRODIC",
        "value": "Topical corticosteroids"
    },
    {
        "key": "TRACHEOSTOMY",
        "value": "Tracheostomy"
    },
    {
        "key": "TRGNURGL",
        "value": "Trigeminal neuralgia"
    },
    {
        "key": "TRICHOMONIASIS",
        "value": "Trichomoniasis"
    },
    {
        "key": "TRICHOTILLOMANIA",
        "value": "Trichotillomania (hair pulling disorder)"
    },
    {
        "key": "TRIMETHYLAMINURIA ",
        "value": "Trimethylaminuria (fish odour syndrome)"
    },
    {
        "key": "TRMSHKHAND",
        "value": "Tremor or shaking hands"
    },
    {
        "key": "TRNRSYNDRM",
        "value": "Turner syndrome"
    },
    {
        "key": "TRSHMNWOMN",
        "value": "Thrush in men and women"
    },
    {
        "key": "TRTSYND",
        "value": "Tourette's syndrome"
    },
    {
        "key": "TRVLVACNON",
        "value": "Travel vaccinations"
    },
    {
        "key": "TSCHDIES",
        "value": "Tay-Sachs disease"
    },
    {
        "key": "TSTCLCANCR",
        "value": "Testicular cancer"
    },
    {
        "key": "TSTLMPSWL",
        "value": "Testicle lumps and swellings"
    },
    {
        "key": "TUBERCULOSIS",
        "value": "Tuberculosis (TB)"
    },
    {
        "key": "TURP",
        "value": "Transurethral resection of the prostate (TURP)"
    },
    {
        "key": "TXCSHKSYND",
        "value": "Toxic shock syndrome"
    },
    {
        "key": "TYP1DIAB",
        "value": "Type 1 diabetes"
    },
    {
        "key": "TYP2DIAB",
        "value": "Type 2 diabetes"
    },
    {
        "key": "TYPHDFEV",
        "value": "Typhoid fever"
    },
    {
        "key": "TYPHUS",
        "value": "Typhus"
    },
    {
        "key": "UDF1",
        "value": "UDF 1"
    },
    {
        "key": "UDF2",
        "value": "UDF 2"
    },
    {
        "key": "UDF3",
        "value": "UDF 3"
    },
    {
        "key": "UDF4",
        "value": "UDF 4"
    },
    {
        "key": "UDF5",
        "value": "UDF 5"
    },
    {
        "key": "ULCTRCLTS",
        "value": "Ulcerative colitis"
    },
    {
        "key": "ULTSCN",
        "value": "Ultrasound scan"
    },
    {
        "key": "UMBLCLHRNREPR",
        "value": "Umbilical hernia repair"
    },
    {
        "key": "UNDRACTVTHY",
        "value": "Underactive thyroid (hypothyroidism)"
    },
    {
        "key": "UNDSDTSTCL",
        "value": "Undescended testicles"
    },
    {
        "key": "UNINTWETLSS",
        "value": "Unintentional weight loss"
    },
    {
        "key": "UNRYCTHETR",
        "value": "Urinary catheter"
    },
    {
        "key": "UNRYINCNTIN",
        "value": "Urinary incontinence"
    },
    {
        "key": "UNRYTCTIFCTCHLD",
        "value": "Urinary tract infections in children"
    },
    {
        "key": "UNRYTCTINFC",
        "value": "Urinary tract infections (UTIs)"
    },
    {
        "key": "UVEITIS",
        "value": "Uveitis"
    },
    {
        "key": "VAGINISMUS",
        "value": "Vaginismus"
    },
    {
        "key": "VAGINITIS",
        "value": "Vaginitis"
    },
    {
        "key": "VASCULITIS",
        "value": "Vasculitis"
    },
    {
        "key": "VB12FDANE",
        "value": "Vitamin B12 or folate deficiency anaemia"
    },
    {
        "key": "VCLRDEMTIA",
        "value": "Vascular dementia"
    },
    {
        "key": "VERTIGO",
        "value": "Vertigo"
    },
    {
        "key": "VGNLCANCR",
        "value": "Vaginal cancer"
    },
    {
        "key": "VGNLDRNS",
        "value": "Vaginal dryness"
    },
    {
        "key": "VGNLDSCHRG",
        "value": "Vaginal discharge"
    },
    {
        "key": "VITILIGO",
        "value": "Vitiligo"
    },
    {
        "key": "VLVCANCR",
        "value": "Vulval cancer"
    },
    {
        "key": "VLVDYN",
        "value": "Vulvodynia (vulval pain)"
    },
    {
        "key": "VMTNGBLOD",
        "value": "Vomiting blood (haematemesis)"
    },
    {
        "key": "VMTNGCHLDNBABS",
        "value": "Vomiting in children and babies"
    },
    {
        "key": "VNELBDSES",
        "value": "Von Willebrand disease"
    },
    {
        "key": "VNSLGULCR",
        "value": "Venous leg ulcer"
    },
    {
        "key": "VRCSCZM",
        "value": "Varicose eczema"
    },
    {
        "key": "VRCSVENS",
        "value": "Varicose veins"
    },
    {
        "key": "VSTBNRNTS",
        "value": "Vestibular neuronitis"
    },
    {
        "key": "VTMNSNMNRLS",
        "value": "Vitamins and minerals"
    },
    {
        "key": "WARFARIN",
        "value": "Warfarin"
    },
    {
        "key": "WHIPLASH",
        "value": "Whiplash"
    },
    {
        "key": "WMBCNCR",
        "value": "Womb (uterus) cancer"
    },
    {
        "key": "WOLPARKWHISYN",
        "value": "Wolff-Parkinson-White syndrome"
    },
    {
        "key": "WOMBHMN",
        "value": "Worms in humans"
    },
    {
        "key": "WOPNGCUGH",
        "value": "Whooping cough"
    },
    {
        "key": "WRTSVRCS",
        "value": "Warts and verrucas"
    },
    {
        "key": "WSDOMTHTRMVL",
        "value": "Wisdom tooth removal"
    },
    {
        "key": "WSTNLVRS",
        "value": "West Nile virus"
    },
    {
        "key": "WTLOSURG",
        "value": "Weight loss surgery"
    },
    {
        "key": "WTRNGEYES",
        "value": "Watering eyes"
    },
    {
        "key": "X-RAY",
        "value": "X-ray"
    },
    {
        "key": "YELFVR",
        "value": "Yellow fever"
    },
    {
        "key": "ZKAVIRUS",
        "value": "Zika virus"
    }
];
var FamilyHistoryService =               (function () {
    function FamilyHistoryService(http$$1, config) {
        this.http = http$$1;
        this.config = config;
    }
    FamilyHistoryService.prototype.convert = function (response) {
        var familyHistory = {
            familyMemberKey: (response.familyMember && response.familyMember.familyMemberKey) ? response.familyMember.familyMemberKey : '',
            conditionsDescription: (response.conditions && response.conditions.conditionsDescription) ? response.conditions.conditionsDescription : '',
            conditionsKey: (response.conditions && response.conditions.conditionsKey) ? response.conditions.conditionsKey : '',
            diagnosisAge: response.diagnosisAge ? response.diagnosisAge : '',
            familyHistoryId: response.familyHistoryId ? response.familyHistoryId : '',
            familyMemberDescription: (response.familyMember && response.familyMember.familyMemberDescription) ? response.familyMember.familyMemberDescription : '',
            individualId: response.individualId ? response.individualId : ''
        };
        return familyHistory;
    };
    FamilyHistoryService.prototype.convertAdd = function (response) {
        var familyHistory = {
            familyMemberKey: (response.familyMemberKey) ? response.familyMemberKey : '',
            conditionsDescription: (response.conditionsDescription) ? response.conditionsDescription : '',
            conditionsKey: (response.conditionsKey) ? response.conditionsKey : '',
            diagnosisAge: response.diagnosisAge ? response.diagnosisAge : '',
            familyHistoryId: response.familyHistoryId ? response.familyHistoryId : '',
            familyMemberDescription: (response.familyMemberDescription) ? response.familyMemberDescription : '',
            individualId: response.individualId ? response.individualId : ''
        };
        return familyHistory;
    };
    FamilyHistoryService.prototype.convertToKey = function (description) {
        return familyMemberConditions.filter(function (res) { return (res.value).toLowerCase() === description.toLowerCase(); }).map(function (res) { return res.key; })[0];
    };
    FamilyHistoryService.prototype.convertCondition = function (description) {
        return familyMemberConditions.filter(function (res) { return res.key === description; }).map(function (res) { return res.value; })[0];
    };
    FamilyHistoryService.prototype.fetchAll = function (individualId) {
        var _this = this;
        return this.http.get(this.config.get.apiUrl + "/vhealth_members/" + individualId + "/familyhistories")
            .pipe(operators.map(function (response) { return response.familyHistory.map(function (familyHistory) { return _this.convert(familyHistory); }); }));
    };
    FamilyHistoryService.prototype.lookup = function (keyword) {
        return of.of(familyMemberConditions.map(function (res) { return res.value; }).filter(function (res) { return res.toLowerCase().match(keyword.toLowerCase()); }));
    };
    FamilyHistoryService.prototype.save = function (familyHistory) {
        var _this = this;
        if (familyHistory.conditionsDescription) {
            familyHistory.conditionsKey = this.convertToKey(familyHistory.conditionsDescription);
        }
        var params = {
            conditionsDescription: familyHistory.conditionsDescription ? familyHistory.conditionsDescription : '',
            conditionsKey: familyHistory.conditionsKey ? familyHistory.conditionsKey : '',
            diagnosisAge: familyHistory.diagnosisAge ? familyHistory.diagnosisAge : '',
            familyHistoryId: '',
            familyMemberDescription: familyHistory.familyMemberDescription ? familyHistory.familyMemberDescription : '',
            individualId: familyHistory.individualId ? familyHistory.individualId : '',
            activity: '',
            familyMemberKey: familyHistory.familyMemberKey ? familyHistory.familyMemberKey : "U",
            memberConditionKey: familyHistory.conditionsKey ? familyHistory.conditionsKey : 'AST',
        };
        if (familyHistory.familyHistoryId) {
            params.activity = 'UPDATE';
            params.familyHistoryId = familyHistory.familyHistoryId;
            return this.http.put(this.config.get.apiUrl + "/vhealth_familyhistories/" + familyHistory.familyHistoryId, JSON.stringify(params))
                .pipe(operators.map(function (response) { return response.familyHistoryId ? _this.convertAdd(response) : familyHistory; }));
        }
        else {
            params.activity = 'ADD';
            delete params.familyHistoryId;
            return this.http.post(this.config.get.apiUrl + "/vhealth_members/" + params.individualId + "/familyhistories", JSON.stringify(params))
                .pipe(operators.map(function (response) { return response.familyHistoryId ? _this.convertAdd(response) : familyHistory; }));
        }
    };
    FamilyHistoryService.prototype.remove = function (familyHistoryId) {
        return this.http.delete(this.config.get.apiUrl + "/vhealth_familyhistories/" + familyHistoryId);
    };
    return FamilyHistoryService;
}());
FamilyHistoryService.decorators = [
    { type: core.Injectable },
];
FamilyHistoryService.ctorParameters = function () { return [
    { type: http.HttpClient, },
    { type: ConfigService, },
]; };
var FamilyMembersService =               (function () {
    function FamilyMembersService(http$$1, config) {
        this.http = http$$1;
        this.config = config;
    }
    FamilyMembersService.prototype.fetch = function (id) {
        return this.http.get(this.config.get.apiUrl + "/vhealth_members/" + id + "/family")
            .pipe(operators.map(function (response) { return response.familyMembers; }));
    };
    return FamilyMembersService;
}());
FamilyMembersService.decorators = [
    { type: core.Injectable },
];
FamilyMembersService.ctorParameters = function () { return [
    { type: http.HttpClient, },
    { type: ConfigService, },
]; };
var FAQService =               (function () {
    function FAQService(http$$1, config, rendererFactory) {
        this.http = http$$1;
        this.config = config;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    FAQService.prototype.convertFAQs = function (html) {
        var faqs = [];
        var element = (this.renderer.createElement('html'));
        element.innerHTML = html;
        var questions = element.querySelectorAll('h2');
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            faqs.push({ question: question.innerHTML, answer: question.nextElementSibling.innerHTML });
        }
        return faqs;
    };
    FAQService.prototype.getFAQs = function () {
        var _this = this;
        if (!this.publicToken) {
            return this.getPublicToken().pipe(operators.flatMap(function (res) {
                var httpOptions = {
                    headers: new http.HttpHeaders({
                        'Authorization': res.access_token
                    })
                };
                return _this.http.get(_this.config.get.apiUrl + "/vhealth_faqs", httpOptions)
                    .pipe(operators.map(function (_a) {
                    var content = _a.content;
                    return _this.convertFAQs(content);
                }));
            }));
        }
        else {
            var httpOptions = {
                headers: new http.HttpHeaders({
                    'Authorization': this.publicToken.access_token
                })
            };
            return this.http.get(this.config.get.apiUrl + "/vhealth_faqs", httpOptions)
                .pipe(operators.map(function (_a) {
                var content = _a.content;
                return _this.convertFAQs(content);
            }));
        }
    };
    FAQService.prototype.getPublicToken = function () {
        var _this = this;
        return this.http.get("" + this.config.get.publicUrl)
            .pipe(operators.map(function (response) {
            _this.publicToken = response;
            return _this.publicToken;
        }));
    };
    return FAQService;
}());
FAQService.decorators = [
    { type: core.Injectable },
];
FAQService.ctorParameters = function () { return [
    { type: http.HttpClient, },
    { type: ConfigService, },
    { type: core.RendererFactory2, },
]; };
var medications = [
    '0.45% W/v Sodium Chloride Injection Usp',
    '0.9% Sodium Chloride',
    '0.9% Sodium Chloride Injection Usp',
    '0.9% W/v Sodium Chloride',
    '1/2 Normal Saline',
    '10% Calcium Chloride',
    '10% Dextrose Inj Usp',
    '10% Dextrose Injection Usp',
    '10% W/v Calcium Chloride',
    '10% W/v Dextrose Injection Usp',
    '123 Cold',
    '21st Century Ace Anti Oxidant',
    '21st Century Arthriflex Advantage',
    '21st Century B Complex With C',
    '21st Century C Orange Chewable',
    '21st Century Calcium Plus',
    '21st Century Digestive Enzymes',
    '21st Century Folic Acid',
    '21st Century Glucosamine & Chondroitin Plus',
    '21st Century Hair, Skin & Nail',
    '21st Century Iron',
    '21st Century Prenatal',
    '21st Century Prenatal Multivitamin + Dha',
    '21st Century Sentry',
    '21st Century Stress B With Zinc',
    '21st Century Vit C Prolonged Release',
    '21st Century Vitamin E Blended',
    '25%w/v Dextrose',
    '3 Chenes Propolis Bucal Spray',
    '3 Chenes Propolis Nasal Spray For Baby',
    '3 Chenes Propolis Spray Nasal',
    '3 V',
    '3TC',
    '4 - All',
    '4.3% Dextrose In 1/5 Normal Saline',
    '5% Dextrose Inj Usp',
    '5% Dextrose Injection Usp',
    '5% W/v Dextrose 0.45% & W/v Sodium Chloride',
    '5- Hydroxytryptophan',
    '5-Fluorouracil Ebewe',
    '5-Flurauracil',
    '5fu',
    '8.4% Sodium Bicarbonate',
    'a - Ret',
    'Abelcet',
    'Abhayrab',
    'Abidcarnon',
    'Abilify',
    'Abilify Maintena 400mg',
    'Abraxane',
    'Abraxane For Injectable Suspension',
    'Absolute Alcohol',
    'Abstral',
    'Acc',
    'Acc Long',
    'Accuzide',
    'Accyst',
    'Aceclofar',
    'Aceflam 100mg',
    'Acetab',
    'Acetazolamide',
    'Acetazolamide Tablets',
    'Acetazolomide',
    'Acetic Acid',
    'Acetic Acid Glacial',
    'Acetic Acid Solution',
    'Acetone',
    'Acetyl Cystein Solution',
    'Acetyl Cysteine',
    'Acetyl Salicylic Acid Injection',
    'Acetylcholine Intraocular Solution',
    'Acetylcysteine',
    'Achromycin V',
    'Acic',
    'Aciclosina',
    'Aciclovir Hospira',
    'Acid Concentrate For Bicarbonate Haemodialysis Ksp-03',
    'Acid Concentrate For Bicarbonate Haemodialysis Ksp-04',
    'Acid Concentrate For Bicarbonate Haemodialysis Ksp-05',
    'Acid Concentrate For Bicarbonate Haemodialysis Ksp-06',
    'Acid Soothe',
    'Acidum Phosphoricum Mt-Dhu',
    'Acinil',
    'Acitretin',
    'Acivir',
    'Acivir Eye Ointment',
    'Aclasta',
    'Acne-Aid',
    'Acne-Aid (Clear)',
    'Acne-Aid (Tinifed)',
    'Acnederm Medicated',
    'Acnederm Wash',
    'Acomplia',
    'Aconitum-Dhu',
    'Acretin',
    'Act 10',
    'Act 5',
    'Act-Hib Vaccine',
    'Actacel Vaccine',
    'Actamin',
    'Actapulgite 3g \'Children & Adults\'',
    'Actavis Siprox',
    'Actemra',
    'Acthrel',
    'Acticarb',
    'Actidose Aqua',
    'Actidose With Sorbitol',
    'Actidose-Aqua Suspension',
    'Actifed',
    'Actifed Compound Linctus',
    'Actifed Dm',
    'Actifed Expectorant',
    'Actilac',
    'Actilac Kids',
    'Actilor',
    'Actilor 5mg',
    'Actilosa',
    'Actilyse',
    'Actilyse Treatment Set',
    'Active Ice Spray',
    'Activelle',
    'Actonel',
    'Actonorm',
    'Actonorm Gel',
    'Actos',
    'Actovegin',
    'Actrapid Hm',
    'Actrapid Hm Penfill',
    'Actrim For Men',
    'Actrim For Women',
    'Acuaiss',
    'Acuitel',
    'Acular',
    'Acular Ls Ophthalmic Solution',
    'Acuvail',
    'Acyclovir',
    'Acyclovir Sodium For Injection',
    'Adalat',
    'Adalat La',
    'Adalat Retard',
    'Adcetris',
    'Adcortyl In Orabase',
    'Adcortyl Injection',
    'Addamel N',
    'Addamel N (Adult)',
    'Addi-k',
    'Additiva Calcium',
    'Additiva Iron',
    'Additiva Magnesium',
    'Additiva Multivitamin + Mineral + Caffeine',
    'Additiva Multivitamins',
    'Additiva Multivitamins + Minerals Trace Elements Selenium',
    'Additiva Superform',
    'Additiva Vitamin C',
    'Additiva Vitamin C Lemon',
    'Additiva Vitamin C Red Orange',
    'Adeks',
    'Adenocor',
    'Adenocor Injection',
    'Adenosine',
    'Adenosine Ebewe',
    'Adenuric',
    'Adglim',
    'Adiprin-Ec',
    'Adol',
    'Adol Allergy Sinus',
    'Adol Allergy Sinus Hot Therapy',
    'Adol Cold',
    'Adol Cold Hot Therapy',
    'Adol Compound',
    'Adol Extra',
    'Adol Pm',
    'Adol Pm Hot Therapy',
    'Adol Sinus',
    'Adol Sinus Hot Therapy',
    'Adrenalin',
    'Adrenalin S.a.l.f',
    'Adrenaline',
    'Adrenaline Aguettant',
    'Adrenaline Auto Injector',
    'Adrenaline Injection',
    'Adrenaline Injection Bp',
    'Adriamycin Rapid Dissolution',
    'Adriblastina Rapid Dissolution',
    'Adrien Gagnon Arthiflex',
    'Adsorbed Diphtheria Pertussis Tetanus Vaccine',
    'Adsorbed Diphtheria Tetanus Vaccine',
    'Adsorbed Diphtheria Vaccine',
    'Advacef',
    'Advagraf',
    'Advantan',
    'Advantan Fatty',
    'Advaquin',
    'Advaquin 500mg',
    'Advate',
    'Advent',
    'Advil',
    'Advil Cold & Sinus',
    'Advil Liqui-Gels',
    'Adzir Drops',
    'Aerius',
    'Aerius S',
    'Aerodiol',
    'Aerrane',
    'Aescuven Forte',
    'Aethoxysklerol',
    'Afinitor',
    'Afrin',
    'Afrin Paediatric',
    'Aftate For Athlete\'s Foot',
    'Aftate For Jock Itch',
    'After Biotic',
    'Afterbiotic Capsules',
    'Agen Zentiva',
    'Aggrastat',
    'Aggrenox',
    'Agiolax',
    'Airfast',
    'Airol',
    'Aironyl',
    'Airtal 100mg',
    'Akeran',
    'Akineton',
    'Akineton Retard',
    'Aknemycin',
    'Akneroxid',
    'Akynzeo',
    'Albalon Liquifilm',
    'Albenda',
    'Albothyl',
    'Albuman Berna',
    'Albumin Novonordisk',
    'Albutein',
    'Albuterol',
    'Alcaine',
    'Alceta',
    'Alcos-Anal',
    'Aldactide',
    'Aldactone',
    'Aldara',
    'Aldomet',
    'Aldopam',
    'Alecensa 150mg',
    'Alendro Once Weekly',
    'Alendronate Sodium',
    'Alexan',
    'Alfa Win',
    'Alfacort',
    'Alfalfa',
    'Alfalfa Mt-Dhu',
    'Alfalyte Pediatric Electrolyte Apricot Flavor',
    'Alfalyte Pediatric Electrolyte Bubble Gum Flavor',
    'Alfalyte Pediatric Electrolyte Strawberry Flavor',
    'Algesal Baume',
    'Algesal Baume Cream',
    'Algesal Cold Gel',
    'Alghaphan',
    'Algobaz',
    'Algoxib',
    'Alimta',
    'Alistim',
    'Alka -Seltzer',
    'Alka 5',
    'Alka-Cran',
    'Alka-Ur',
    'Alkasid',
    'Alkeran',
    'Aller Soothe',
    'Allercet',
    'Allerfin',
    'Allergan Preserved Saline',
    'Allergetin',
    'Allergies Kids',
    'Allergo-Comod',
    'Allergodil',
    'Allergyl',
    'Alli',
    'Allium Cepa-Dhu',
    'Alloferrin',
    'Allopurinol',
    'Almond Baby Skin Care',
    'Aloe Vera',
    'Alomide',
    'Alopexy',
    'Aloxal',
    'Aloxi',
    'Alpha Keri Oil',
    'Alpha Lipoic Acid',
    'Alpha Lipon',
    'Alphachymotrypsin',
    'Alphagan',
    'Alphagan P',
    'Alphanate',
    'Alphanine Sd',
    'Alphapress25',
    'Alphintern',
    'Alphosyl',
    'Alphosyl Application Pc',
    'Alphosyl Hc',
    'Alprazolam Tabs (Imported)',
    'Alprolix',
    'Alprostadil Usp',
    'Alteplase',
    'Altocaps-400',
    'Alupent',
    'Alveofact',
    'Alvesco',
    'Alvit',
    'Alvityl',
    'Amantadine',
    'Amargine Powder',
    'Amarin',
    'Amaryl',
    'Amaryl M',
    'Amaryl M Sr',
    'Ambetaine',
    'Ambien',
    'Ambisome',
    'Ambolar',
    'Ambroxon 15mg/5ml',
    'Ambroxon 30mg/5ml',
    'Ambutyrate',
    'Amc Mouthwash & Gargle',
    'Amerge',
    'Amethocaine (Tetracaine) Minims',
    'Ametop Gel',
    'Amevene',
    'Amikacin - Fresenius',
    'Amikacin Fresenius',
    'Amiloride',
    'Amino Acid',
    'Aminophylin',
    'Aminophylline',
    'Aminophylline Inj',
    'Aminophylline Iv Fresenius',
    'Aminoplasmal E',
    'Aminosteril Ke',
    'Aminosteril N Hepa',
    'Aminoven',
    'Aminoven 15%',
    'Aminoven Infant',
    'Amiodarone',
    'Amiodarone Hydrochloride Injection',
    'Amirone',
    'Amitiza',
    'Amitrid',
    'Amitriptyline',
    'Amlo 10',
    'Amlo 5',
    'Amlodar',
    'Amlophar',
    'Amlosin',
    'Ammi Visnaga Mt-Dhu',
    'Ammoniak Javendel',
    'Ammonul',
    'Amoclan',
    'Amoclan Bid',
    'Amoclan Forte',
    'Amoclan Injection',
    'Amol',
    'Amol 6 Plus',
    'Amol Extra',
    'Amopress',
    'Amorosinal',
    'Amostigmine',
    'Amoxicillin + Clavulanate',
    'Amoxiclav Multichem',
    'Amoxidin',
    'Amoxidin Plus',
    'Amoxil',
    'Amoxipen',
    'Amoxipen Forte',
    'Amoxycillin',
    'Amoxydar',
    'Amoxydar Forte',
    'Ampho-Moronal',
    'Amphotec',
    'Amphotericin B',
    'Amphotericin B Dumex',
    'Ampicillin',
    'Ampicillin - Fresenius',
    'Ampicillin And Sulbactam',
    'Ampicillin Inj (Imported)',
    'Ampiclox',
    'Ampidar',
    'Ampidar Forte',
    'Amrizole',
    'Amvasc',
    'Amydramine - Ii',
    'Amydramine Expectorant',
    'Amydramine Paediatric',
    'Amzoate',
    'Anadrol',
    'Anafranil',
    'Anafranil S.r',
    'Anagralide',
    'Anagrelide',
    'Ananase',
    'Anapen Adult',
    'Anapen Junior',
    'Anazol',
    'Anbinex',
    'Ancobon',
    'Ancotil',
    'Andaran 150mg',
    'Andaran 300mg',
    'Andaran Plus 150mg/12.5mg',
    'Andaran Plus 300mg/12.5mg',
    'Andriol Testocaps',
    'Androcur',
    'Androderm',
    'Androferti',
    'Androgel',
    'Anectine (Midarine)',
    'Anero',
    'Anexate',
    'Angeliq',
    'Anginova',
    'Angiomax',
    'Angiopril',
    'Angiotec',
    'Angised',
    'Anhydrol Forte',
    'Anodesyn Ointment',
    'Anoro Ellipta',
    'Antacidin',
    'Antagonin',
    'Antallos',
    'Anti-d',
    'Antiedema Eye Drops',
    'Antiedema Eye Ointment',
    'Antijoin',
    'Antimal',
    'Antimetil',
    'Antimonium Tartaricum-Dhu',
    'Antinaus',
    'Antipan',
    'Antiplex',
    'Antiprotin',
    'Antipyrine + Benzocaine',
    'Antisnake Venon Serum',
    'Antistax',
    'Antistin Privin',
    'Antizima',
    'Antoxeed',
    'Anugesic H.c',
    'Anusol',
    'Anusol H.c',
    'Anzatax',
    'Apicarpin',
    'Apicol',
    'Apicort',
    'Apicort Forte',
    'Apicrom',
    'Apidra',
    'Apidra (Optiset)',
    'Apidra Solostar',
    'Apiflox',
    'Apifrin-z',
    'Apigen',
    'Apigen - D',
    'Apihist',
    'Apillerg',
    'Apimol',
    'Apis Mellifica-Dhu',
    'Apisal',
    'Apisal Metered Dose Nasal Spray',
    'Apisulpha-20',
    'Apitropin',
    'Apizolin',
    'Apo-Acetazolamide',
    'Apo-Amitriptyline',
    'Apo-Atenol',
    'Apo-Cefprozil Fct',
    'Apo-Cimetidine',
    'Apo-Diclofenac',
    'Apo-Fluoxetine',
    'Apo-Fosinopril',
    'Apo-Go',
    'Apo-Hydro',
    'Apo-Lamotrigine',
    'Apo-Loxapine',
    'Apo-Prazosin',
    'Apo-Ranitidine',
    'Apo-Trifluoperazine',
    'Apo-Warfarin',
    'Apresoline',
    'Apresoline Injection',
    'Apresoline Tablets',
    'Aprezine',
    'Aprinox',
    'Aprokam',
    'Aprovel',
    'Aptin',
    'Apurine',
    'Aqua Maris Baby Nasal Drops',
    'Aquadek',
    'Aquadeks',
    'Aquagel',
    'Aqualan L',
    'Aquamer Isotonic Nasal Spray',
    'Aquamer Plus',
    'Aquamer Plus Hypertonic Nasal Spray',
    'Aquamer Spray',
    'Aquasal',
    'Aquasol A',
    'Aquathenol',
    'Aqueous Cream',
    'Aqueous Cream 100gm',
    'Aragan Plus',
    'Aramen',
    'Aranesp',
    'Arava',
    'Arbitense',
    'Arcalion',
    'Arceclox',
    'Archifar 1g',
    'Archifar 500mg',
    'Arcodexan',
    'Arcostrong',
    'Arcoxia',
    'Aredia',
    'Argentum Nitricum-Dhu',
    'Argiderm P',
    'Argin',
    'Arginmax For Men',
    'Arginmax For Women',
    'Arginne',
    'Aricept',
    'Arimidex',
    'Aripiprazole',
    'Aripiprazole Pentafarma',
    'Arixtra',
    'Arnasep',
    'Arnetin 50mg/2ml',
    'Arnica Gel Dhu',
    'Arnica Mt-Dhu',
    'Arnica-Dhu',
    'Aromasin',
    'Aromatic Elixir',
    'Arovit',
    'Arox',
    'Arpha Rubifacient',
    'Arrow-Fluoxetine',
    'Arsenicum Album-Dhu',
    'Arsenum Jodatum',
    'Artamin',
    'Artane',
    'Artelac',
    'Artelac Advanced',
    'Arthricream Heat',
    'Arthrix 100',
    'Arthrix 200',
    'Arthrodont',
    'Arthrosamine Tablets',
    'Arthrotec',
    'Arthrum H',
    'Arthur Andrew Serretia',
    'Artiz',
    'Arythmol',
    'Arzerra',
    'Asacol',
    'Asasantin Retard',
    'Ascofer',
    'Ascor 100',
    'Ascorbic Acid',
    'Ascorbic Acid (Vitamin C)',
    'Asia Brax',
    'Asia Lox',
    'Asiamodin',
    'Asiapirine',
    'Asiavit - M',
    'Asiazol',
    'Asitalox',
    'Asmadil',
    'Asmafort',
    'Asmanex Twisthaler',
    'Asmanore',
    'Asmapax',
    'Asparaginase',
    'Aspegic',
    'Aspimed',
    'Aspinol',
    'Aspirin',
    'Aspirin Adult',
    'Aspirin C',
    'Aspirin Direct',
    'Aspirin Protect',
    'Aspirin Tablets',
    'Aspirlow',
    'Aspro',
    'Aspro Junior',
    'Aspro Microfined',
    'Astatin',
    'Asthalin',
    'Asthator 10',
    'Asthator 4',
    'Asthavent',
    'Asthavent Dp Caps',
    'Asthavent Hfa',
    'Astmast',
    'At Iii',
    'At Iii Kedrion',
    'Atacand',
    'Atacand Plus',
    'Atarax',
    'Aten',
    'Ateno',
    'Ateroz',
    'Atg - Fresenius S',
    'Atg-Fresenius',
    'Atgam',
    'Ativan',
    'Atoksilin',
    'Atopicalm',
    'Atorcor',
    'Atorlip',
    'Atormin',
    'Atortab',
    'Atovaquone+Proguanil Hydrochloride',
    'Atozet',
    'Atracurium Besylate',
    'Atracurium-Hameln',
    'Atralidon',
    'Atrobel',
    'Atropine',
    'Atropine 1% Minims',
    'Atropine Minims',
    'Atropine Minjet',
    'Atropine Sulfate Inj',
    'Atropine Sulphate',
    'Atropine Sulphate - Fresenius',
    'Atropine Sulphate Pfs',
    'Atropine Sulphate S.a.l.f',
    'Atropine Sulphate S.a.l.f 1mg/Ml',
    'Atropulm',
    'Atrovent',
    'Atrovent Comp Hfa',
    'Atrovent N (Cfc Free)',
    'Atrovent Unit Dose Vial',
    'Atstat',
    'Attenuvax (Measles) Vaccine',
    'Aubagio',
    'Augmatic',
    'Augmentin',
    'Augmentin (Infant)',
    'Augmentin Es',
    'Augmentin Sr',
    'Augmoks',
    'Aurimel',
    'Aurodanz 4',
    'Aurodanz 8',
    'Auropodox',
    'Aurorix',
    'Avaclor',
    'Avalon Diaper Rash',
    'Avalon Mouthwash',
    'Avalox',
    'Avamys',
    'Avansart',
    'Avansart H 150/12.5',
    'Avansart H 300/12.5',
    'Avansart H 300/25',
    'Avastin',
    'Avaxim',
    'Avaxim Vaccine',
    'Avena Sativa Mt-Dhu',
    'Avloclor',
    'Avoca',
    'Avoca Caustic Applicator',
    'Avoca Caustic Pencil',
    'Avocaine Spray',
    'Avocom',
    'Avodart',
    'Avonex',
    'Avoquin',
    'Axen 250mg',
    'Axen 500mg',
    'Axid',
    'Axid I.v',
    'Axobat',
    'Axone Im',
    'Ayrton\'s Antiseptic',
    'Ayuartis',
    'Ayuasmo',
    'Ayubes',
    'Ayulax',
    'Ayulite',
    'Ayurhoids',
    'Ayurin Plus',
    'Ayuvigo Forte',
    'Azamun',
    'Azaprin',
    'Azarga',
    'Azasite',
    'Azathioprine',
    'Azeday',
    'Azee',
    'Azee 200mg/5ml',
    'Azevelor',
    'Azi-Once',
    'Aziglen',
    'Aziglen 200mg/5ml',
    'Azijub',
    'Azilect',
    'Azithromycin Inj (Imported)',
    'Azol',
    'Azomax',
    'Azomycin',
    'Azopt',
    'Azord',
    'Azord 300',
    'Aztreonam',
    'Azyn',
    'Azyter',
    'b Complex Super',
    'b Cool',
    'b Cool Gargle',
    'b-Tamin',
    'b.b.c',
    'Baby Tumee Infants Multi-Vit Iron & Zinc Liquid Drops',
    'Babyfen Drops',
    'Babylyte',
    'Bacilac Forte Intelicaps',
    'Bacilac Infantis',
    'Bacilac Instant',
    'Bacillol Af',
    'Bacitracin For Injection, Usp',
    'Baclofen',
    'Baclofen Intrathecal Sintetica 0.05mg/Ml',
    'Baclofen Intrathecal Sintetica 10mg/20ml',
    'Baclofen Intrathecal Sintetica 10mg/5ml',
    'Baclofen Intrathecal Sintetica 40mg/20ml',
    'Baclofen Sintetica',
    'Baclofen Tablets',
    'Baclofene 0.05mg/Ml',
    'Baclofene 10mg/20ml',
    'Baclofene 10mg/5ml',
    'Bactall',
    'Bactiflox',
    'Bactiflox Lactabs',
    'Bactilem',
    'Bactrim',
    'Bactrim (Adult)',
    'Bactrim Forte',
    'Bactroban',
    'Balad',
    'Balanced Salt Solution (Bss)',
    'Balca',
    'Balkacycline',
    'Balkaprofen',
    'Balkatrin',
    'Balkis',
    'Balmosa',
    'Balsam',
    'Balto Foot',
    'Balzide',
    'Baneocin',
    'Banophen',
    'Baraclude',
    'Basaglar',
    'Batterjee Pharma Maxical',
    'Baycip',
    'Bc 56 Cream',
    'Bcg',
    'Bcg Lyophilised Vaccine',
    'Bcg Injection (Intravesical Use)',
    'Bcg Sec Berna Vaccine',
    'Bcg Vaccine',
    'Bcg Vaccine B.p.',
    'Bcg Vaccine Ssi',
    'Bebegel Micro-Enema',
    'Beclazone (Cfc-Free)',
    'Becloforte',
    'Beclohale',
    'Beclomet',
    'Beclomet Forte',
    'Beclomet Nasal Aqua',
    'Beconase Aqueous',
    'Becotide',
    'Becovit',
    'Becovit Forte',
    'Becozym',
    'Becozym C',
    'Becozym Forte',
    'Bedranol',
    'Bedranol Retard',
    'Bee Propolis',
    'Beforte',
    'Bekunis Herbal Tablets',
    'Belara',
    'Belladonna-Dhu',
    'Bells Magnesium Sulphate',
    'Bells Magnesium Sulphate Paste B.p',
    'Bemfola 150iu/0.25ml',
    'Bemfola 225iu/0.37ml',
    'Bemfola 300iu/0.5ml',
    'Bemfola 450iu/0.75ml',
    'Bemfola 75iu/0.125ml',
    'Benadon',
    'Bendamustine',
    'Bendazole',
    'Benefix',
    'Beneprotein',
    'Benerva',
    'Benexol B12',
    'Bengay Greaseless Topical',
    'Benlysta',
    'Benocten',
    'Benoxinate',
    'Benoxinate (Oxybuprocaine) Minims',
    'Benoxyl',
    'Benylin',
    'Benylin (Paediatric)',
    'Benzac Ac',
    'Benzhexole',
    'Benzoin Tincture',
    'Benztrone',
    'Benztropine',
    'Benzyl Penicillin Injection',
    'Benzylpenicillin Sodium',
    'Bepanthen',
    'Bepanthen Plus',
    'Bepro',
    'Berberis Aquifolium Mt-Dhu',
    'Berberis Vulgaris',
    'Berberis Vulgaris Mt-Dhu',
    'Beresar',
    'Beriglobulin',
    'Berinert P',
    'Beriplex',
    'Berirab',
    'Berocca With Calcium & Magnesium',
    'Berodual',
    'Berotec',
    'Besocare',
    'Besocare Venticaps',
    'Betaderm',
    'Betadine',
    'Betadine Alcoholic Solution',
    'Betadine Antiseptic Paint',
    'Betadine Antiseptic Soln',
    'Betadine Dry Powder Spray',
    'Betadine Mouth Wash',
    'Betadine Ointment',
    'Betadine Scalp And Skin Cleanser',
    'Betadine Skin Cleanser',
    'Betadine Soothing Relief Inhalation Solution',
    'Betadine Soothing Relief Nasal & Sinus Relief Drop',
    'Betadine Soothing Relief Nasal&Sinus Spray',
    'Betadine Surgical Scrub',
    'Betadine Vaginal Douche Kit',
    'Betadine Vaginal Gel',
    'Betadine Vaginal Pessaries',
    'Betaferon',
    'Betagen',
    'Betaine',
    'Betaloc',
    'Betamed',
    'Betamed - N',
    'Betamet',
    'Betamethasone Injection',
    'Betamox',
    'Betaquil 16',
    'Betaquil 8',
    'Betasalic',
    'Betasept Mouth Wash/Gargle',
    'Betasept Vaginal Douche',
    'Betaserc',
    'Betasone',
    'Betasporina',
    'Betaten',
    'Betaton Gold',
    'Betaval',
    'Betaval-n',
    'Betazol',
    'Betazol G',
    'Bethanechol',
    'Bethenecol Tablets',
    'Betnesol',
    'Betnovate',
    'Betnovate C',
    'Betnovate-c',
    'Betnovate-n',
    'Beto-12',
    'Betolvex',
    'Betonate',
    'Betonate N',
    'Betoptic',
    'Betoptic S',
    'Bevacol',
    'Bevason',
    'Bevason-n',
    'Bevit',
    'Bexaritene',
    'Bezalip',
    'Bezalip Retard',
    'Bi Preterax',
    'Bi Preterax Arginine',
    'Bi-Tildiem',
    'Biclinocilline',
    'Bicnu',
    'Bidafen',
    'Bidamol',
    'Bifril',
    'Bigsens-Xr',
    'Bilaxten',
    'Biltricide',
    'Bio Cure',
    'Bio Gastric Syrup',
    'Bio Kult',
    'Bio Kult Candea',
    'Bio Kult Infantis',
    'Bio Kult Pro-Cyan',
    'Bio Liver',
    'Bio-Carotine',
    'Bio-Cin',
    'Bio-d Max Drops',
    'Bio-Fiber 80',
    'Bio-Marine',
    'Bio-q',
    'Bio-Quinone Q10',
    'Bio-Strath',
    'Bio-Strath Elixir',
    'Biocarbon',
    'Biocare Cream',
    'Biocare Dx Cream 20g',
    'Biocef',
    'Biocidan',
    'Biocium',
    'Bioderm Cream',
    'Bioderma Photoderm Spot 50+',
    'Biodroxil',
    'Biodroxyl',
    'Bioeffective A 320',
    'Biofreeze',
    'Biogaia Drops',
    'Biogaia Probiotic',
    'Biolectra Magnesium 400mg Ultra',
    'Biolectra Magnesium Direct Orange Sachet',
    'Biolectra Magnesium Forte',
    'Biomont Plus',
    'Biomox',
    'Biorela Baby',
    'Biorela Capsules',
    'Biorela Choco Dark',
    'Biorela Choco Sugarfree',
    'Biosoft Eye Drops',
    'Biosoft Plus Eye Drops',
    'Biotin',
    'Biotin Capsules',
    'Biotin Powder',
    'Biperidine Hcl',
    'Birofol',
    'Bisacodyl',
    'Bisacodyl Enema',
    'Biscor',
    'Biseko',
    'Bisodac 2.5',
    'Bisodac 5',
    'Bisolol',
    'Bisolol Ht',
    'Bisolvon',
    'Blenamax',
    'Bleocin',
    'Bleomycin',
    'Bleomycin Injection',
    'Bleomycin Usp',
    'Blincyto 35mcg',
    'Blistex Lip Care',
    'Blokium',
    'Blood Glucose Test Strips Without Coding',
    'Blood Ketone Test Strips',
    'Blopress',
    'Blopress Plus',
    'Blue Cap Cream',
    'Bon-Cal',
    'Bondronat',
    'Bondronate',
    'Bonecal',
    'Bonefos',
    'Bonidon',
    'Bonita Syrup',
    'Bonjela',
    'Bonnisan',
    'Bonnisan Syrup',
    'Bonviva',
    'Boostrix Polio Vaccine',
    'Boostrix Vaccine',
    'Botox',
    'Bozart 150',
    'Bozart 300',
    'Bramitob',
    'Brasivol Fine',
    'Brasivol Medium',
    'Brasivol Rough',
    'Bravelle',
    'Bresol',
    'Bretylate',
    'Bretylium',
    'Brevibloc',
    'Brevibloc Vial',
    'Brevinor',
    'Brexin',
    'Bricanyl',
    'Bricanyl Injection',
    'Bridion 100mg/Ml',
    'Brilinta',
    'Brilinta 60mg',
    'Brimo',
    'Brimonidine Tartrate',
    'Brinerdin',
    'Brintellix',
    'Brolene',
    'Bromelain-Pos',
    'Bromonio',
    'Broncare',
    'Bronchicum Elixir S',
    'Bronchilon',
    'Bronchipret',
    'Bronchokid Syrup',
    'Broncholar',
    'Broncholar Forte',
    'Broncholase',
    'Bronchophane',
    'Bronchopro 15mg/5ml',
    'Bronchovaxom (Adult)',
    'Bronchovaxom (Children)',
    'Bronclyn',
    'Brufen',
    'Brufen Retard',
    'Brufen Tablets',
    'Bryonia-Dhu',
    'Bss (Balanced Salt Solution)',
    'Bss Plus (Balanced Salt Solution)',
    'Buccastem',
    'Budecare',
    'Budecare Respules',
    'Budecort Dp-Caps',
    'Budecort Hfa',
    'Budenofalk',
    'Bumetanide',
    'Bumetanide Injection',
    'Bumetanide Tablets',
    'Bupicain',
    'Bupivacaine',
    'Bupivacaine 0.25% With Adrenaline',
    'Bupivacaine 0.5% With Adrenaline',
    'Bupivacaine Adrenaline',
    'Bupivacaine Aguettant',
    'Bupivacaine And Epinephrine',
    'Bupivacaine Hcl',
    'Bupivacaine Injection',
    'Bupivacaine Injection (Imported)',
    'Bupivacaine Spinal',
    'Bupivacaine With Adrenaline',
    'Bupivacine',
    'Bupivacine Adrenaline',
    'Bupivacine Adrenaline Aguettant',
    'Burinex',
    'Burinex- K',
    'Burnol',
    'Buscopan',
    'Busilvex',
    'Buspirone',
    'Butalin',
    'Butalin (Cfc-Free)',
    'Butrans',
    'Buventol Easyhaler',
    'Bydureon',
    'Bydureon Pen',
    'Byetta',
    'Ca Resonium Powder (Per Gm)',
    'Cachnerve Plus',
    'Cadbe',
    'Caduet',
    'Caelyx',
    'Cafcit',
    'Cafergot',
    'Caffeine Citrate',
    'Caffeine Citrate Injection',
    'Cal-c-Vita',
    'Cal-d Plus',
    'Calamine',
    'Calamine & Benzocaine',
    'Calamine Green Wood',
    'Calamine Lotion',
    'Calcarea Carbonicum-Dhu',
    'Calcarea Fluoratum 12x, Biochemic Remedy No. 1',
    'Calcarea Phosphoricum 6x, Biochemic Remedy No. 2',
    'Calcarea Sulfuricum 6x, Biochemic Remedy No. 12',
    'Calcefor',
    'Calcichew D3',
    'Calcichew D3 Forte',
    'Calcidol Drops',
    'Calciferol',
    'Calcijex',
    'Calcimag Zn',
    'Calcimax',
    'Calcimed D3 Forte',
    'Calciparine I/v',
    'Calciparine S/c',
    'Calcipen',
    'Calciphar',
    'Calcitec',
    'Calciton',
    'Calciton-d',
    'Calcitriol',
    'Calcitriol Injection',
    'Calcitron',
    'Calcium + Vit C Rasberry Chewable Tablets (Amosvital)',
    'Calcium + Vitamin D',
    'Calcium Acetat',
    'Calcium Acetate',
    'Calcium Acetate Tablets',
    'Calcium C Sandoz Orange',
    'Calcium Carbonate Su',
    'Calcium Chloride',
    'Calcium Chloride Inj',
    'Calcium Chloride In Ansyr Syringe',
    'Calcium Chloride Pfs',
    'Calcium Disodium Edetate',
    'Calcium Edetate De Sodium Serb',
    'Calcium Folinate',
    'Calcium Glubionate / Lactobionate',
    'Calcium Gluconate',
    'Calcium Gluconate 10% Inj',
    'Calcium Gluconate Inj (Imported)',
    'Calcium Gluconate Injection Bp',
    'Calcium Gluconate Injection Usp',
    'Calcium Leucovorin',
    'Calcium Leucovorin (Imported) Tabs',
    'Calcium Leukovirin',
    'Calcium Magnesium With Vitamin D',
    'Calcium Resonium',
    'Calcium Sandoz',
    'Calcium Sandoz Forte',
    'Calcium Sandoz Syrup',
    'Calcium Sandoz With Vitamin C',
    'Calcium Sandoz With Vitamin C (Orange)',
    'Calcium With Vitamin D',
    'Calciumfolinat Ebewe',
    'Calco',
    'Calcury',
    'Calenda 10mg',
    'Calenda 20mg',
    'Calenda 40mg',
    'Calendula',
    'Calendula Mt-Dhu',
    'Calgonate',
    'Calio Plus',
    'Callusan Extra',
    'Calmoseptine',
    'Calmvalera Hevert',
    'Calpol',
    'Calpol Six Plus',
    'Calprovit Plus',
    'Calsyr',
    'Caltrate',
    'Caltrate With Vitamin D',
    'Caltrate With Vitamin D Plus Minerals',
    'Calvid',
    'Calvid S',
    'Calvit-d',
    'Calvitalis Multivitamin With Calcium',
    'Camcolite',
    'Camphorated Oil',
    'Campto',
    'Canar',
    'Cancidas',
    'Candemax',
    'Candemax 16mg',
    'Candemax 8mg',
    'Canderal',
    'Candesart',
    'Candeur',
    'Candid',
    'Candidase',
    'Candin',
    'Candivast',
    'Candizole',
    'Canephron N',
    'Canesten',
    'Canexa',
    'Cantor',
    'Canusal',
    'Capnea',
    'Capocard',
    'Capoten',
    'Capozide',
    'Caprovid Q',
    'Capsidol Cream',
    'Captace',
    'Captohexal',
    'Captophar',
    'Captopril',
    'Captopril Sandoz',
    'Captopril Tablets (Imported)',
    'Caramet Cr',
    'Carbaglu',
    'Carbatol',
    'Carbidopa / Levodopa',
    'Carbimazole',
    'Carbimazole 5 Pch',
    'Carbimazole Tabets',
    'Carbo Vegetabilis-Dhu',
    'Carbocal D',
    'Carbocal D 400iu',
    'Carbocal D Chewable',
    'Carbomer Gel',
    'Carbomix',
    'Carboplatin',
    'Carboplatin Ebewe',
    'Carbosin',
    'Cardene',
    'Cardex 10 Mg',
    'Cardex 2.5 Mg',
    'Cardex 5 Mg',
    'Cardiagutt',
    'Cardil',
    'Cardilol',
    'Cardioace',
    'Cardiopine',
    'Cardioplegia Infusion',
    'Cardiotonic',
    'Cardioxane',
    'Cardispray',
    'Cardocap',
    'Cardura',
    'Carduus Marianus Mt-Dhu',
    'Care + 4g',
    'Care + Friars Balsam',
    'Care + Glycerin',
    'Care + Glycerin Lemon & Honey With Glucose',
    'Care Aqueous Calamine Cream',
    'Care Aqueous Cream',
    'Carelox',
    'Carelox Plus',
    'Carnitene Oral Solution',
    'Carnitine 1.5g/5ml',
    'Carnivita Forte',
    'Caroza 10',
    'Caroza 20',
    'Caroza 40',
    'Caroza 5',
    'Cartifer',
    'Cartijoint D Sachets',
    'Cartimax',
    'Carvedilol',
    'Carvedilol Hexal',
    'Carvidol',
    'Carylderm',
    'Carzodine',
    'Casodex',
    'Castellanis Paint',
    'Castor Oil',
    'Cataflam',
    'Catapres',
    'Catapress',
    'Catapress Tts',
    'Cathejell',
    'Cathejell Lidocaine C',
    'Cathflo',
    'Cationorm Ophthalmic Emulsion',
    'Cationorm Opthalmic Emulsion',
    'Caustic Applicator Sticks',
    'Caved S',
    'Caverject',
    'Cavilon',
    'Cealb',
    'Cebact',
    'Cebion',
    'Cebion Calcium',
    'Cebiopirin',
    'Ceclocare',
    'Ceclor',
    'Ceclor Mr',
    'Cedax',
    'Cedocard',
    'Ceenu',
    'Cefadrox',
    'Cefadroxil',
    'Cefaly',
    'Cefamezin',
    'Cefaxine',
    'Cefazolin',
    'Cefim',
    'Cefix',
    'Cefizox',
    'Cefobid',
    'Cefodox',
    'Cefokem Im/Iv',
    'Cefokem Im/Iv',
    'Cefotax T3a',
    'Cefotaxime (Iv)',
    'Cefotaxime (Iv/Im)',
    'Cefovex',
    'Cefovex 500',
    'Cefoxitin',
    'Cefpo 100',
    'Cefpo 200',
    'Cefproz',
    'Cefprozil',
    'Ceframed',
    'Cefrin',
    'Ceftax Im/Iv',
    'Ceftax Iv',
    'Ceftazidime',
    'Ceftazim',
    'Ceftra Im/Iv',
    'Ceftriaxone',
    'Ceftriaxone Kabi',
    'Ceftriaxone-Tabuk Im',
    'Ceftriaxone-Tabuk Iv',
    'Cefuroxime Sodium Injection Ip',
    'Cefutil',
    'Cefuzime',
    'Cefzalin',
    'Cefzil',
    'Celebrex',
    'Celecon',
    'Celemac 100',
    'Celemac 200',
    'Celemin Plus',
    'Celemin S',
    'Celepid',
    'Celestene (Betamethasone) Injection',
    'Celestoderm-v',
    'Celestoderm-v With Garamycin',
    'Celestone',
    'Celestone Chronodose',
    'Celexa',
    'Cellcept',
    'Cellucare',
    'Celluvisc',
    'Centrum Jr & Extra C',
    'Centrum Materna',
    'Centrum Prenatal',
    'Centrum Silver With Leutein Tablets (New)',
    'Centrum With Lutein',
    'Centrum With Lutein (Me)',
    'Cepacol',
    'Cepastat',
    'Cephadar',
    'Cephadar Forte',
    'Cephalex',
    'Cephalexin',
    'Cephracare',
    'Cepodem',
    'Ceporex',
    'Ceprotin',
    'Ceralan',
    'Cerazette',
    'Cerebrolysin',
    'Cerezyme',
    'Cernevit',
    'Ceroxim',
    'Certican',
    'Cerutin Rx',
    'Cervarix Vaccine',
    'Cetaphil Cleanser',
    'Cetaphil Cream',
    'Cetaphil Dermacontrol Foam Wash (Bpo Free)',
    'Cetaphil Dermacontrol Spf30 Moisturizing Lotion',
    'Cetaphil Moisturizing Cream',
    'Cetaphil Moisturizing Lotion',
    'Cetaphil Restoraderm Body Moisturizer',
    'Cetaphil Restoraderm Body Wash',
    'Cetavlex',
    'Cetax',
    'Cetgel Liquicaps',
    'Cetil',
    'Cetmax',
    'Cetralon',
    'Cetrotide',
    'Cevitil',
    'Cevitt Immun Direct Micro Pellets',
    'Ch Alpha',
    'Chamomilla-Dhu',
    'Champix',
    'Charcoal',
    'Charcoal Activated Liquid',
    'Chelidonium-Dhu',
    'Chemonate',
    'Chenodeoxycholic Acid',
    'Chesteez Cough Syrup',
    'Chewable Aspirin',
    'Children\'s Advil',
    'Children\'s Panadol 5-12 Years',
    'Children\'s Tylenol Cherry Flavour',
    'Children\'s Tylenol Grape Flavour',
    'Chirocaine',
    'Chitocal',
    'Chloral Hydrate',
    'Chloral Hydrate (Per Ml)',
    'Chloramphenicol',
    'Chloramphenicol 0.5 % Minims',
    'Chloramphenicol Minims',
    'Chloraseptic Lozenges',
    'Chloraseptic Sore Throat Lozenges Liquid Center, Cherry',
    'Chloraseptic Sore Throat Lozenges Liquid Center, Citrus',
    'Chloraseptic Sore Throat Lozenges Liquid Center, Honey Lemon',
    'Chloraseptic Sore Throat-Cherry',
    'Chloraseptic Sore Throat-Menthol',
    'Chloraseptic Sore Throat-Soothing Citrus',
    'Chloraseptic Throat Spray',
    'Chloraseptic Warming Sore Throat Lozenges Honey Lemon',
    'Chlordiazepoxide',
    'Chlorhexidine Ophthalmic Solution',
    'Chlorhydrate De Procainamide',
    'Chlorohistol',
    'Chloronerton',
    'Chloroquine',
    'Chloroquine Phosphate',
    'Chloroquine Phosphate Tablets',
    'Chloroquine Sulphate',
    'Chlorpheniramine',
    'Chlorpheniramine Maleate Inj',
    'Chlorpromazine',
    'Chlorpromazine Hydrochloride - Fresenius',
    'Chlorprothixene',
    'Chlorthalidone Tablets',
    'Chlorure De Sodium Proamp',
    'Cholebrine',
    'Cholecalciferol',
    'Cholera Berna Vaccine',
    'Cholera Vaccine',
    'Cholesfytol',
    'Cholesterol-Qr',
    'Cholestyramine',
    'Cholestyramine Resin',
    'Cholic Acid',
    'Chooz',
    'Choragon',
    'Choriomon',
    'Chromax',
    'Cialis',
    'Cibacen',
    'Cibalax',
    'Ciclomex 0.150mg/0.030mg',
    'Cicloral',
    'Ciflox',
    'Cifran',
    'Cilanem',
    'Cilest',
    'Cilostazol',
    'Ciloxan',
    'Cimedine',
    'Cimetag',
    'Cimicifuga-Dhu',
    'Cimzia',
    'Cina-Dhu',
    'Cinfalair',
    'Cinfaletro 2.5mg',
    'Cinfaval',
    'Cinnabsin',
    'Cinnarizine Eg',
    'Cinobactin Pulvules',
    'Cipamox',
    'Ciphin',
    'Ciplox',
    'Cipralex',
    'Cipralex Meltz',
    'Cipram',
    'Cipro-Sol',
    'Ciprobay',
    'Ciprobay Hc Otic',
    'Ciprocare',
    'Ciprocin',
    'Ciprodar',
    'Ciproflox',
    'Ciprofloxacin',
    'Ciprofloxacin In Sodium Chloride Injection Usp',
    'Ciprofloxacin Suspension',
    'Ciprogen',
    'Ciprolet',
    'Ciprolon',
    'Ciprolon Infusion',
    'Cipromax',
    'Cipropharm',
    'Ciproquin',
    'Ciprox',
    'Ciproxen',
    'Ciproxin',
    'Circadin',
    'Circulin Cough Lozenges',
    'Circulin Propolis Soothers',
    'Cirrus',
    'Cisordinol Acutard',
    'Cisplatin',
    'Cisplatin Injection(Imported)',
    'Cistiflux Fast',
    'Cistiflux Plus',
    'Cita 10mg',
    'Cita 20mg',
    'Citabol',
    'Citafolin',
    'Citalo 10',
    'Citalo 20',
    'Citalogen',
    'Citanest + Octapressin',
    'Citapram',
    'Citius',
    'Citra-Lock',
    'Citrate De Betaine',
    'Citrate Pot/Citric So',
    'Citric Acid',
    'Citric Acid Monohydrate Bp',
    'Citro Soda',
    'Citroline Mouth Wash & Gargle',
    'Citrucel Powder',
    'Citrucel Sugar Free Orange Flavored',
    'Citrulline',
    'Civar',
    'Cladribine',
    'Claforan Im',
    'Claforan Im/Iv',
    'Claforan Iv',
    'Clamox',
    'Clamycin',
    'Clara',
    'Claradone',
    'Claradone Douche',
    'Clarazole',
    'Clarex',
    'Claridar',
    'Clariglen',
    'Clarimac',
    'Clarinase Repetabs',
    'Claritine',
    'Claritt',
    'Claritt Xl',
    'Clariva',
    'Clarixin',
    'Clavam 1000',
    'Clavodar',
    'Clavodar Forte',
    'Clear Eyes Redness Relief',
    'Clear Eyes Triple Action Relief',
    'Clearasil Medicated Face Wash',
    'Clenil',
    'Cleocin',
    'Clexane',
    'Clidacin Ba Free 300mg/2ml Amp',
    'Clidacin Ba Free 600mg/4ml Amp',
    'Climanor',
    'Climaval',
    'Climen',
    'Climopax',
    'Clindacin T',
    'Clindamycin',
    'Clindamycin Injection',
    'Clindox',
    'Clinimix E',
    'Clinimycin T',
    'Clinoleic',
    'Clinorette',
    'Cliocort',
    'Clisma Lax',
    'Clobate',
    'Cloderm',
    'Clodronate',
    'Clofast',
    'Clofast-p',
    'Clofen',
    'Clofen Retard',
    'Clomid',
    'Clomiphene',
    'Clonidine',
    'Clonidine Tablets',
    'Clonistada',
    'Clopacin',
    'Clopidocor',
    'Clopidogrel',
    'Clopigen',
    'Clopimet 75mg',
    'Clopixol',
    'Clopixol Depot',
    'Clopixol-Acuphase',
    'Clopram',
    'Cloracef',
    'Cloracef Forte',
    'Cloracef Mr',
    'Clotan',
    'Clotrimazole Cream',
    'Clottafact',
    'Clovir',
    'Cloxipen',
    'Co-Amilozide',
    'Co-Amoxiclav',
    'Co-Cinfaval',
    'Co-Codamol',
    'Co-Diovan',
    'Co-Enzyme Q10',
    'Co-Irbea 150mg/12.5mg',
    'Co-Irbea 300mg/12.5mg',
    'Co-Irbea 300mg/25mg',
    'Co-Proxamol Tablets',
    'Co-Renitec',
    'Co-Tabuvan',
    'Co-Tritace',
    'Coaprovel',
    'Coartem Tablets',
    'Cobal',
    'Cobalin',
    'Cobalin-h',
    'Cod Liver Oil',
    'Codaphed',
    'Codaphed Plus',
    'Codeine Phosphate',
    'Codis',
    'Cofspan',
    'Cognitive',
    'Colazide',
    'Colchicine',
    'Colchicine Tablets',
    'Coldex-d',
    'Coldifed',
    'Coldifed-p',
    'Colfed',
    'Colfed Expectorant',
    'Colicaid',
    'Colicez Drops',
    'Colifoam',
    'Colircusi Antiedema',
    'Colircusi Atropine',
    'Colircusi Aureomycin',
    'Colircusi Chloramphenicol',
    'Colircusi Cicloplejico',
    'Colircusi De Icol',
    'Colircusi Dexamethasone Constrictor',
    'Colircusi Epinephrine',
    'Colircusi Gentadexa',
    'Colircusi Gentamicin',
    'Colircusi Gentavasor',
    'Colircusi Hydrocortisone Neomycin',
    'Colircusi Oxytetracycline',
    'Colircusi Pilocarpine',
    'Colircusi Sulphacetamide',
    'Colisal Cool Gel',
    'Colistimethate Sodium',
    'Colistin Inj.',
    'Collagen Flex',
    'Collagen Triple Action',
    'Colocynthis-Dhu',
    'Colomycin',
    'Colomycin Injection',
    'Colospasmin',
    'Colospasmin Forte',
    'Colpermin',
    'Colspan',
    'Comactam',
    'Combigan',
    'Combipack Of Scorpion Venom Antiserum With Sterile For Injection',
    'Combivent',
    'Combivent Unit Dose Vial',
    'Combivir',
    'Combizym',
    'Combizym Compositum',
    'Compify 10mg',
    'Compify 15mg',
    'Compound Sodium Lactate',
    'Compound Sodium Lactate Bp',
    'Compound Sodium Lactate Bp 1988',
    'Comtan',
    'Comtess',
    'Concavit',
    'Concepron',
    'Concerta',
    'Concor Cor',
    'Concor Plus',
    'Concor-10',
    'Concor-5',
    'Confido',
    'Confort Bebe Drops',
    'Congestan',
    'Congestan Repetabs',
    'Conjugated Estrogens / Medroxyprogesterone',
    'Contractubex',
    'Contractubex Compositum',
    'Contrathion Serb',
    'Contrave 8mg/90mg',
    'Control Solution (Low, Medium & High)',
    'Control Solution (Select Plus)',
    'Contusin Gel',
    'Conventin',
    'Convulax',
    'Coolex',
    'Cooling 5',
    'Copaxone',
    'Copegus',
    'Coracten',
    'Cordarone',
    'Coreg',
    'Coricidin-d',
    'Corlan',
    'Corsodyl',
    'Corsodyl Mouth Wash',
    'Cortef',
    'Cortef Tablet',
    'Corticlyss Enema',
    'Cortiderm',
    'Cortilon',
    'Cortimax',
    'Cortiment Mmx',
    'Cortimycine',
    'Cortiphenol H',
    'Cortisone Acetate',
    'Cortisone Roussel',
    'Cortucid',
    'Corvert',
    'Cosentyx',
    'Cosentyx Pen',
    'Cosentyx Pfs',
    'Cosmegan Lyovac',
    'Cosmegen',
    'Cosmofer',
    'Cosmofer (Iron(Iii) As Iron(Iii)-Hydroxide Dextran Complex)',
    'Cosopt',
    'Cosopt S',
    'Cotisone',
    'Cotrim-Ratiopharm',
    'Cough And Cold Nighttime Formula',
    'Coughnal',
    'Coumadin',
    'Covalis',
    'Covas 16',
    'Covas 32',
    'Covas 4',
    'Covas 8',
    'Coveram',
    'Coversyl',
    'Coxarthrum',
    'Coxib',
    'Coxicam',
    'Coxicel',
    'Cozaar',
    'Cpressin-p',
    'Cranberry',
    'Cranberry Forte',
    'Cranmed',
    'Crataegus Mt-Dhu',
    'Creatine Monohydrate',
    'Creon',
    'Creon 25000',
    'Creon 40000',
    'Crespine Gel',
    'Crestor',
    'Crinone',
    'Cripple Cream',
    'Cripple D Cream',
    'Cripple Nc Cream',
    'Crispen-10',
    'Crixivan',
    'Croma',
    'Cromogen',
    'Cromozil',
    'Crotorax',
    'Crystapen',
    'Cubicin',
    'Culturelle',
    'Cuplaton',
    'Curacne',
    'Curam',
    'Curam Forte',
    'Curasept',
    'Curosurf',
    'Cusicrom',
    'Cusigel',
    'Cusimolol',
    'Cusiviral',
    'Custodiol',
    'Cutinolone',
    'Cutivate',
    'Cyanide Kit Akron',
    'Cyanide Kit Taylor',
    'Cyanocobalamin',
    'Cyclo 3 Forte',
    'Cyclobral',
    'Cyclogest',
    'Cyclogyl Ed',
    'Cyclokapron',
    'Cyclopentolate',
    'Cyclopentolate Minims',
    'Cyclophosphamide',
    'Cyclorin',
    'Cycloserine',
    'Cyclothil',
    'Cycloviral',
    'Cyklokapron',
    'Cyklokapron Injection',
    'Cyklokapron Tablets',
    'Cymbalta',
    'Cymevene',
    'Cynovit',
    'Cypro-Vita',
    'Cyproheptadine',
    'Cyproterone',
    'Cyproterone Acetate',
    'Cyramza',
    'Cystadrops',
    'Cystagon',
    'Cystistat',
    'Cystoff',
    'Cystone',
    'Cytarabine',
    'Cytarabine (Imported)',
    'Cytarabine For Injection Usp',
    'Cyteal',
    'Cytoblastin',
    'Cytocristin',
    'Cytomel',
    'Cytosar',
    'Cytotec',
    'Cytotec Tablets',
    'Cytotect Cp',
    'Cytra-k',
    'd-Cal',
    'd-Forte',
    'd-Trol Drops',
    'd.d.d. Balm',
    'd.d.d. Medicated',
    'd.d.d. Soap',
    'd.d.d.Lotion',
    'd.t.p Vaccine',
    'd.t.Vax Vaccine',
    'D3 Extreme',
    'D5s45',
    'Dacarbazine',
    'Dacarbazine Injection',
    'Dacogen',
    'Dactinomycin',
    'Dactinomycin Injection',
    'Dad Mouth Wash',
    'Daflon',
    'Dafor',
    'Dagra Foot',
    'Dagravit A Forte',
    'Dagravit A-e Forte',
    'Dagravit B-Complex',
    'Dagravit B-Complex Forte',
    'Dagravit D-Calcium Orange',
    'Dagravit Total',
    'Dagynil',
    'Dairy Digest Biotix',
    'Daivobet',
    'Daivonex',
    'Daklinza',
    'Daktacort',
    'Daktarin',
    'Dalacin',
    'Dalacin T',
    'Dalacin Vaginal Ovule',
    'Dalacin-c',
    'Dalacin-c I.m/i.v',
    'Dalacin-c I.m/i.v',
    'Dalivit',
    'Dalman Aq',
    'Damiana Mt-Dhu',
    'Damine',
    'Damine D',
    'Damine D Healthy Bones',
    'Damine Healthy Bones',
    'Damor-Line',
    'Dandasha',
    'Danol',
    'Dantrium',
    'Dantrium I.v. Injection',
    'Danzen',
    'Daonil',
    'Daphne',
    'Dapril',
    'Dapsone',
    'Dapsone Tablets',
    'Daraprim',
    'Daritran',
    'Daroxime',
    'Darzalex',
    'Darzalex 100mg/5ml',
    'Darzalex 400mg/20ml',
    'Daunoblastin',
    'Daunoblastina',
    'Daxas',
    'Day Long Spf 15 Lotion',
    'Dazzle',
    'Dbl Doxorubicin',
    'Dbl Methotrexate',
    'Ddavp',
    'De-Nol',
    'Deca Durabolin',
    'Deca Liquid',
    'Decadron',
    'Decal B12',
    'Decapeptyl',
    'Decapeptyl S.r.',
    'Decatylene',
    'Decozal',
    'Decutan',
    'Deep Freeze Cold',
    'Deep Heat',
    'Deep Heat Rub 100gm',
    'Deep Heat Rub 35gm',
    'Deep Heat Rub 67gm',
    'Deep Relief',
    'Definity',
    'Deflat',
    'Deflux',
    'Dehydrated Alcohol ( Absolute Alcohol )',
    'Delatestryl',
    'Delor',
    'Demeclocycline',
    'Demolox',
    'Denk Ferrovital +',
    'Denk Fertilo Forte',
    'Denk Immun Active',
    'Denk Joint Active',
    'Denk Magnes Direct',
    'Denk Prenatal',
    'Denk Prenatal +Dha',
    'Denorex Medicated',
    'Denosumab Prefilled Syringe',
    'Dent-In-Form Multi+',
    'Dentinox',
    'Dentinox Infant Colic',
    'Depakine',
    'Depakine Chrono',
    'Depakine Sprinkle',
    'Depakote',
    'Deplatt',
    'Deplatt 75mg',
    'Depo Medrol',
    'Depo Provera',
    'Depo-Provera',
    'Depocyte',
    'Deponit 5',
    'Deposiliin',
    'Depovit-B12',
    'Deprox',
    'Deptran',
    'Depulox',
    'Deripex',
    'Deriva Aqueous',
    'Derm-Aid',
    'Derma-t',
    'Dermacide',
    'Dermacyn Solution',
    'Dermacyn Wound Care Solution',
    'Dermalife',
    'Dermamed',
    'Dermasol',
    'Dermatin',
    'Dermatix Gel',
    'Dermatop',
    'Dermatop Emollient Cream',
    'Dermavit Panthenol',
    'Dermizol',
    'Dermocal',
    'Dermocort',
    'Dermofix',
    'Dermofucin',
    'Dermolar',
    'Dermovate',
    'Dermovate Nn',
    'Descovy 200mg/10mg',
    'Descovy 200mg/25mg',
    'Deseril Tablets',
    'Desferal',
    'Desferrioxamine Mesilate',
    'Desirett 75 Mcg',
    'Deslarex 5mg',
    'Deslor',
    'Desloxan 5mg',
    'Desmopressin',
    'Desmopressin Inj (Imported)',
    'Desquaman',
    'Detrusitol',
    'Dettol',
    'Devigest Ads Capsules',
    'Devit-3 I.m Ampoule',
    'Dewax',
    'Dexa-Rhina Spray-n',
    'Dexahexal',
    'Dexalocal',
    'Dexalocal - F',
    'Dexamethasone',
    'Dexamethasone Inj. (Imported)',
    'Dexamethasone Minims',
    'Dexamethasone Phosphate',
    'Dexamethasone Sodium Phosphate',
    'Dexamethasone Sodium Phosphate Injection',
    'Dexamethasone Tablets',
    'Dexanol',
    'Dexasalyl',
    'Dexeryl',
    'Dexilant',
    'Dexipan',
    'Dextran (40) In Normal Saline',
    'Dextran (70) In Normal Saline Bp 1988',
    'Dextran 40 In Dextrose',
    'Dextran 70 Intravenous Infusion In Glucose Bp 1988',
    'Dextrokuf',
    'Dextrolag',
    'Dextrolyte-60',
    'Dextrose',
    'Dextrose Mini-Bag Injection Usp Multi Pack',
    'Dextrose Mini-Bag Injection Usp Single Pack',
    'Dextrose Mini-Bag Injection Usp W/Built-In Vial Adapter',
    'Dextrose & Sodium Chloride Injection In Viaflex',
    'Dextrose & Sodium Chloride Injection Usp',
    'Dextrose & Sodium Chloride Injection Usp Xxii',
    'Dextrose + Sodium Chloride',
    'Dextrose 70',
    'Dextrose 70%',
    'Dextrose And Sodium Chloride Injection',
    'Dextrose B.p.',
    'Dextrose Inf Bag',
    'Dextrose Infusion',
    'Dextrose Infusion Bag',
    'Dextrose Injection',
    'Dextrose Injection In Viaflex',
    'Dextrose Injection Usp',
    'Dextrose Injection Usp Xxii',
    'Dextrose Intravenous Infusion B.p.',
    'Dextrose Iv',
    'Dextrose Mini Jet',
    'Dextrose Mini-Bag Injection Usp',
    'Dextrose Mini-Bag Injection Usp Multi Pack',
    'Dextrose Mini-Bag Injection Usp Single Pack',
    'Dextrose Mini-Bag Injection Usp W/Built-In Vail Adaptor',
    'Dextrose Normal Saline',
    'Dextrose Pfs',
    'Dextrose Solution Sterilized',
    'Dextrose Water',
    'Dhc Continus',
    'Di Te Anatoxal Berna Vaccine (Adult)',
    'Di Te Per Anatoxal Berna Vaccine',
    'Di-Gel (Lemon/Orange)',
    'Di-Gel (Mint)',
    'Diabecon',
    'Diabetone',
    'Diacerein',
    'Diacomit',
    'Diafoot',
    'Dialag Microclysma',
    'Dialon',
    'Dialon Xr 1000mg',
    'Dialon Xr 500mg',
    'Dialon Xr 750mg',
    'Dialtiazem Sdv',
    'Diamel',
    'Diamicron Mr',
    'Diamide Relief',
    'Diamox',
    'Diamox Injection',
    'Diane',
    'Dianeal Pd1 Glucose',
    'Dianeal Pd4 Glucose',
    'Diaphage',
    'Diapride',
    'Diarsed',
    'Diatab',
    'Diaxine',
    'Diazepam',
    'Diazepam Rectal Tube',
    'Diazepam Rectal Tubes',
    'Diazepam Rectubes',
    'Diazepam-Sandoz',
    'Dibenyline',
    'Dibenzyline',
    'Dibro-Be',
    'Dicetel',
    'Dichloroacetate Sodium',
    'Diclair Hp-Hcg',
    'Diclair-Hp-Hcg',
    'Diclo',
    'Diclo Dispers',
    'Diclo Id',
    'Diclofast',
    'Diclofen',
    'Diclofenac Sodium',
    'Diclofenac Stada',
    'Dicloflam-k',
    'Diclogesic',
    'Diclogesic Retard',
    'Diclomax',
    'Diclon',
    'Diclopid',
    'Dicynone',
    'Didanosine',
    'Differin',
    'Difflam',
    'Diflucan',
    'Difur',
    'Digepax',
    'Digest',
    'Digest Gold + Probiotics',
    'Digest Gold With Atpro',
    'Digest Gold+Probiotics',
    'Digest Spectrum',
    'Digestime',
    'Digestin',
    'Digex',
    'Digibind',
    'Digifab',
    'Digoxin',
    'Dihydrocodeine Tablets',
    'Dihydroergotamine Injection',
    'Dijex',
    'Dilamuc Syrup',
    'Dilanyl',
    'Dilatrend',
    'Diloxol',
    'Dilt-Xr',
    'Diltan Sr Cardocaps',
    'Diltiazem',
    'Diltiazem Hcl',
    'Diltiazem Injection',
    'Dilzem',
    'Dilzem Retard',
    'Dimelor',
    'Dimenhydrinate',
    'Dimercaprol',
    'Dimet',
    'Dimetane',
    'Dimetane Extentab',
    'Dimetapp',
    'Diocalv 625',
    'Dioclav',
    'Diovan',
    'Diovenor',
    'Dipentum',
    'Dipeptiven',
    'Diphelin',
    'Diphelin Paediatric',
    'Diphencyprone',
    'Diphenhydramine',
    'Diphenhydramine Capsules',
    'Diphenhydramine Hydrochloride',
    'Diphenhydramine Inj',
    'Diphenoxylate Hydrochloride And Atropine Sulfate',
    'Diphenydramine',
    'Diphenyhydramine',
    'Diphtheria And Tetanus Vaccine, Adsorbed (Adult)',
    'Diphtheria And Tetanus Vaccine, Adsorbed (Paediatric)',
    'Diphtheria + Tetanus + Pertussis',
    'Diphtheria + Tetanus Adult',
    'Diphtheria And Tetanus Vaccine, Adsorbed (Adult)',
    'Diphtheria And Tetanus Vaccine, Adsorbed (Paediatric)',
    'Diphtheria Antitoxin Vaccine',
    'Diphtheria, Tetanus Toxoid, Pertussis, Hib (Tetravalent Vaccine)',
    'Diphtheria, Tetanus, Pertussis, Hepatitis B & Haemophilus Influenzae Type B Conjugate Adsorbed Vaccine',
    'Diphtheria,Tetanus & Pertussis- Vaccine Adsorbed',
    'Diprivan',
    'Diprofos',
    'Diprogenta',
    'Diprolene',
    'Diprosalic',
    'Diprosone',
    'Dipyridamole',
    'Diril',
    'Discovisc Ophthalmic Viscosurgical Device',
    'Disflatyl',
    'Disflatyl Chewable Tablets',
    'Disophrol',
    'Disophrol S.a',
    'Disorat',
    'Dispello Corn Cure',
    'Disposable Lancets For Diabetic Patients',
    'Disposable Lancets For Diabetic Patients (Delica)',
    'Dispril',
    'Distamine',
    'Distoside',
    'Ditropan',
    'Ditropan Tablets',
    'Diuril',
    'Diusemide',
    'Divalproex Sodium',
    'Divido',
    'Dizinil',
    'Dmso',
    'Dmso (Dimethyl Sulphoxide) Gel',
    'Doabetic',
    'Dobuject',
    'Dobutamine',
    'Dobutamine Fresenius',
    'Dobutamine Hcl Injection',
    'Dobutamine Injection Usp',
    'Doc Captopri',
    'Docetax',
    'Docetaxel',
    'Docetaxel Ebewe',
    'Docetaxel Hospira',
    'Docusate',
    'Docusate Capsules',
    'Docusate Sodium',
    'Docusol',
    'Dogmatil',
    'Dogmatil Forte',
    'Dolgit',
    'Dolgit Retard',
    'Dolobid',
    'Dolomol',
    'Dolomol (Adult)',
    'Dolomol (Child)',
    'Doloraz',
    'Dolvan',
    'Dolvic - K',
    'Domperidone',
    'Dompy',
    'Dona',
    'Donepex',
    'Dopamine',
    'Dopamine Fresenius',
    'Dopamine Hcl Usp',
    'Dopanore',
    'Dopergin',
    'Dopram',
    'Dopram Injection',
    'Dora 0.5mg/Ml',
    'Dora 5mg',
    'Dormicum',
    'Dormifor 1%',
    'Dorner',
    'Dorofen',
    'Dorsilon',
    'Dostinex',
    'Dosulepin',
    'Dotarem',
    'Dotur',
    'Doxapram',
    'Doxazosin Mesylate',
    'Doxepin',
    'Doxiproct',
    'Doxiproct Plus',
    'Doxium',
    'Doxivenil',
    'Doxorubicin',
    'Doxorubicin "Ebewe"',
    'Doxorubicin Ebewe',
    'Doxorubin',
    'Doxorubin Pch',
    'Doxycline Plantier',
    'Doxycycline',
    'Doxydar',
    'Doxylag',
    'Doxymycine',
    'Dp-Anastrozole',
    'Dr Sheffields Diaper Rash Ointment',
    'Dr Sheffields Teeting Jel',
    'Dr. Flow',
    'Dr. Smith\'s Garlic Oil',
    'Dramamine',
    'Dramylin',
    'Dramylin Pediatric',
    'Driclor',
    'Dristan',
    'Dristan Long Lasting',
    'Dristan-12 Hours',
    'Dronabinol',
    'Droperidol Ageuttant 1.25mg/Ml',
    'Droperidol Ageuttant 2.5mg/Ml',
    'Droperidol Usp',
    'Drosera-Dhu',
    'Droxaryl',
    'Droxil',
    'Du\'It Foot & Heel Balm Plus',
    'Du\'It Hand & Body Cream',
    'Duactin',
    'Duaklir Genuair',
    'Dubam',
    'Dukoral',
    'Dulcolax',
    'Dulera',
    'Dulsana',
    'Dulsana Mild',
    'Dulsero 30mg',
    'Dulsero 60mg',
    'Dumoxin',
    'Dumozol',
    'Duodart',
    'Duofilm',
    'Duolin',
    'Duotrav',
    'Duovisc Viscoelastic System',
    'Duphalac',
    'Duphalac Sticks',
    'Duphaston',
    'Dupixent',
    'Duracan',
    'Duraclon',
    'Duradox',
    'Duratears',
    'Duration',
    'Duricef',
    'Durogesic',
    'Durolane',
    'Duspalina Asia',
    'Duspamed',
    'Duspamen',
    'Duspatalin',
    'Duspatalin Retard',
    'Duxil',
    'Dyazide',
    'Dymista',
    'Dynabac',
    'Dynaceph',
    'Dynaclar 250mg',
    'Dynaclar 500mg',
    'Dynaclar Mr 500mg',
    'Dynamogen',
    'Dynastat',
    'Dyspamet',
    'Dysport',
    'e 45',
    'e Cod',
    'e-45',
    'e-Mox',
    'e-Roy',
    'e-Tamin',
    'Ear Ache',
    'Earcalm',
    'Easy Iron',
    'Easy Iron Capsules',
    'Eazopep',
    'Ebastel',
    'Ebetaxel',
    'Ebetrexat',
    'Ebimenta 10mg',
    'Ebixa',
    'Ecalta',
    'Ecapril',
    'Echinacea',
    'Echinacea Mt - Dhu',
    'Echinacin Juice',
    'Echinacin Madaus',
    'Echovist',
    'Eckhart Hair & Nail Care',
    'Eckhart Liqui-Calcium',
    'Eckhart Natalcare',
    'Eckhart Power Plus 40',
    'Ecocain',
    'Econac',
    'Econazole',
    'Econid 1mg',
    'Econid 2mg',
    'Econopred Plus',
    'Ecopace',
    'Ectofresh',
    'Ectofresh Nasal Spray',
    'Ectollerg',
    'Ectollerg Nasal Spray',
    'Edarbi',
    'Edarbyclor',
    'Edetate Calcium Disodium',
    'Edronax',
    'Edrophonium',
    'Efemoline',
    'Eferox',
    'Efexor',
    'Efexor Xr',
    'Efferalgan',
    'Efferalgan With Vitamin C',
    'Effico Tonic',
    'Effortil',
    'Efluaril 50mg/Ml',
    'Efudix',
    'Egocort',
    'Eklira Genuair',
    'Elanix 10mg',
    'Elantan',
    'Elantan Long',
    'Eldopaque',
    'Eldopaque Forte',
    'Eldoquin',
    'Eldoquin Forte',
    'Electrolade Banana',
    'Electrolade Melon',
    'Elestrin Gel',
    'Elevit Pronatal',
    'Elica',
    'Elicasal',
    'Elidel',
    'Eligard',
    'Eliquis',
    'Elmetacin',
    'Elmiron',
    'Elna',
    'Elocom',
    'Elocta',
    'Eloctate',
    'Elonva',
    'Eloxatin',
    'Eltroxin',
    'Elugel',
    'Elyzol Dental',
    'Emadine',
    'Emend',
    'Emend Trifold Pack',
    'Emicipro',
    'Emicron',
    'Emidol',
    'Emidol Cold',
    'Emifen',
    'Emifenac Dt',
    'Emifenac Sr',
    'Emilok',
    'Emilora',
    'Emimycin',
    'Emiphage',
    'Emipride',
    'Emivanz',
    'Emivix',
    'Emixal',
    'Emixal Plus',
    'Emla',
    'Emoclot',
    'Emofluor',
    'Emofluor Paste',
    'Emofluor Mouth Rinse',
    'Emselex',
    'Emthexate',
    'Emtriva',
    'Emuflex Cream',
    'Emuheal Cream',
    'Enalapril',
    'Enalaprilat',
    'Enalaprilat Injection',
    'Enapress',
    'Enapril',
    'Enat 400',
    'Enavid',
    'Enbrel',
    'Encephabol',
    'Endobloc 5',
    'Endofalk Classic',
    'Endometrin',
    'Endoxan',
    'Endoxan Asta',
    'Endoxan Inj (Imported)',
    'Endoxan Tablets',
    'Endoxan Tablets (Imported)',
    'Endoxan-Asta',
    'Enelfa',
    'Enemax',
    'Enervit',
    'Engerix',
    'Engerix - B Vaccine (Adult)',
    'Engerix - B Vaccine (Paediatric)',
    'Enhancin',
    'Enlon',
    'Ensure',
    'Ensure Vanilla Powder',
    'Enterogermina',
    'Enterolactis',
    'Enterolactis Baby Drops',
    'Enterolactis Drinkable',
    'Enterolactis Duo Sachets',
    'Enterolactis Plus',
    'Entocort',
    'Entocort Enema',
    'Entresto',
    'Entyvio',
    'Envas',
    'Enzymax Forte',
    'Enzymedica Gastro',
    'Enzymedica Pro-Bio',
    'Enzymedica Serragold',
    'Enzypan',
    'Epanutin',
    'Epaxal Berna Vaccine',
    'Epclusa 400mg/100mg',
    'Ephedrine',
    'Ephedrine Aguettant',
    'Ephedrine Injection',
    'Ephedrine Sulfate',
    'Ephynal',
    'Epi-Pen',
    'Epicitam 100mg/Ml',
    'Epicocillin',
    'Epicogel',
    'Epiduo',
    'Epilat',
    'Epimag',
    'Epinephrine',
    'Epinephrine (Racemic)',
    'Epinephrine 1:1000',
    'Epinephrine Pfs',
    'Epipen',
    'Epipen 0.15mg',
    'Epipen Adult',
    'Epipen Adult Autoinjector',
    'Epipen Auto Inj',
    'Epipen Jr',
    'Epipen Junior',
    'Epipen Junior Autoinjector',
    'Epirocin',
    'Epirubicin',
    'Epirubicin Ebewe',
    'Episenta',
    'Episil',
    'Epistatus',
    'Epistatus (Midazolam) Buccal Liquid (Imported)',
    'Epistatus Buccal Liquid',
    'Epiton Tonic',
    'Epitopic',
    'Epivir',
    'Eplerenone',
    'Epotin',
    'Eprex',
    'Epsom Salts',
    'Equoral',
    'Eracid',
    'Erbitux',
    'Ercefuryl',
    'Erecomax',
    'Eregra 100',
    'Eregra 50',
    'Ergenyl',
    'Ergocalciferol',
    'Ergocalciferol (Vitamin D)',
    'Eritrolag',
    'Ernst Richters Herbal Tea',
    'Eromycin',
    'Eros',
    'Eros Delay Spray',
    'Erostin',
    'Erwinase',
    'Eryderm',
    'Eryped',
    'Erythrocin',
    'Erythrocin Lactobionate Iv',
    'Erythrocin Stearate',
    'Erythrodar',
    'Erythromil',
    'Erythromycin',
    'Erythromycin Ophthalmic Ointment Usp',
    'Esbatal',
    'Esbriet',
    'Escipra',
    'Esidrex',
    'Esil',
    'Esmeron',
    'Esmolol',
    'Esmolol Hcl Injection',
    'Esmolol Hydrochloride',
    'Esoderm',
    'Esolife 20',
    'Esolife 40',
    'Esom',
    'Esomeprazole Azevedos',
    'Esopole',
    'Esoxx',
    'Espogen',
    'Essentiale Frote',
    'Estelle',
    'Estelle Ed',
    'Ester-c Immune Support',
    'Estovon',
    'Estrace',
    'Estracomb Tts',
    'Estracyt',
    'Estraderm Tts',
    'Estradiol',
    'Estrofem',
    'Estrofem Forte',
    'Esvin',
    'Ethambutol',
    'Ethambutol Hcl',
    'Ethambutol Hydrochloride',
    'Ethambutol Tablets',
    'Ethanol 70%',
    'Ethanol 70% Acetone Free',
    'Ethanol 90%',
    'Ethanolamine Oleate',
    'Ethanolamine Oleate Injection',
    'Ethide',
    'Ethinyl Estradiol',
    'Ethinyl Oestradiol',
    'Ethosuximide',
    'Ethotrexate',
    'Ethrane',
    'Ethyl Alcohol',
    'Ethyl Chloride',
    'Ethyl Chloride Spray',
    'Ethylchloride (Cryogesic) Spray',
    'Ethyol',
    'Etidron Hexal',
    'Etidronate',
    'Etomidate',
    'Etomidate Lipuro',
    'Etoposid Inj (Imported)',
    'Etoposide',
    'Etorix 120',
    'Etorix 60',
    'Etorix 90',
    'Etoxisclerol',
    'Etrivex',
    'Etromycin',
    'Eubeslim',
    'Eucarbon',
    'Eucerin Ph5 Body Lotion',
    'Eucerin Ph5 Wash Lotion',
    'Eudemine',
    'Eudyna',
    'Euglucon',
    'Eulexin',
    'Euphorbium Nasal Spray Sn',
    'Eurax',
    'Eurax Hc Cream',
    'Euro D',
    'Euro-k',
    'Euro-k 600',
    'Euthyrox',
    'Eutropin',
    'Euvax - B (Adult)',
    'Euvax - B (Paediatric)',
    'Evecare',
    'Evening Primrose Oil Capsules',
    'Evista',
    'Evocet',
    'Evoltra',
    'Evorex',
    'Evoxac',
    'Evoxil',
    'Evra',
    'Exacyl',
    'Excedrin',
    'Excedrin Extra Strength',
    'Excedrin Tension Headache',
    'Excipial U Hydrolotion',
    'Exedexe',
    'Exelon',
    'Exelon Patch',
    'Exforge',
    'Exforge Hct',
    'Exjade',
    'Exoderil',
    'Exofene Talc Silicone',
    'Exomax',
    'Extavia',
    'Extra Strength Tylenol',
    'Extracal Tablet',
    'Extrafer Drops',
    'Extrafer Liquid',
    'Extrammune',
    'Extraznc Drops',
    'Extraznc Liquid',
    'Exviera',
    'Exylin',
    'Exylin Paediatric',
    'Exym',
    'Eylea',
    'Ezeair',
    'Ezerex Powder',
    'Ezetrol',
    'Ezipect',
    'Factive',
    'Factor Viii (Recombinate)',
    'Factor Viii Biotest Sdh',
    'Factor Viii Injection',
    'Famlogen',
    'Famocid',
    'Famodar',
    'Famodar Abr',
    'Famorubicin',
    'Famotec',
    'Fampyra',
    'Fampyra Prolonged Release',
    'Famvir',
    'Fansidar',
    'Farcolin',
    'Farcotilium',
    'Farcovit B12',
    'Fareston',
    'Farlutal',
    'Farlutal Depot',
    'Farmactive Silver Spray',
    'Farmorubicin Rapid Dissolution',
    'Fasigyn',
    'Faslodex',
    'Fast-Flam',
    'Fastum',
    'Fasturtec',
    'Fasturtec Amp. (Powder+Solvent)',
    'Faverin',
    'Fawar Fruit',
    'Fawar Lemon Salt',
    'Fdg',
    'Febrilix',
    'Febs Cold',
    'Fedecol',
    'Fediquine',
    'Fedril',
    'Fefol Spansules',
    'Fefol Z Spansules',
    'Fegem',
    'Feiba',
    'Felbamate',
    'Felbatol',
    'Feldene',
    'Feldene Im',
    'Femaform Multi+',
    'Femara',
    'Femexin 20',
    'Femibion 1 Health Pregnancy',
    'Femibion 2 Pregnancy & Lactation',
    'Feminex Calcium',
    'Feminon A',
    'Feminon C',
    'Femitrol',
    'Femoston',
    'Femoston Conti',
    'Femulen',
    'Fenadex',
    'Fenadex 120 Mg',
    'Fenadex 180 Mg',
    'Fenam',
    'Fenam Forte',
    'Fenamine',
    'Fenbid Spansules',
    'Fendol Ds',
    'Fenistil',
    'Fenistil 24',
    'Fenotab 145',
    'Fenotab 48',
    'Fentanyl',
    'Fentanyl - Fresenius',
    'Fentanyl Fresenius',
    'Fentanyl-Janssen',
    'Fenugreek',
    'Fenza',
    'Feospan',
    'Feospan Z Spansules',
    'Fer-Sol',
    'Feramax',
    'Fercee',
    'Fergon',
    'Ferica-z',
    'Ferinject',
    'Fermathron',
    'Fermed',
    'Fermix',
    'Feroglobin B12',
    'Feroglobin Fizz',
    'Feromax',
    'Feromin',
    'Ferosac',
    'Ferose',
    'Ferose - F',
    'Ferosom Forte-Capsules',
    'Ferosom Forte-Drops',
    'Ferosom Forte-Sticks',
    'Feroton',
    'Ferplex',
    'Ferrasil',
    'Ferrate',
    'Ferrex',
    'Ferribon',
    'Ferriprox',
    'Ferritop',
    'Ferro Sanol',
    'Ferro Sanol Duodenal',
    'Ferro Sanol Gyn',
    'Ferro-Sequels',
    'Ferro-Sustets',
    'Ferrobine Complex',
    'Ferrograd Folic',
    'Ferrograd-c',
    'Ferromyn',
    'Ferromyn B',
    'Ferromyn S',
    'Ferrosom',
    'Ferrosom Forte',
    'Ferrotron',
    'Ferrous Fumarate',
    'Ferrous Gluconate',
    'Ferrous Gluconate 256 Mg Tablet',
    'Ferrous Gluconate 300mg',
    'Ferrous Sulfate / Folic Acid',
    'Ferrous Sulphate',
    'Ferrovit',
    'Ferrum Phosphoricum, Biochemic Remedy No. 3',
    'Fersaday',
    'Fertab',
    'Fertavit Male',
    'Fertilo Forte',
    'Fertinic',
    'Fertonic',
    'Fertova',
    'Ferus B12',
    'Fesovit Spansules',
    'Fess Eucalyptus Saline Nasal Spray',
    'Fess Frequent Flyer Saline Nasal',
    'Fess Little Noses Saline',
    'Fess Saline Nasal',
    'Fevadol',
    'Fevadol Extra',
    'Fexigra',
    'Fexodine',
    'Fexogen',
    'Fexon',
    'Fibralax Plus Sachets',
    'Fibrex',
    'Fibro-Vein',
    'Fibrovein Injection',
    'Fidial Tears Single Dose For Ophthalmic Use',
    'Finagen',
    'Finallerg',
    'Finasteride',
    'Finiscar',
    'Firdapse',
    'Firmagon',
    'Fit Ankle Pain Relief Patch (Fit002)',
    'Fit Back Pain Relief Patch (Fit006)',
    'Fit Elbow Pain Relief Patch (Fit005)',
    'Fit Knee Pain Relief Patch (Fit004)',
    'Fit Neck Pain Relief Patch (Fit003)',
    'Fit Shoulder Pain Relief Patch (Fit007)',
    'Fit Universal Pain Relief Patch (Fit001)',
    'Fitormil',
    'Fitzecalm',
    'Fixit',
    'Flagyl',
    'Flagyl Suppositories',
    'Flagyl-s',
    'Flamazine',
    'Flatam - Plus',
    'Flatam Plus',
    'Flatuna',
    'Flatuna Tablets',
    'Flavaco Otic',
    'Flavedrin',
    'Flavedrin Mild',
    'Flavelix Linctus',
    'Fleaxi Plus',
    'Flebogamma',
    'Flecainide Tablets',
    'Fleet Enema',
    'Fleet Phospho-Soda Ginger Lemon Flavor',
    'Fleet Phospho-Soda Unflavor',
    'Fleet Phosphosoda',
    'Flemoxin',
    'Fletcher\'s Phosphate Enema',
    'Flex-a-Min Triple Strength',
    'Flexamin',
    'Flexamin Triple Strength Tabs',
    'Flexiban',
    'Flexicam',
    'Flexin Continus',
    'Flexofytol',
    'Flintstone',
    'Flixonase Aqueous',
    'Flixotide',
    'Flixotide Diskus',
    'Flixotide Evohaler',
    'Flixotide Nebules',
    'Flocazole',
    'Flogocid',
    'Flohale -Dp Caps',
    'Flohale 125 Hfa',
    'Flohale Hfa',
    'Flolan',
    'Flomist',
    'Floraquin',
    'Florea',
    'Florinef',
    'Florinef Tablets',
    'Flourescein',
    'Flourescine Sodium',
    'Floxacin',
    'Floxapen',
    'Floxapen Capsules',
    'Flozak',
    'Flu - Care',
    'Fluanxol',
    'Fluanxol Depot',
    'Fluarix Vaccine',
    'Fluaton Pva',
    'Flucand',
    'Flucazol 150',
    'Flucazol 50',
    'Flucifem',
    'Flucloxacillin',
    'Flucloxacillin Capss (Imported)',
    'Flucloxacillin Injection',
    'Flucloxacillin Oral Solution',
    'Flucloxacillin Suspension',
    'Flucloxacillin Syrup',
    'Flucon',
    'Fluconazole',
    'Flucoral',
    'Flucotin',
    'Fludara',
    'Fludarabin',
    'Fludarabine Act',
    'Fludarabine Phosphate',
    'Fludrex',
    'Fluimucil',
    'Flukit',
    'Flumazenil',
    'Flumed',
    'Flumed Dm Adult',
    'Flumetol',
    'Fluna',
    'Fluneurin',
    'Fluomizin',
    'Fluonilid',
    'Fluorescein',
    'Fluorescein 1% Minim',
    'Fluorescein Inj',
    'Fluorescein Inj Bp',
    'Fluorescite',
    'Fluoresin Sodium Minims',
    'Fluorets',
    'Fluoretten',
    'Fluoride',
    'Fluorouracil',
    'Fluorouracil Inj (Imported)',
    'Fluoxetine',
    'Fluoxone Divule',
    'Fluoxtin',
    'Fluphenazine Retard',
    'Fluracedyl',
    'Fluran',
    'Flutab',
    'Flutab Sinus',
    'Flutiderm',
    'Flutiform',
    'Flutin',
    'Fluvir',
    'Fluvoxamine',
    'Fluvoxamine Maleate',
    'Fluxetyl',
    'Fluzyn',
    'Fml Liquifilm',
    'Folactive',
    'Folic Acid',
    'Folicare',
    'Folicid',
    'Folicin',
    'Folicron',
    'Folicum',
    'Folilife',
    'Folinate De Calcium (Aguettant)',
    'Foliron Sachets',
    'Folitab',
    'Follitrope',
    'Foltene Antidandruff Shampoo',
    'Fomepizol',
    'Fondared',
    'Foradil',
    'Forane',
    'Forcan',
    'Forcan-150',
    'Forcan-50',
    'Force Plus Liquid Gel Caps',
    'Formaldehyde',
    'Formit',
    'Formoline L 112',
    'Fortaneurin',
    'Forteo',
    'Fortepen',
    'Fortovase',
    'Fortum',
    'Fortum Monovial',
    'Fortzaar',
    'Forxiga',
    'Fosamax',
    'Fosamax Once Weekly',
    'Fosavance',
    'Foscarnet',
    'Foscavir',
    'Fosinopril',
    'Fosipril',
    'Fosmol',
    'Fosphenytoin Na',
    'Fosrenol',
    'Foster',
    'Foster Nexthaler',
    'Fostimon',
    'Fotaxim',
    'Fotil',
    'Fotil Forte',
    'Fourtz Bz',
    'Foxime Im',
    'Foxime Im/Iv',
    'Foxitin Im/Iv',
    'Fozanate',
    'Fragmin (Anti-Xa)',
    'Fraxiparine',
    'Free Breath Solution Nasal Spray 20ml',
    'Free Breath With Fresh Aroma Of Eucalyptus Solution In Nasal Spray 20ml',
    'Freeflex Forte',
    'Freestyle Libre Flash Glucose Monitoring System - Reader',
    'Freestyle Libre Flash Glucose Monitoring System Sensor',
    'Fresium',
    'Friars Balsam',
    'Froben',
    'Froben S.r',
    'Frosty Gummy Bear',
    'Frusemide',
    'Frutilax',
    'Ft Man Fort',
    'Ft500 Plus',
    'Fucicort',
    'Fucidin',
    'Fucidin H',
    'Fucidin Intertulle',
    'Fucimed',
    'Fucithalmic',
    'Fucus Vesiculosus Mt-Dhu',
    'Fudion',
    'Fukang Pian',
    'Ful-Glo Strips',
    'Fumafer',
    'Fumaven',
    'Fumaven Es',
    'Fungryl',
    'Funzol',
    'Furazol',
    'Furodantin',
    'Furomex',
    'Furosemide',
    'Furosemide - Fresenius',
    'Furosemide Injection Bp',
    'Fusibact',
    'Fusibact B',
    'Fusiderm',
    'Fusilox Cream',
    'Fusilox Ointment',
    'Fusiver',
    'Fusix',
    'Futasole',
    'Futasone',
    'Fuzeon',
    'Fuzocim',
    'Fybogel',
    'Fybogel Granules Sachets',
    'Fybogel Mebeveerine',
    'Fybogel Orange',
    'Fycompa',
    'g Pride',
    'g-50',
    'Gabalept 100',
    'Gabalept 300',
    'Gabalept 400',
    'Gabapentin',
    'Gabapentin Fidia',
    'Gabata 300',
    'Gabata 400',
    'Gabatrex',
    'Gabbroral',
    'Gabitril',
    'Galactovit Granules',
    'Galfer',
    'Galvus',
    'Galvus Met',
    'Galvusmet',
    'Gamavate',
    'Gamimune N',
    'Gammanorm',
    'Gamunex',
    'Gamunex - C',
    'Ganciclovir',
    'Ganfort',
    'Ganikderma Applicator 15ml',
    'Ganikderma Burn And Wound Ointment',
    'Ganikderma Impregnated Compresses',
    'Ganikderma Ointment Recipient 500ml',
    'Garamycin',
    'Garamycin(Paediatric)',
    'Garasone',
    'Gardasil Vaccine',
    'Garslim',
    'Gas-Gangrene Atitoxin Vaccine',
    'Gasec Gastrocaps',
    'Gastrazole',
    'Gastrex',
    'Gastrobiotix',
    'Gastrocrom',
    'Gastrofait',
    'Gastrogel',
    'Gastronerton',
    'Gastronerton (Adult)',
    'Gastronerton (Child)',
    'Gastropan',
    'Gastropulgite',
    'Gastrozin',
    'Gaviscon',
    'Gaviscon (Infant)',
    'Gaviscon Advance',
    'Gaviscon Advance Peppermint',
    'Gaviscon Double Action',
    'Gaviscon Double Action Liquid',
    'Gaviscon Extra Strength Peppermint',
    'Gaviscon Infant',
    'Gaviscon Paediatric Sachets (Imported)',
    'Gaviscon Peppermint',
    'Gaviscon Peppermint Liquid',
    'Gazyva',
    'Gelclair',
    'Gelifundol',
    'Gelobronchial Syrup',
    'Gelofusine',
    'Gelomyrtol Forte',
    'Gelorevoice Throat Lozenges',
    'Gelsemium-Dhu',
    'Geltec Megafreeflex',
    'Geltec Coq',
    'Geltec Coq Forte',
    'Geltec E Vit',
    'Geltec Folwin',
    'Geltec Haem Plus',
    'Geltec Power Plus',
    'Geltec Softcal',
    'Gemcal',
    'Gemcitabin',
    'Gemcitabin “Ebewe”',
    'Gemcitabine',
    'Gemeprost Vaginal Pessaries',
    'Gemfibrozil',
    'Gemita',
    'Gemzar',
    'Genacol',
    'Genatosan Junior Vitamins',
    'Genatosan Multivitamins Plus Iron',
    'Gencet',
    'Genevis D2',
    'Genex Ds Synthetic Resorbable Bone Graft',
    'Genex Putty Synthetic Resorbable Bone Graft',
    'Genex Synthetic Resorbable Bone Graft',
    'Gengigel First +Aid Oral Fluid',
    'Gengigel Gingival Gel',
    'Gengigel Gingival Gel Teething',
    'Gengigel Mouthrinse',
    'Gengigel Spray',
    'Gengraf',
    'Genisol',
    'Genivida',
    'Genlox',
    'Genotropin',
    'Genpol',
    'Genprid',
    'Genso',
    'Gentacin',
    'Gentadar',
    'Gentadexa',
    'Gental',
    'Gentam',
    'Gentamicin',
    'Gentamicin \'Biochemie\'',
    'Gentamycin - Fresenius',
    'Gentamycin Minims',
    'Gentaplex',
    'Genteal Eye Gel',
    'Genteal Lubricant Eye Drops',
    'Genteron',
    'Genteron Capsules',
    'Gentian Violet',
    'Gentian Violet Solution',
    'Genticin',
    'Genticin (Paediatric)',
    'Gention Violet',
    'Gentropin',
    'Genuphil',
    'Genvoya',
    'Geopen',
    'Geriso',
    'Gestalys',
    'Gestid',
    'Gestone',
    'Gilenya',
    'Gilurytmal',
    'Gincata',
    'Gincosan',
    'Gingernatur-Gingered Lemon Flavoured Lozenges With Vitamin C',
    'Gingernatur-Gingered Lemon Flavoured Lozenges With Vitamin C Without Sugar',
    'Gingernatur-Gingered Mixed Flavoured Lozenges (Menthol-Mint-Eucalyptus)',
    'Ginkgo-Biloba-Dhu',
    'Ginko Biloba-Dhu',
    'Ginkocer',
    'Ginkogin',
    'Ginkor',
    'Ginoxil Ecofoam',
    'Ginoxil Gel',
    'Ginsana',
    'Ginsana Tonic Without Alcohol',
    'Ginsavit',
    'Ginseng Plus',
    'Ginseng With Vit. E',
    'Ginsomin',
    'Giona Easyhaler',
    'Giotrif',
    'Gizlan 150',
    'Gizlan 300',
    'Gizlan Plus 150/12.5',
    'Gizlan Plus 300/12.5',
    'Gizlan Plus 300/25',
    'Glaricon 100iu/Ml',
    'Glaze',
    'Glemont Ct 4',
    'Glemont Ct 5',
    'Glencet',
    'Glencin T',
    'Glenisil',
    'Glenmate',
    'Glenphage',
    'Glenphage Xr',
    'Glenseng',
    'Glenvir',
    'Glibenclamide (Glyburide)',
    'Glibil',
    'Glibomet',
    'Gliclazide',
    'Glicomel Mr',
    'Glim',
    'Glimaryl',
    'Glimulin',
    'Glipom',
    'Glit',
    'Glivec',
    'Globifer Forte',
    'Globuman Berna',
    'Gloclav',
    'Glodip',
    'Gloditen',
    'Glomox',
    'Glomox Dt',
    'Glopril',
    'Glormin',
    'Glotac',
    'Glotrizine',
    'Glotrizine Odt',
    'Glovit',
    'Glovit - Cal',
    'Glovit - H',
    'Glovit 4 Lady',
    'Glovit Junior',
    'Glow Radiance Jointa',
    'Glozal',
    'Glozimax',
    'Glucagen',
    'Glucagen Hypokit',
    'Glucagon Hpokit',
    'Gluco-In-Form Multi+',
    'Glucobay',
    'Glucogel',
    'Glucometer For Patient Personal Use',
    'Glucometer Lancing Device',
    'Glucometer Lancing Device (Delica)',
    'Glucomine',
    'Glucomine Gel',
    'Gluconate De Calcium Proamp',
    'Glucophage',
    'Glucophage Xr',
    'Glucosamin Chondriotin With Msm',
    'Glucose',
    'Glucose 50% W/v',
    'Glucose Bp',
    'Glucose Intravenous Infusion B.p.',
    'Glucose Intravenous Infusion Bp 1988',
    'Glucose Tablets',
    'Glucose W/v Intravenous Infusion Bp',
    'Glucotab - Blueberry',
    'Glucotab - Lemon & Lime',
    'Glucotab - Orange',
    'Glucotab - Raspberry',
    'Glucovance',
    'Glustin',
    'Glutenease',
    'Glycereze Adult',
    'Glycereze Infant',
    'Glycerin',
    'Glycerin (Adults)',
    'Glycerin (Infants)',
    'Glycerin Adult',
    'Glycerin B.p',
    'Glycerin Infant And Children',
    'Glycerin Magnesium Sulphate Paste',
    'Glycerin Of Borax',
    'Glycerol',
    'Glyceryl Trinitrate',
    'Glyceryl Trinitrate Injection',
    'Glycilax For Adult',
    'Glycilax For Children',
    'Glycin',
    'Glycine',
    'Glycine For Irrigation',
    'Glycine For Irrigation In Vaiflex',
    'Glycine Irrigation Solution U.s.p.',
    'Glycine Irrigation Usp',
    'Glycophos',
    'Glycopyrrolate',
    'Glycopyrrolate + Neostigmine',
    'Glycopyrrolate Injection',
    'Glycopyrrolate Tablets',
    'Glycopyrronium Bromide',
    'Glycril Trinitrate',
    'Glyka Mr',
    'Glymet',
    'Glynase',
    'Glypressin',
    'Glypressin Injection (Imported)',
    'Glypride',
    'Glytrin',
    'Glyvenol',
    'Glyzide',
    'Goanna Arthritis',
    'Golden Bean (Multivitamins And Minerals Children)',
    'Gonac',
    'Gonadorelin',
    'Gonadorelin Njection',
    'Gonadotraphon L.h',
    'Gonak',
    'Gonal - F',
    'Gonapeptyl',
    'Gonapeptyl Cr',
    'Goniovisc',
    'Gonne',
    'Gordex',
    'Gosacin',
    'Gracial',
    'Granocyte',
    'Granudoxy',
    'Graphites-Dhu',
    'Gravigard',
    'Grindella Mt-Dhu',
    'Gripp-Heel',
    'Grisovin',
    'Growlyn',
    'Growlyn Drops',
    'Growlyn D Drops',
    'Gtn S/l Spray',
    'Guafedrin',
    'Guaphan',
    'Gupisone',
    'Gutron',
    'Gyndelta',
    'Gyndelta Prim',
    'Gynera',
    'Gynest',
    'Gyno Flor-e',
    'Gyno-Coryl',
    'Gyno-Daktarin',
    'Gyno-Mikozal',
    'Gyno-Pevaryl',
    'Gyno-Pevaryl Depot',
    'Gyno-Travogen',
    'Gynofit Lactic Acid Vaginal Gel',
    'Gynoflor',
    'Gynosant',
    'Gynotrosyd',
    'Gyraquin 400mg',
    'Haem Plus',
    'Haem Up',
    'Haemate P',
    'Haemoctin',
    'Haemodialysis Acid Concentrate For Bicarbonate Dialysis Formula Qpc-1 (x 45 With Dextrose)',
    'Haemodialysis Acid Concentrate For Bicarbonate Dialysis Formula Qpc-2 (x 45 With Dextrose)',
    'Haemodialysis Acid Concentrate For Bicarbonate Dialysis Formula Qpc-3 (x 45 With Dextrose)',
    'Haemodialysis Acid Concentrate For Bicarbonate Dialysis Formula Qpf-1 (x 35 With Dextrose)',
    'Haemodialysis Acid Concentrate For Bicarbonate Dialysis Formula Qpf-2 (x 35 With Dextrose)',
    'Haemodialysis Acid Concentrate For Bicarbonate Dialysis Formula Qpf-3 (x 35 With Dextrose)',
    'Haemodialysis Acid Concentrate For Bicarbonate Dialysis Formula Qpf-4 (x 35 With Dextrose)',
    'Haemodialysis Acid Concentrate For Bicarbonate Dialysis Formula Qpf-5',
    'Haemodialysis Acid Concentrate For Bicarbonate Dialysis Formula Qpf-6',
    'Haemodialysis Acid Concentrate For Bicarbonate Dialysis Formula Qpf-7 (x 35 With Dextrose)',
    'Haemodialysis Acid Concentrate For Bicarbonate Dialysis Formulation C1',
    'Haemodialysis Acid Concentrate For Bicarbonate Dialysis Formulation C2',
    'Haemodialysis Acid Concentrate For Bicarbonate Dialysis Formulation C3',
    'Haemodialysis Acid Concentrate For Bicarbonate Dialysis Formulation F1',
    'Haemogain',
    'Haemophilus Influenzae Type B Conjugate Vaccine (Lyophilized)',
    'Haemoproct',
    'Haemosol',
    'Haes-Steril',
    'Hair O Max',
    'Hairfollic Man',
    'Hairfollic Woman',
    'Hairgain',
    'Hairgain For Men',
    'Hairgain For Women',
    'Hairgaine',
    'Hairgaine For Men',
    'Hairgaine For Women',
    'Hairgro',
    'Hairgrow',
    'Hairscience',
    'Hairtone',
    'Halaurant',
    'Halaven',
    'Haldol',
    'Haldol 10mg',
    'Haldol Decanoas',
    'Haldol Decanoate',
    'Haldol Tablets',
    'Half-Inderal',
    'Haloperidol',
    'Haloperidol - Ratiopharm',
    'Haloperidol Decanoate',
    'Haloperidol Injection',
    'Haloperidol Injection Usp (For Immediate Release)',
    'Halothane',
    'Hamamelis Vergiana Mt-Dhu',
    'Harvoni',
    'Havrix (Adult) Vaccine',
    'Havrix Junior Monodose Vaccine',
    'Havrix Vaccine (Adult)',
    'Havrix Vaccine (Paediatric)',
    'Haymine S.r',
    'Hb-Vax Dna Vaccine (Adult)',
    'Hb-Vax Dna Vaccine (Paediatric)',
    'Hb-Vir 0.5',
    'Hb-Vir 1',
    'Hcg Ivf-c',
    'Heafa',
    'Heafa - F',
    'Hebs Nano D3',
    'Hederal',
    'Hederal Drops',
    'Hedralix',
    'Heet',
    'Helicap',
    'Helicobacter Test, Infai',
    'Hemabate',
    'Hemagel',
    'Hemagel Procto',
    'Heme Iron Polypeptide Gummy Bears',
    'Hemeran',
    'Hemfer',
    'Hemfer Capsules',
    'Heminevrin',
    'Hemoclar',
    'Hemoclin Can Haemorrhoid Gel',
    'Hemoclin Haemorrhoid Gel',
    'Hemodialysis Grade Sodium Bicarbonate ( No. 3p-003)',
    'Hemodialysis Grade Sodium Bicarbonate (No. 3p-001)',
    'Hemohes',
    'Hemovit',
    'Henacyl',
    'Hep-b Gammagee Vaccine',
    'Hepa-Merz',
    'Hepar Sulfuris-Dhu',
    'Hepar-Pos',
    'Heparin',
    'Heparin Leo',
    'Heparin Sodium',
    'Heparin Sodium Flushing Solution',
    'Hepatect',
    'Hepaticum',
    'Hepatitis \'b\' Vaccine ( Rdna )',
    'Hepatitis B Immunoglobulin',
    'Hepatitis-b Vaccine (Rdna)',
    'Hepatitis-b Vaccine (Rdna) Adult',
    'Hepatitis-b Vaccine (Rdna) Pediatric',
    'Hepsal',
    'Hepsera',
    'Hepto Care',
    'Hepuman Berna',
    'Herbal Sleep',
    'Herbifit Hederin',
    'Herbifit Marigold',
    'Herbifit Reuma',
    'Herbokam Plus',
    'Herceptin',
    'Herceptin 600mg',
    'Hermes Cevitt Orange',
    'Hermes Multivit + Calcium',
    'Hermes Multivit Extra',
    'Herpesan',
    'Herron Asperron',
    'Herron Bio C',
    'Herron Calcium Plus',
    'Herron Natural Vitamin E',
    'Herron Paneze',
    'Herron Vitamin B6',
    'Herron Zinc Complex',
    'Herviros S.n',
    'Hestar - 200 (Pentastarch 6%)',
    'Hetlosar',
    'Hetlox',
    'Hexaxim',
    'Hexbio Granules',
    'Hexetidine 0.1%',
    'Hexidine',
    'Hexidine Mouth Wash',
    'Hexigel',
    'Hiace',
    'Hib Titer Vaccine',
    'Hiberix Vaccine',
    'Hibicet Hospital Concentrate',
    'Hibiscrub',
    'Hibisol',
    'Hibitane',
    'Hibitane Antiseptic',
    'Hibitane Concentrate',
    'Hibitane Obstetric',
    'Hibor',
    'Hicet',
    'Hidrasec 100mg',
    'Hidrasec Children 30mg',
    'Hidrasec Infants 10mg',
    'High Potency Calcium Usp',
    'Hijuven',
    'Hikma Midazolam',
    'Hikma Zoledronic Acid',
    'Hikma-Heparin',
    'Himcolin',
    'Himplasia',
    'Hiprex',
    'Hiquin',
    'Hirudoid',
    'Hisdine',
    'Hisol',
    'Hisone',
    'Histabentine',
    'Histac',
    'Histacare',
    'Histalix Expectorant',
    'Histalix Expectorant (Paediatric)',
    'Histaloc',
    'Histan',
    'Histarhine',
    'Histasin',
    'Histergan',
    'Histofen',
    'Histol',
    'Histol Expectorant',
    'Histop',
    'Hiten',
    'Hivid',
    'Hmg Ivf-m',
    'Holoxan',
    'Holoxan With Uromitexan',
    'Hoodia Fit',
    'Hoodia Slim',
    'Hovid Evening Primerose Oil 1000mg',
    'Hovid Omega 3',
    'Hovid Omega3+Garlic',
    'Hrf',
    'Hridayamrith',
    'Humalog',
    'Humalog Kwikpen',
    'Humalog Mix',
    'Humalog Mix 25 Cartridge',
    'Humalog Mix 25 Kwikpen',
    'Humalog Mix Kwikpen',
    'Humalog Npl',
    'Human Albumin',
    'Human Albumin (Imported)',
    'Human Albumin Baxter',
    'Human Albumin Biotest',
    'Human Albumin Biotest (Low Salt Content)',
    'Human Albumin Biotest Isotonic',
    'Human Albumin Infusion',
    'Human Normal Igiv Inj (Imported)',
    'Humektan',
    'Humilin 70/30',
    'Humilin N',
    'Humilin R',
    'Humira',
    'Humotet Vaccine',
    'Humotet Vaccine',
    'Humulin',
    'Humulin N',
    'Humulin Profile',
    'Humulin R',
    'Humulin-n (Isophane)',
    'Humulin-r (Regular)',
    'Hustagil',
    'Hustagil Cold',
    'Hyabak',
    'Hyacyst',
    'Hyal',
    'Hyalase',
    'Hyalase Injection',
    'Hyalgan',
    'Hyaline',
    'Hyalone',
    'Hyaluronidase',
    'Hycamtin',
    'Hycom',
    'Hydergin',
    'Hydra V',
    'Hydracycline',
    'Hydralazine',
    'Hydralyte Oral Rehydration Salts',
    'Hydran',
    'Hydrangea Arborescens Mt-Dhu',
    'Hydrea',
    'Hydrex',
    'Hydrila 25',
    'Hydrocare',
    'Hydrochlorothiazide',
    'Hydrocodone/Acetamin',
    'Hydrocortisone',
    'Hydrocortisone Sodium Succonate',
    'Hydrocortisone Tablets',
    'Hydrocortisone Tabs',
    'Hydrocortisone Usp',
    'Hydrocortone',
    'Hydrocotyl Astiatica Mt-Dhu',
    'Hydrogem',
    'Hydrogem Beauty',
    'Hydrogen Peroxide',
    'Hydrogen Peroxide Solution Bp',
    'Hydromorphone',
    'Hydromorphone Hcl',
    'Hydroxocobalamin',
    'Hydroxychloroquine',
    'Hydroxychloroquine Sulfate',
    'Hydroxyurea',
    'Hydroxyurea Capsules (Imported)',
    'Hydroxyzine',
    'Hyfresh',
    'Hyiodine',
    'Hylo-Care',
    'Hylo-Comod',
    'Hylo-Dual',
    'Hylo-Fort',
    'Hylo-Fresh',
    'Hylo-Gel',
    'Hymovis Hyadd4',
    'Hymox',
    'Hymox Forte',
    'Hyoban',
    'Hyomax Sr',
    'Hyopan',
    'Hyoscyamine Tablets',
    'Hyoscyamine Sr Tablets',
    'Hyperhep',
    'Hyperhep B',
    'Hyperikan',
    'Hyperrab S/d',
    'Hyperrho-d',
    'Hypersal',
    'Hypertet',
    'Hypo Tears Plus',
    'Hypo Tears Plus Sdu',
    'Hyponidd',
    'Hyposec',
    'Hypotears Gel',
    'Hypoten',
    'Hypovase',
    'Hyruan Plus',
    'Hyzaar',
    'i - Profen',
    'Ibrance',
    'Ibu 200',
    'Ibu 400',
    'Ibu 600',
    'Ibucare',
    'Ibuclin Rdy',
    'Ibugesic',
    'Ibulgan',
    'Ibulgan Fc',
    'Ibulife',
    'Ibuphil',
    'Ibuprofen',
    'Ibuprofen Injection',
    'Ibutop',
    'Ic-Green',
    'Icaps Lutein & Zeaxanthin Formula',
    'Ice Power',
    'Iclusig',
    'Icthammol',
    'Idarubicin',
    'Ideos',
    'Ido-a-Tabs',
    'Ido-Becomplex',
    'Ido-c-Tabs',
    'Ido-e-Vimin',
    'Ido-Multi-Syrup',
    'Ido-Multi-Tabs',
    'Ifonee',
    'Ifosfamide',
    'Ifosfamide Injection',
    'Ig Vena',
    'Ii Care',
    'Ilaris',
    'Iliadin',
    'Ilomedin',
    'Ilon Abscess',
    'Ima-Denk 100mg',
    'Ima-Denk 400mg',
    'Imavir',
    'Imbruvica',
    'Imdur',
    'Imfresh',
    'Imigran',
    'Imigran Nasal Spray',
    'Imipenem - Cilastatin Labatec',
    'Imipenem/Cilastatin Hospira',
    'Imipramine',
    'Imipramine Tablets',
    'Imiquimod',
    'Immukin',
    'Immunace',
    'Immunate',
    'Immunoglobulin I.v.',
    'Immunohbs',
    'Immunorho',
    'Immusense',
    'Imnovid',
    'Imodium',
    'Imodium Instants',
    'Imogam Rabies',
    'Imovax D.t. Adult Vaccine',
    'Imovax Polio',
    'Imovax Polio Vaccine',
    'Imove',
    'Implanon',
    'Imprida 10/160',
    'Imprida 10/320',
    'Imprida 5/160',
    'Imprida 5/320',
    'Imprida Hct 10mg/160mg/12.5mg',
    'Imprida Hct 10mg/160mg/25mg',
    'Imprida Hct 5mg/160mg/12.5mg',
    'Imprida Hct 5mg/160mg/25mg',
    'Imukin',
    'Imunovir 500mg',
    'Imuran',
    'Inace',
    'Inactivated Rabies Vaccine',
    'Incivo',
    'Increlex',
    'Incremine With Iron',
    'Incresync',
    'Indanorm',
    'Inderal',
    'Inderal L.a',
    'Indicardin',
    'Indigo Carmyne',
    'Indigocarmine',
    'Indocid',
    'Indocid Pda',
    'Indocid Retard',
    'Indogesic',
    'Indolag',
    'Indolag Retard',
    'Indometacin',
    'Indomethacin',
    'Indomethacin Injection',
    'Indomin',
    'Indulamine',
    'Inegy',
    'Infacol',
    'Infanrix Hep B Vaccine',
    'Infanrix Hexa Vaccine',
    'Infanrix Hib Vaccine',
    'Infanrix Vaccine',
    'Infanrix-Ipv+Hib Vaccine',
    'Infant Sodium Bicarbonate Usp',
    'Infant\'s Tylenol (Cherry Flavour)',
    'Infasurf',
    'Infla-Ban',
    'Infla-Ban S.r.',
    'Inflexal Berna Vaccine',
    'Influcid',
    'Influvac',
    'Influvac Vaccine',
    'Infracyanine',
    'Infuvit Adult',
    'Infuvit Paediatric',
    'Infuvite Paediatric',
    'Inhibace',
    'Inizio',
    'Injectol',
    'Inlyta',
    'Innohep',
    'Inocor',
    'Inovelon',
    'Inrab',
    'Insadol',
    'Insidon',
    'Inspra',
    'Instillagel',
    'Insulatard Hm',
    'Insulatard Hm Penfill',
    'Insulatard Novolet',
    'Insulin H Bio Nph',
    'Insulin H Bio R',
    'Insulin H Mix',
    'Intal',
    'Intal Nebuliser Solution',
    'Intard',
    'Integrilin',
    'Intelence',
    'Intibiol',
    'Intiherp',
    'Intraglobin',
    'Intraglobin F',
    'Intraglobin Iv',
    'Intralipid',
    'Intratect',
    'Intron A',
    'Intron A (Hsa Free)',
    'Intron A (Hsa Free) Multi-Dose',
    'Intuniv Extended Release',
    'Invanz',
    'Invega',
    'Invega Sustenna',
    'Invirase',
    'Invokana',
    'Invoril',
    'Iodine Crystals',
    'Ionil - T',
    'Iontoferron',
    'Iopamiro',
    'Iopidine',
    'Iostat',
    'Ipecac Syrup',
    'Ipecacuahna-Dhu',
    'Ipoget',
    'Ipoz',
    'Ipradol',
    'Ipramax 100mg',
    'Ipramax 25mg',
    'Ipravent Dp Caps',
    'Ipv',
    'Irbea',
    'Irbemac H 150',
    'Irbemac H 300',
    'Irbemac H 300 Plus',
    'Irbenib 150',
    'Irbenib 300',
    'Irbigen',
    'Irbigen-h',
    'Iressa',
    'Irfen Lactabs',
    'Irfen Quicktabs',
    'Iricar',
    'Irinotecan',
    'Irinotecan Hydrochloride',
    'Irinotecan Injection',
    'Irinotecan “Ebewe”',
    'Irinotel',
    'Irinotican Inj (Imported)',
    'Irokid',
    'Iron Complete',
    'Ironorm',
    'Irovit',
    'Irrigant',
    'Irvel',
    'Irvel-h',
    'Isapgel Granules',
    'Isentress',
    'Isepacine I.m./i.v.',
    'Isla Cassis',
    'Isla Mint',
    'Ismafron',
    'Ismelin',
    'Ismo',
    'Isocaine',
    'Isoflurane',
    'Isoket',
    'Isoket 10mg',
    'Isoket Retard',
    'Isoket Retard 40mg',
    'Isoket S/l Tablets',
    'Isoleucine',
    'Isolone',
    'Isomar Naso Decongestant Spray',
    'Isomar Nose Allergy Spray',
    'Isomar Nose And Ears Daily Hygiene Spray',
    'Isomar Nose Decongestant Vials',
    'Isomar Nose Spray No Gas Baby',
    'Isomer Baby',
    'Isoniazid',
    'Isoniazid Tablets',
    'Isoniazide 100mg',
    'Isoprenaline Injection',
    'Isoprinosine',
    'Isoptin',
    'Isoptin Sr',
    'Isopto Atropine',
    'Isopto Carpine',
    'Isordil',
    'Isordil Tembids',
    'Isosorbide',
    'Isosorbide Dinitrate',
    'Isosorbide Dinitrate S/l Tablets',
    'Isosorbide Dinitrate Tablet',
    'Isosorbide Dinitrate Tablets',
    'Isosupra Lidose 16mg',
    'Isosupra Lidose 8mg',
    'Isotrex',
    'Isotrexin',
    'Isovist',
    'Istin',
    'Isuprel',
    'Itami',
    'Itracim',
    'Itrazol',
    'Itrin',
    'Itro D3 Oral Spray',
    'Ivemend',
    'Ivf - C',
    'Ivf - M',
    'Ivy Calm',
    'Ivy Cough Syrup',
    'Ivy Syrup - Joswe Medical',
    'Ivylin',
    'Ivytus',
    'Ixel',
    'Ixempra',
    'Ixime',
    'Jadenu 180mg',
    'Jadenu 360mg',
    'Jadenu 90mg',
    'Jakavi',
    'Jalra',
    'Jalra-m',
    'Jamieson Super Calcium',
    'Jamieson Vitamin C Grape Juice',
    'Janumet',
    'Janumet Xr',
    'Januvia',
    'Jardiance',
    'Jasicone',
    'Javlor',
    'Jazofen',
    'Jectofer',
    'Jeil Cool Pap',
    'Jentadueto',
    'Jetrea',
    'Jevtana',
    'Joflam',
    'Jogel Oral Gel',
    'Joint Flex',
    'Joint Flex Joint Health Supplements',
    'Joint Maintenance Tablets',
    'Jointa Powder',
    'Jointace',
    'Jointace Gel',
    'Jointace Max',
    'Jointaid',
    'Jointflex',
    'Jointlube Sterile Sodium Hyluronate Solution 1%',
    'Jointlube Tablet',
    'Jopadol (Adult)',
    'Jopadol (Infant)',
    'Jopamol',
    'Jos-Pan',
    'Joymax',
    'Jp Omega-3',
    'Julmentin',
    'Julmentin Forte',
    'Julmentin I.v.',
    'Julphacef',
    'Julphacef Im/Iv',
    'Julphamox',
    'Julphapen',
    'Jurnista',
    'Jusline',
    'Jusline N',
    'Jusline R',
    'Jusprin',
    'Jusprin C',
    'Juvelon',
    'Juvicor',
    'k-Contin Continus',
    'k-Flam',
    'k-y Jelly',
    'Kabikinase (Streptokinase) Inj.',
    'Kabiven',
    'Kabiven Peripheral',
    'Kadcyla',
    'Kafosed',
    'Kalcipos-d',
    'Kaletra',
    'Kalium Bichromicum-Dhu',
    'Kalium Carbonicum - Dhu',
    'Kalium Muriaticum, Biochemic Remedy No. 4',
    'Kalium Phosphoricum, Biochemic Remedy No. 5',
    'Kalium Sulfuricum, Biochemic Remedy No. 6',
    'Kalydeco',
    'Kamilari Capsules',
    'Kamilari Liquid',
    'Kapolin',
    'Kapron',
    'Kaptin',
    'Kaptin Ii',
    'Karnim Plus',
    'Karvol',
    'Kay-Cee-l',
    'Kcl D5 Ns',
    'Kcl D5ns',
    'Kdiron',
    'Kefexin',
    'Keflex',
    'Keflodin',
    'Kefloxin',
    'Kelfer',
    'Kelo-Cote',
    'Kemadrin',
    'Kemicetine',
    'Kemocarb',
    'Kenaban Cream',
    'Kenacin',
    'Kenacomb',
    'Kenacort',
    'Kenacort 0.1%',
    'Kenacort-a',
    'Kenaleen Cream',
    'Kenalog',
    'Kenazole',
    'Kenicet',
    'Keppra',
    'Keppra Xr',
    'Keralyte Forte',
    'Keri',
    'Keri Hand',
    'Kesol-20',
    'Ketalar',
    'Ketalar Injection',
    'Ketamine',
    'Ketamine - Fresenius',
    'Ketek',
    'Ketesse',
    'Ketoderm',
    'Ketofan',
    'Ketone Analyzer Device For Patient Personal Use',
    'Ketonil',
    'Ketorolac',
    'Ketosteril',
    'Ketovite',
    'Ketovite Liquid',
    'Ketrolac',
    'Key-Cee-l',
    'Keytruda',
    'Khasceeze Cough Syrup',
    'Kidcap',
    'Kiddi Pharmaton',
    'Kiddi Pharmaton Syrup',
    'Kidflame',
    'Kidicare+',
    'Kiditon',
    'Kidnaps',
    'Kids Calm',
    'Kids Chloraseptic Sore Throat - Grape',
    'Kids Colic',
    'Kids Cough & Cold',
    'Kids Earache',
    'Kids Flu Buster',
    'Kids Plus Drops',
    'Kids Teething',
    'Killy-Lice Shampoo',
    'Kilogest',
    'Kinderimmun',
    'Kineret',
    'Kinevac',
    'Kinzy 10mg',
    'Kinzy 5mg',
    'Kiovig',
    'Kisqali 200mg',
    'Kivexa',
    'Klacid',
    'Klacid I.v.',
    'Klacid Xl',
    'Klamorex',
    'Klarfast',
    'Klaribac',
    'Klarion 125mg/5ml',
    'Klarion 250mg/5ml',
    'Klarion Mr',
    'Klarith',
    'Klarith Er',
    'Klavox',
    'Klean-Prep',
    'Kliogest',
    'Kliovance',
    'Kloroben Oral Rinse',
    'Kloroben Oral Spray',
    'Koate - Dvi Antihemophilic Factor Viii',
    'Kodan Tincture Forte',
    'Koflet',
    'Koflet Syrup',
    'Kofol',
    'Kogenate Fs',
    'Kolantyl Gel',
    'Kolros 10mg',
    'Kolros 20mg',
    'Kolros 40mg',
    'Kolros 5mg',
    'Kombiglyze Xr',
    'Konakion',
    'Konakion Mm',
    'Konakion Mm (Paedriatic)',
    'Konakion Tabs (Imported)',
    'Konsyl 100% Natural Psyllium Fiber Capsules',
    'Konsyl Sugar Free Orange Flavor Psyllium Fiber',
    'Kordel\'s A Thru Z Multi',
    'Kordel\'s Carnix Capsules',
    'Kordel\'s Citrimax Plus Easi - Slim Formula',
    'Kordel\'s Joint Food Max',
    'Kordel\'s Omega Science Natal',
    'Kordel\'s Omega Science Omega 3 Concentrate',
    'Kordel\'s Probiotica P3',
    'Kordel\'s Super Organic Silica Complex',
    'Kordel’s Herbal Sleep',
    'Korean Ginseng',
    'Kryptocur',
    'Kufdrin',
    'Kure Mouth Ulcer Gel',
    'Kuvan',
    'Kwell',
    'Kwell Pc',
    'Kyprolis',
    'Kytril',
    'Kytril (Paediatric)',
    'l\'Il Critters Calcium Gummy Bears With Vitamin D',
    'l\'Il Critters Gummy Vites',
    'l\'Il Critters Immune C Plus Zinc And Echinacea',
    'l-Carn',
    'l-Carnitine',
    'l-Cet',
    'l-Lysine',
    'l-Methionine',
    'l-Thyrox',
    'l-Thyroxin Serb',
    'La Femme',
    'Laberax',
    'Labetalol',
    'Labetalol Hcl Inj. Prefilled Syringe',
    'Labetalol Hrdrochloride',
    'Labetalol Hydrochloride',
    'Labetalol Hydrochloride Injection Usp',
    'Labetalol Tablets',
    'Lacri-Lube',
    'Lactacyd',
    'Lactacyd Feminine Hygiene',
    'Lactacyd Feminine Hygiene Liquid',
    'Lactaid',
    'Lactated Ringer\'s & Dextrose Injection Usp',
    'Lactated Ringer\'s & Dextrose Usp',
    'Lactated Ringer\'s Injection',
    'Lactated Ringer\'s Injection Usp',
    'Lactated Ringer\'s Injection Usp Xxii',
    'Lacto',
    'Lactobact Restore',
    'Lactobiotix',
    'Lactodel',
    'Lactogyn',
    'Lactohil',
    'Lactol',
    'Lactoplex',
    'Lactovita',
    'Lactulose',
    'Lady Contraceptive Vaginal Ovules',
    'Laff',
    'Lagadine',
    'Lagaflex',
    'Lagatrim',
    'Lagatrim Forte',
    'Lagavit B Complex',
    'Lagavit B12',
    'Lamictal',
    'Lamictal Liqui-Tabs',
    'Lamifen',
    'Lamisil',
    'Lamisil Dermgel',
    'Lamisil Once',
    'Lamitor',
    'Lamotrigine',
    'Lamprene',
    'Lamucon',
    'Lanacin',
    'Lanfast',
    'Lanolin',
    'Lanoxin',
    'Lanoxin (Paediatric)',
    'Lanoxin Pg',
    'Lansohet',
    'Lantus',
    'Lantus For Optipen',
    'Lantus Optiset',
    'Lantus Solostar',
    'Lanvis',
    'Lanzor',
    'Largactil',
    'Laronidase',
    'Lartruvo 500mg/50ml',
    'Lasix',
    'Lasix Faible',
    'Lasix Liquidum',
    'Lastacaft',
    'Lastet',
    'Latano',
    'Latanocom',
    'Latuda 18.5mg',
    'Latuda 37mg',
    'Latuda 74mg',
    'Lavigard',
    'Laxal',
    'Laxoberal',
    'Laxocodyl',
    'Laxolac',
    'Laxolyne (Adult)',
    'Laxolyne (Paediatric)',
    'Laxomag',
    'Lazine',
    'Lecrolyn',
    'Ledercort Forte',
    'Lederlon',
    'Lederplex',
    'Lederspan',
    'Ledum-Dhu',
    'Leflocad',
    'Leflox',
    'Legalon',
    'Legalon Forte',
    'Lejam 30mg',
    'Lejam 60mg',
    'Lemna Minor Mt-Dhu',
    'Lemomag',
    'Lemsip',
    'Lemsip Cold & Flu Lemon',
    'Lemsip Flu 12 Hr',
    'Lemsip Max Flu Lemon',
    'Lemtrada',
    'Lendomax',
    'Lenvima 10mg',
    'Lenvima 4mg',
    'Leolyte Apple Flavor',
    'Leolyte Fruit Flavor',
    'Leolyte Grape Flavor',
    'Leolyte Pro Blue Rasberry Flavor',
    'Leolyte Pro Fruit Punch Flavor',
    'Lepicol',
    'Lepicol Plus+',
    'Lepirudin Injection',
    'Leponex',
    'Lercadip',
    'Lescol',
    'Lescol Xl',
    'Let Solution',
    'Letara',
    'Letram',
    'Leucomax',
    'Leucorin',
    'Leucoverin Calcium',
    'Leucovorin Calcium For Injection Usp',
    'Leucovorin Calcium Injection Ip',
    'Leucovorin Calcium Injection Usp',
    'Leukeran',
    'Leustatin',
    'Levact',
    'Levamin',
    'Levamisole',
    'Levanix',
    'Levemir Flexpen',
    'Levemir Penfill',
    'Levetiracetam Er',
    'Levex',
    'Levitra',
    'Levodopa / Carbidopa',
    'Levodopa/Carbidopa',
    'Levoflox',
    'Levofloxacin Sandoz',
    'Levoglen',
    'Levomac',
    'Levomed',
    'Levophed',
    'Levophed Injection',
    'Levorag Emulgel',
    'Levotab',
    'Levothyroxin',
    'Levothyroxine Sodium',
    'Lexaprim',
    'Lexaprim 10mg',
    'Lexin',
    'Lexotanil',
    'Lexpec',
    'Lhrh',
    'Liaida',
    'Libizire',
    'Liblab',
    'Librax',
    'Librocol',
    'Lidaprim',
    'Lidaprim (Children)',
    'Lidaprim Forte',
    'Lidfast',
    'Lidocaine',
    'Lidocaine + Epinephrine',
    'Lidocaine / Epinephrine / Tetracaine (l.e.t.)',
    'Lidocaine 1%',
    'Lidocaine 1% With Epinephrine',
    'Lidocaine 2%',
    'Lidocaine 2% + Adrenaline',
    'Lidocaine 2% With Epinephrine',
    'Lidocaine Ansyr',
    'Lidocaine Hcl',
    'Lidocaine Hcl 1%',
    'Lidocaine Hcl 1% W/v Single Dose (10mg/Ml)',
    'Lidocaine Hcl 2% W/v Single Dose (20mg/Ml)',
    'Lidocaine Hydrochloride',
    'Lidocaine Hydrochloride 4%',
    'Lidocaine Hydrochloride Injection',
    'Lidocaine Hydrochloride Injection Bp',
    'Lidocaine Hydrochloride Injection Usp',
    'Lidocaine Hydrochloride Pfs',
    'Lidocaine Hydrochloride S.a.l.f',
    'Lidocaine Hydrochloride U.s.p.',
    'Lidocaine Injection',
    'Lidocaine Viscous',
    'Lidocaine With Epinephrine',
    'Lidocaine+ Adrenaline',
    'Lidocaine-Adrenaline',
    'Lidocaton',
    'Lidoderm',
    'Lignocaine',
    'Lignocaine Adrenaline',
    'Lignocaine Inj',
    'Lignocaine Injection',
    'Lignocaine Injection Pfs',
    'Lignocaine Preloaded Syringe',
    'Lignocaine With Adrenaline',
    'Lignospan Special',
    'Lignostab-a',
    'Likasin',
    'Limbitrol',
    'Lincocin',
    'Linex Baby',
    'Linex Forte',
    'Linopril',
    'Lintaz 4.5',
    'Linz',
    'Linzocon',
    'Liocaine',
    'Lioresal',
    'Liothyronin',
    'Liothyronine',
    'Liothyronine Tablets',
    'Lipanthyl',
    'Lipigard',
    'Lipimix',
    'Lipiodol Ultra Fluid',
    'Lipiphage',
    'Lipira',
    'Lipitor',
    'Lipitrol',
    'Lipobase',
    'Lipobase Cream',
    'Lipobay',
    'Lipodar 10',
    'Lipodar 20',
    'Lipodar 40',
    'Lipodar 80',
    'Lipofundin',
    'Lipofundin Mct/Lct',
    'Lipoglobin Drops',
    'Lipoglobin Syrup',
    'Lipograsil',
    'Lipomax',
    'Liposic',
    'Lipostat',
    'Lipovenos',
    'Liptomama Powder For Milk Formula',
    'Liquemin',
    'Liquemin S/c',
    'Liquid Paraffin',
    'Liquid Vitamin D3 400iu',
    'Liquifilm Tears',
    'Lisino',
    'Lisinoglen',
    'Lisinopril',
    'Liskonum',
    'Lisotec',
    'Listerine',
    'Litak',
    'Litrison',
    'Little Colds Baby Rub',
    'Liv 52 Ds',
    'Liva',
    'Livatam',
    'Livazo',
    'Liversil',
    'Livial',
    'Livolin Forte',
    'Livostin',
    'Lobet',
    'Locabiosol',
    'Locacorten',
    'Locacorten-Vioform',
    'Locagel',
    'Locasalen',
    'Loceryl',
    'Loceryl Nail Lacquer',
    'Locoid',
    'Locoid Crelo',
    'Locoid Lipo',
    'Lodine',
    'Lodoz',
    'Loflam',
    'Lofral',
    'Logard',
    'Logard Plus',
    'Logynon',
    'Lohist',
    'Lomaherpan',
    'Lomahypericum',
    'Lomal',
    'Lomax',
    'Lomexin',
    'Lomexin T',
    'Lomidex',
    'Lomir',
    'Lomir Sro',
    'Lomotil',
    'Lomustin',
    'Longifene',
    'Lonsurf 15mg/6.14mg',
    'Lonsurf 20mg/8.19mg',
    'Lopace',
    'Loperamide',
    'Loperamide Hcl 2mg',
    'Lopid',
    'Lopodium',
    'Lopram',
    'Lopresor',
    'Lopresor Retard',
    'Lorabid',
    'Loracare',
    'Loradad',
    'Loraday',
    'Lorahist',
    'Loralife',
    'Loramax',
    'Lorano',
    'Loratin',
    'Loratin Instantab',
    'Lorazepam',
    'Lorazepam Injection',
    'Lorfast',
    'Loric',
    'Lorinase',
    'Lorine',
    'Lorine Fm',
    'Lormetazepam',
    'Losakal',
    'Losakal Plus Ds',
    'Losakal Plus Ls',
    'Losart',
    'Losec',
    'Losec Mups',
    'Lotemax',
    'Lotense',
    'Lotriderm',
    'Lovenox',
    'Lovera',
    'Lovir',
    'Lovrak',
    'Low - Lip',
    'Lowrac',
    'Lowvasc',
    'Loxoprel',
    'Loyon',
    'Lozap Zentiva',
    'Lucentis',
    'Lucona',
    'Ludiomil',
    'Luivac',
    'Lukra',
    'Lumigan',
    'Lupron',
    'Lupron Depot',
    'Luveris',
    'Lyclear',
    'Lyclear Dermal Cream',
    'Lycomen',
    'Lycopodium-Dhu',
    'Lycoprost',
    'Lyderm Cream',
    'Lymphoglobuline',
    'Lynparza',
    'Lypotrim',
    'Lyprinol',
    'Lyrica',
    'Lysivit B With Inositol',
    'Lysodren',
    'Lysthenon',
    'Lysthenon Injection (Imported)',
    'Lysthenon Siccum',
    'Lyxumia',
    'm-m-r Ii',
    'm.m.r. Ii Vaccine',
    'M2 Tone',
    'Maalox',
    'Maalox No.2',
    'Maalox Plus',
    'Maalox Stomach Pain',
    'Mabcampath',
    'Mabthera',
    'Mabthera 1400mg',
    'Macrobid',
    'Macrol',
    'Macrolax',
    'Macromax 250',
    'Macromax 40mg/Ml-15 Ml',
    'Macromax 40mg/Ml-22.5 Ml',
    'Macromax 40mg/Ml-30 Ml',
    'Macromax 500',
    'Madecassol',
    'Madecassol Neomycine Hydrocortisone',
    'Madecassol Tulgras',
    'Madopar',
    'Madopar Lt',
    'Mafepain',
    'Maglyphos',
    'Magnacef',
    'Magne B6',
    'Magnesium',
    'Magnesium Additiva',
    'Magnesium Oxide',
    'Magnesium Phosphoricum, Biochemic Remedy No. 7',
    'Magnesium Sulfate',
    'Magnesium Sulphate',
    'Magnesium Sulphate 50%',
    'Magnesium Sulphate Injection',
    'Magnesium Sulphate Paste',
    'Magnesium Verla N',
    'Magnetrex',
    'Magnevist I.v.',
    'Magonate',
    'Maintane',
    'Majestic',
    'Malarone',
    'Malarone Adult Tab',
    'Malarone Adult Tablets',
    'Malarone Paed Tablets',
    'Malarone Paediatric',
    'Malarone Paediatric Tab',
    'Maldocardin',
    'Manal Tablets',
    'Mandelamine',
    'Mandol',
    'Mangesium Sulphate',
    'Manidon',
    'Mannitol',
    'Mannitol 20%',
    'Mannitol Bp',
    'Mannitol In Viaflex Bag',
    'Mannitol Injection Usp',
    'Mannitol Intravenous Infusion Bp',
    'Marcaine Heavy (Buvicaine)',
    'Marcaine Spinal Heavy',
    'Marcofen',
    'Marevan',
    'Marevan(Warfarin) Tablets',
    'Mariagon',
    'Marimer',
    'Marimer Hypertonic',
    'Marimer Hypertonic Baby',
    'Marimer Isotonic Baby',
    'Marnys Acticol',
    'Marnys Artrohelp',
    'Marnys Castor Oil',
    'Marnys Cebida',
    'Marnys Cistomar',
    'Marnys Junior Syrup With Vitamins And Royal Jelly',
    'Marnys M Plus',
    'Marnys Omega 3',
    'Marnys Omega 3.6.7.9',
    'Marnys Omega Junior 3+6',
    'Marnys Propolsaft',
    'Marnys Propoltos',
    'Marnys Vision Help',
    'Marvelon',
    'Marvit D',
    'Marzine',
    'Matador',
    'Materna',
    'Maternace',
    'Mavenclad',
    'Max Relief',
    'Maxalt',
    'Maxi-6',
    'Maxiclear Hayfever & Sinus Relief',
    'Maxidex',
    'Maxigesic',
    'Maxijul',
    'Maxil',
    'Maxinem',
    'Maxipime I.m/i.v',
    'Maxipime Iv',
    'Maxitrol',
    'Mayaderm',
    'Mazit',
    'Mb12',
    'Measles, Mumps And Rubella Vaccine',
    'Mebenda',
    'Mebo',
    'Mebo Scar Ointment',
    'Mebo Wound Dressing',
    'Mebzol',
    'Meclopran',
    'Mecobal',
    'Meconasole',
    'Meconazole',
    'Medacef',
    'Medacid',
    'Medacid Plus',
    'Medacin T',
    'Medaclav',
    'Medacomb',
    'Medafen',
    'Medamol',
    'Medi-Biotin',
    'Mediderm',
    'Medimar Adult And Child Nasal Hygiene Hypertonic Solution',
    'Medimar Pediatric Nasal Hygiene Isotonic Solution',
    'Medisil',
    'Medivitan Iv',
    'Medo Cream',
    'Medo-Axetine',
    'Medoxicam',
    'Medrol',
    'Medroxol',
    'Medroxyprogesterone',
    'Medroxyprogesterone Acetate',
    'Medsten',
    'Medvirox',
    'Medygraine',
    'Mefac',
    'Mefex',
    'Mefoxin',
    'Mega Life Sciences Acnacare',
    'Mega Valian',
    'Megace',
    'Megamox',
    'Megaplex',
    'Megapower Sx',
    'Megatin',
    'Megaton',
    'Megatone Junior Syrup Echinacea',
    'Megatone Vitamins D3',
    'Megaza',
    'Megestrol',
    'Megestrol Acetate',
    'Megestrol Acetate Tab',
    'Megion',
    'Meiact',
    'Mel-Od',
    'Meladine',
    'Meladinin',
    'Meladinine',
    'Melagyn',
    'Melalite Forte',
    'Melatonin',
    'Melatonin Capsules (Imported)',
    'Melatonin Oral Liquid (Imported)',
    'Melem With Marigold',
    'Melflam',
    'Melital',
    'Melix',
    'Melladerm Plus Tulle',
    'Melloxy',
    'Melneurin',
    'Melocam',
    'Melophar',
    'Meloxicam Hexal',
    'Meloxydar',
    'Melrosum',
    'Melrosum Syrup S',
    'Menactra',
    'Menactra Vaccine',
    'Menadiol Diphosphate',
    'Menadiol Sodium',
    'Mencevax Acwy',
    'Meningitec',
    'Meningococcal Polysaccharide Vaccine',
    'Meniphib',
    'Menogon',
    'Menopace',
    'Menopace Plus Tablets',
    'Menopur',
    'Mensana',
    'Mensana Tonic',
    'Mentex',
    'Menthol',
    'Mentholatum',
    'Mepaco Shark Care',
    'Mephamycin Lactabs',
    'Mephaquin',
    'Mephenon',
    'Mephyton',
    'Mepicaton',
    'Mepron',
    'Merbentyl',
    'Mercaptopurine',
    'Mercurius Solubilis Hahnemanni-Dhu',
    'Mercurochrome',
    'Merional',
    'Merislon',
    'Merocet',
    'Meronem I.v',
    'Meroparon',
    'Meropenem',
    'Meropenem Panpharma 1g',
    'Meruvax Ii Vaccine',
    'Mesalazine',
    'Mesna Ampules (Imported)',
    'Mesporin I.m.',
    'Mesporin I.v.',
    'Mestane',
    'Mestinon',
    'Metalor',
    'Metalyse',
    'Metamucil',
    'Metamucil Instant Mix',
    'Metaphage',
    'Metaz',
    'Metenix',
    'Metfor',
    'Metformin',
    'Methacin',
    'Methadone',
    'Methenamine Mandelate',
    'Methergin',
    'Methimazole Tablets',
    'Methionine',
    'Methocarbamol',
    'Methoddraine Minceur',
    'Methodraine Minceur',
    'Methotrexat Ebewe',
    'Methotrexate',
    'Methotrexate 25mg/Ml',
    'Methotrexate Injection',
    'Methotrexate Sodium Injection',
    'Methotrexate Tabs (Imported)',
    'Methoxsalen',
    'Methycobal',
    'Methyl Prednisolon',
    'Methylcellulose',
    'Methyldopa',
    'Methylene Blue',
    'Methylene Blue Injection',
    'Methylergometrine',
    'Methylergometrine Inj Ip',
    'Methylprednisolone',
    'Methylprednisolone Mylan',
    'Methylprednisolone Sodium Succinate Im/Iv',
    'Methylthioninium Chloride Injection Usp',
    'Metiblo',
    'Metoclopramide',
    'Metoclopramide Injection',
    'Metohexal Succ',
    'Metoject',
    'Metoject Pfs Inj.',
    'Metolar',
    'Metolazone',
    'Metopirone',
    'Metoprolol',
    'Metoprolol Injection',
    'Metoprolol Succinate Er',
    'Metoram',
    'Metosil',
    'Metris',
    'Metrolag',
    'Metronidazole',
    'Metronidazole Injection Usp',
    'Metronidazole S.a.l.f',
    'Metrosa',
    'Metrozole',
    'Meva',
    'Mevacor',
    'Mexana Medicated',
    'Mexetil',
    'Mexiletine',
    'Mezacol',
    'Mezereum-Dhu',
    'Mgvita',
    'Miacalcic',
    'Miacalcic Nasal',
    'Miacin',
    'Miacin I.v/i.m',
    'Micardis',
    'Micardis Plus',
    'Micoglen',
    'Micoter',
    'Micover-h',
    'Micralax',
    'Microclisma',
    'Microcyn Skin & Wound Hydrogel',
    'Microgynon',
    'Microlax',
    'Microlax Bebe Micro-Enema',
    'Microlax Micro-Enema',
    'Microsafe Epicyn Scar Hydrogel',
    'Microsafe Pediacyn',
    'Microvisc',
    'Mictonorm',
    'Midaflex',
    'Midalgan',
    'Midalgyl',
    'Midarine',
    'Midazolam Syp (Per Ml)',
    'Midodrine',
    'Midopril',
    'Midrone Extra',
    'Midy',
    'Migranerton',
    'Migril',
    'Mikacin I.m/i.v',
    'Mikostat',
    'Mikostat Baby',
    'Mikozal',
    'Milk Of Magnesia',
    'Milrinone',
    'Milrinone 1mg/Ml (Stragen)',
    'Milrinone Lactate',
    'Milrinone Lactate Injection',
    'Mim Drops',
    'Mimi Bears Child Multivitamin',
    'Mimpara',
    'Minavit Stress',
    'Mineravit',
    'Minesse',
    'Mini-Glynase',
    'Minidiab',
    'Minihep',
    'Minims Amethocaine Hydrochloride',
    'Minims Artificial Tears',
    'Minims Atropine Sulphate',
    'Minims Benoxinate (Oxybuprocaine)',
    'Minims Cyclopentolate Hydrochloride',
    'Minims Fluorescein',
    'Minims Fluorescein Sodium',
    'Minims Gentamycin Sulphate',
    'Minims Lignocaine & Fluorescein',
    'Minims Oxybuprocaine Hydrochloride',
    'Minims Phenylephrine',
    'Minims Phenylephrine Hcl',
    'Minims Pilocarpine Nitrate',
    'Minims Proxymetacaine Hcl',
    'Minims Tetracaine',
    'Minims Tetracaine Hydrochloride',
    'Minims Tropicamide',
    'Minipres',
    'Minirin',
    'Minirin Intranasal Solution',
    'Minirin Melt',
    'Minisec',
    'Minisun',
    'Minitran',
    'Miniversol',
    'Miniversol Nacl',
    'Minms Povidone Iodine',
    'Minocin',
    'Minocin Pellet Filled',
    'Minocycline',
    'Minulet',
    'Miochol-e',
    'Miostat',
    'Miralax',
    'Miran',
    'Miranax',
    'Mirapexin',
    'Mirapexin Prolonged Release',
    'Miraxid',
    'Miraxid Forte',
    'Miraxid Paediatric',
    'Mirazol',
    'Mircera',
    'Mirena',
    'Mirtazapine',
    'Mirvaso 3mg/g',
    'Misodel 200 Mcg',
    'Misoprostol',
    'Mistdress',
    'Mithra Cald3',
    'Mithra Folic',
    'Mitomycin',
    'Mitomycin Injection',
    'Mitomycin-c',
    'Mitoxantron Ebewe',
    'Mitoxantrone Injection',
    'Mitoxantrone Injection Usp',
    'Mitoxantrone Sterile Concentrate',
    'Mitrolan',
    'Mivacron',
    'Mix-o-Vit',
    'Mixavit',
    'Mixavit - M',
    'Mixif',
    'Mixtard',
    'Mixtard Novolet',
    'Mixtard Penfill',
    'Mobic',
    'Mobilat',
    'Mobilat-n',
    'Mobilisin',
    'Mobon',
    'Moclobemide',
    'Moctan 150mg',
    'Modecate',
    'Modigraf',
    'Modiodal',
    'Mododom',
    'Moduretic',
    'Mofetab',
    'Molaxole',
    'Molcer',
    'Mometamed',
    'Mometix Aq',
    'Mono-Embolex',
    'Mono-Tildiem Sr',
    'Monocef',
    'Monoclox 250mg',
    'Monoclox 500mg',
    'Monomak 20mg',
    'Monomak 40mg',
    'Monoparin',
    'Monopas',
    'Monotard Hm',
    'Monotest',
    'Monotrim',
    'Monozide',
    'Monsel\'s Solution',
    'Montas',
    'Montegen',
    'Montikar',
    'Monuril 3g',
    'Monurol',
    'Moorvisc',
    'Moov Neck And Shoulders',
    'Moov Rapid Relief',
    'Moov Xtra Strength Ointment',
    'Moraten Berna Vaccine',
    'Morphgesic Sr',
    'Morphine',
    'Morphine (Immediate Release)',
    'Morphine Preservative Free Inj.',
    'Morphine Sulphate',
    'Morsep',
    'Mosedin',
    'Mosegor',
    'Motilium',
    'Motilium (Adult)',
    'Motilium (Babies)',
    'Motilium (Children)',
    'Motilone',
    'Motinil',
    'Motrinex',
    'Mountain Herbz Andropower Capsules',
    'Mountain Herbz Dygez Syrup (Mango Flavour)',
    'Mountain Herbz Dygez Syrup (Pineapple Flavour)',
    'Mountain Herbz Dygez Syrup(Mango Flavour)',
    'Mountain Herbz Dygez Syrup(Pineapple Flavour)',
    'Mountain Herbz Gynopower',
    'Moven',
    'Movicol',
    'Movicol Paediatric Plain',
    'Movicol Paediatric Sachets',
    'Movicol Paediatric Sachets (Imported)',
    'Movicol Pediadiatric Chocolate Flavour',
    'Movicol Pediatric',
    'Moviprep Orange Sachets',
    'Movox',
    'Moxal',
    'Moxal Ii',
    'Moxal Plus',
    'Moxiflox',
    'Moxigram',
    'Moxiwar 400',
    'Mr. Tumee Calcium Plus Vitamin D',
    'Mr. Tumee Dha Gumee',
    'Mr. Tumee Fiber Gumee',
    'Mr. Tumee Multi-Vitamin & Mineral',
    'Mr. Tumee Multivitamin & Mineral Antioxidant, Fruit, Vegetable & Fiber',
    'Mr. Tumee Multivitamin & Mineral Sugar Free',
    'Mr. Tumee Vitamin C',
    'Mr. Tumee Vitamin D',
    'Mr. Tumee-Echinacea Plus Vitamin C & Zinc',
    'Msi',
    'Mucaine',
    'Muciclar (Adult)',
    'Muciclar (Paediatric)',
    'Mucinex',
    'Mucinum With Cascara Extract',
    'Mucipulgite',
    'Mucofree',
    'Mucogel',
    'Mucolan',
    'Mucolase',
    'Mucolyte',
    'Mucomix',
    'Mucopain',
    'Mucosolvan',
    'Mucosolvan L.a',
    'Mucostop',
    'Mucum',
    'Mukinate',
    'Multaq',
    'Multi Sanostol',
    'Multi-Delyn With Iron Liquid',
    'Multi-Gyn Femiwash',
    'Multiactive Women',
    'Multiadults',
    'Multibionta Forte N',
    'Multidelyn Liquid',
    'Multiparin',
    'Multiron M',
    'Multisure For Woman',
    'Multivitamin',
    'Multivitamin Mango Chewable Tablets (Amosvital)',
    'Mumpsvax Vaccine',
    'Mupirocin',
    'Murine',
    'Muro-128 Ophth Soln (Major)',
    'Musaril',
    'Muscadol',
    'Muse',
    'Mustargen',
    'Musterol Deep Strength',
    'Mustine Hcl',
    'Mutaflor',
    'Mutaflor 70mg',
    'Mutaflor Suspension',
    'Muti-12 / K1',
    'Muxava 400',
    'Mxl',
    'Myambutol',
    'Mycamine',
    'Myco Hermal',
    'Mycobutin',
    'Mycoderm',
    'Mycoheal',
    'Mycoheal Hc',
    'Mycokem',
    'Mycosat',
    'Mycospor',
    'Mycoster',
    'Mydocalm',
    'Mydriacyl',
    'Myfortic',
    'Mylanta Ii',
    'Myleran',
    'Mylotarg',
    'Mynah',
    'Myo Powder',
    'Myobloc',
    'Myocet',
    'Myogesic',
    'Myonal',
    'Myotonine',
    'Myozyme',
    'Mysoline',
    'n-Zym 3',
    'Naabak',
    'Nadine',
    'Nadixa',
    'Nadolol',
    'Naglazyme',
    'Nalbuphine',
    'Nalbuphine Mylan',
    'Nalbuphine Serb',
    'Nalcpor',
    'Nalidram',
    'Nalorex',
    'Naloxone',
    'Naloxone Hydrochloride',
    'Naloxone Hydrochloride - Fresenius',
    'Naloxone Hydrochloride Neonatal - Fresenius',
    'Naphcon-a',
    'Naprex',
    'Naprosyn',
    'Naproxen',
    'Naramig',
    'Narapril',
    'Narcan',
    'Narcan Im/Iv',
    'Narcan Injection',
    'Narcan Neonatal Im/Iv',
    'Nardil',
    'Naropin',
    'Nasehaler',
    'Nasivin (Adult)',
    'Nasivin (Paediatric)',
    'Nasomist Plus',
    'Nasomist-Plus',
    'Nasonex',
    'Natacyn',
    'Natalben Plus',
    'Natalcare',
    'Natalins',
    'Natazone',
    'Natrecor',
    'Natrecor Injection',
    'Natrilix Sr',
    'Natrium Muriaticum Biochemic Remedy No. 8',
    'Natrium Penicillin G',
    'Natrium Phosphoricum - Dhu',
    'Natrium Sulfuricum, Biochemic Remedy No. 10',
    'Natriumthiosulfat',
    'Natuala One 25',
    'Natulan',
    'Natural Life Omega 3',
    'Natural Life Royal Jelly',
    'Natural Wealth Evening Primrose Oil',
    'Natural Wealth Stress Formula With Zinc',
    'Natural Wealth Time Release B Complex + C',
    'Natural Wealth Time Release Vitamin C With Rose Hips',
    'Natural Wealth Vitamin B6',
    'Natural Wealth Vitamin E',
    'Natural Wealth Vitamins For Hair',
    'Naturalyte',
    'Nature Essential Chelated Calcium',
    'Nature Made 100% Vegetarian Omega-3',
    'Nature Made Acai+Superfruit',
    'Nature Made C Vitamin',
    'Nature Made Calcium Magnesium Zinc',
    'Nature Made Calcium With Vitamin D3',
    'Nature Made Chewable C Vitamin',
    'Nature Made Chewable D3 Vitamin',
    'Nature Made Digestive Health Probiotic',
    'Nature Made Folic Acid',
    'Nature Made Multi Prenatal',
    'Nature Made Odor Control Garlic',
    'Nature Made Super B- Complex',
    'Nature Made Triple Flex (Triple Strength)',
    'Nature Made Vitamin E',
    'Nature\'s Bounty C & E',
    'Nature\'s Bounty Calcium 600 Plus Vitamin D',
    'Nature\'s Bounty Haemofer',
    'Nature\'s Bounty Lutein',
    'Nature\'s Bounty Pregnaplus',
    'Nature\'s Bounty Vitamin E-400 Iu Pure Dl-Alpha',
    'Natures Bounty C And E',
    'Natures Bounty Calcium 600',
    'Natures Bounty Calcium With Vit D',
    'Natures Bounty E Plus Selenium',
    'Natures Bounty Easy Iron',
    'Natures Bounty Haemo Fer',
    'Natures Bounty Hair, Skin And Nails',
    'Natures Bounty Iron',
    'Natures Bounty Q-Sorb Co Q10',
    'Natures Bounty Vitamin D3',
    'Natures Bounty Vitamin D3 Tablet',
    'Natures Bounty Yeast Free Chromium Picolinate',
    'Natures Bounty-Evening Primorse',
    'Natures Bountyq Sorb Co Q-10',
    'Nauidoxide',
    'Nausidom',
    'Navelbine',
    'Navidoxine',
    'Nazolin',
    'Nebcin',
    'Nebido',
    'Nebilet',
    'Nebilet Plus 5mg/12.5mg',
    'Nebilet Plus 5mg/25mg',
    'Negacef',
    'Negacef Im',
    'Negacef Im/Iv',
    'Negacef Iv',
    'Negafen',
    'Negazole',
    'Negram',
    'Negram (Paediatric)',
    'Nelcium',
    'Neo Baby',
    'Neo Healar',
    'Neo Synephrine',
    'Neo Synephrine 12 Hours',
    'Neo-Haemorrhan',
    'Neo-Lidocaton',
    'Neo-Medrol',
    'Neo-Mercazole',
    'Neocef',
    'Neocipro',
    'Neoclav',
    'Neocoff',
    'Neocoff - Dm',
    'Neocoff Junior',
    'Neocold',
    'Neocycline',
    'Neoday',
    'Neodex',
    'Neoferon',
    'Neoflam',
    'Neoflam Retard',
    'Neoflex Joint Repair',
    'Neofolic',
    'Neogastro',
    'Neogastro Plus',
    'Neogyl',
    'Neoidra',
    'Neolyte',
    'Neolyte Infusion',
    'Neomeladinine',
    'Neomeladinine F.r',
    'Neomercazole',
    'Neomet',
    'Neomet-Xr',
    'Neomol',
    'Neomol Cf',
    'Neomol Cold & Flu',
    'Neomol Extra',
    'Neomol Plus',
    'Neomox',
    'Neomycin',
    'Neomycin Tablets',
    'Neopharmatonic',
    'Neoprazole',
    'Neopred-p',
    'Neopril',
    'Neoprofen',
    'Neos-k',
    'Neosolvon',
    'Neosorbide',
    'Neosorbide-Sr',
    'Neosporin',
    'Neostigmin',
    'Neostigmine',
    'Neostigmine Injection',
    'Neostigmine Methylsulphate - Fresenius',
    'Neostigmine Methysulphate 0.5 Mg/Ml',
    'Neotenol',
    'Neoterb',
    'Neotigason',
    'Neoventil',
    'Neoxicam',
    'Neoxidil',
    'Neoxime',
    'Nephlex Rx',
    'Nephrosteril',
    'Nephrosteril Iv Infusion',
    'Nephrovite',
    'Neprinol Afd Capsules',
    'Nerisone',
    'Nerisone C',
    'Nerisone Fatty',
    'Nerisone Forte Fatty',
    'Nervan',
    'Nervikan',
    'Nervz',
    'Nethaprin Expectorant',
    'Netromycine',
    'Netromycine (Paediatric)',
    'Neulastim',
    'Neumega',
    'Neupogen',
    'Neupro',
    'Neupro Patch',
    'Neurobion',
    'Neurofort',
    'Neurogin',
    'Neurontin',
    'Neuroplex',
    'Neurorubine Forte Lactabs',
    'Neurovitan',
    'Neurozan',
    'Neutradonna',
    'Neutralca-s',
    'Nevanac',
    'New Mixavit',
    'Newmed Nasal Spray',
    'Newmed Throat Spray',
    'Nexavar',
    'Nexferrous',
    'Nexib',
    'Nexium',
    'Nexolid 600',
    'Nexpro',
    'Nexterone',
    'Niacin',
    'Niacin (Nicotinic Acid)',
    'Niacinamide',
    'Nice Cherry',
    'Nice Citrus',
    'Nice Honey Lemon',
    'Nice Menthol Eucalyptus',
    'Nice Vitamin C',
    'Nicolan Tts',
    'Nicorandil',
    'Nicorette',
    'Nicorette Freshfruit',
    'Nicorette Mint',
    'Nicotinell Fruit',
    'Nicotinell Mint',
    'Nicotinell Tts',
    'Nidazole',
    'Nifecard',
    'Nifuram',
    'Nifuran',
    'Nilstat',
    'Nimbex',
    'Nimbex Forte',
    'Nimed',
    'Nimenrix',
    'Nimotop',
    'Niquitin Mint',
    'Nisita Nasal',
    'Nisita Nasal Spray',
    'Nitrazepam',
    'Nitro-Dur',
    'Nitrobid',
    'Nitrocin',
    'Nitrocine',
    'Nitrocine Injection (Imported)',
    'Nitrocontin Continus',
    'Nitroderm Tts',
    'Nitrofurantoin',
    'Nitroglycerin',
    'Nitroglycerine',
    'Nitrolingual',
    'Nitronal Aqueous',
    'Nitropress',
    'Nitroquick',
    'Nitrotab',
    'Nivaquine',
    'Nivestim 120',
    'Nivestim 300',
    'Nivestim 480',
    'Nizomer Isotonic Nasal Spray',
    'Nizoral',
    'No Burn',
    'No-Uric',
    'Nobrium',
    'Nocal',
    'Nocedan',
    'Noctissin',
    'Noctran',
    'Nolvadex',
    'Nolvadex - D',
    'Nonpyrogenic Acetate Hemodialysis Concentrate F1 (3-001-010)',
    'Nonpyrogenic Acetate Hemodialysis Concentrate F2 (3-002-010)',
    'Nonpyrogenic Acetate Hemodialysis Concentrate F3 (3-003-010)',
    'Nonpyrogenic Acetate Hemodialysis Concentrate F4 (3-004-010)',
    'Nonpyrogenic Acetate Hemodialysis Concentrate F5 (3-005-010)',
    'Nonpyrogenic Acetate Hemodialysis Concentrate F6 (3-006-010)',
    'Nonpyrogenic Acid Concentrate For Bicarbonate Hemodialysis (12-110-005)',
    'Nonpyrogenic Acid Concentrate For Bicarbonate Hemodialysis (12-111-005)',
    'Nonpyrogenic Acid Concentrate For Bicarbonate Hemodialysis (12-123-005)',
    'Nonpyrogenic Acid Concentrate For Bicarbonate Hemodialysis (3-017-005)',
    'Nonpyrogenic Acid Concentrate For Bicarbonate Hemodialysis (3-023-005)',
    'Nootropil',
    'Nopain',
    'Nopain Ds',
    'Noracin',
    'Noracod',
    'Noractone',
    'Noradran',
    'Noradrenaline (Base) Aguettant',
    'Noradrenaline Aguettant',
    'Norcipen',
    'Norcipen Forte',
    'Norcuron',
    'Nordette',
    'Norditropin',
    'Norditropin Nordilet',
    'Norditropin Penset',
    'Norditropin Simplexx',
    'Norepine',
    'Norepinephrine',
    'Norethisterone',
    'Norgalax (Microenema)',
    'Norgeston',
    'Norgotin',
    'Noriday',
    'Norimin',
    'Norinyl',
    'Normacol',
    'Normacol Plus',
    'Normaline',
    'Normix',
    'Normolip',
    'Normosang',
    'Normoten',
    'Noroxin',
    'Norpace',
    'Norpress',
    'Norprolac',
    'Norrepinephrine',
    'Nortrime',
    'Nortriptyline',
    'Norvasc',
    'Norvir',
    'Noscam',
    'Nova T',
    'Novalan',
    'Novamentin',
    'Novantrone',
    'Novapen',
    'Novastan',
    'Novatretin',
    'Noviral',
    'Novirax',
    'Novo-Atenolol',
    'Novo-Captoril',
    'Novo-Medron',
    'Novo-Nifedin',
    'Novo-Pirocam',
    'Novo-Ranidine',
    'Novoeight 1000 Iu',
    'Novoeight 1500 Iu',
    'Novoeight 2000 Iu',
    'Novoeight 250 Iu',
    'Novoeight 3000 Iu',
    'Novoeight 500 Iu',
    'Novogrel',
    'Novomega',
    'Novomix Flexpen',
    'Novomix Flexpen 30',
    'Novomix Flexpen 50',
    'Novomix Penfill',
    'Novonorm',
    'Novorapid',
    'Novorapid Flexpen',
    'Novorapid Penfill',
    'Novoseven',
    'Novoter',
    'Novoter Gentamycin',
    'Novuhair',
    'Now Calcium & Magnesium With Vitamin D And Zinc',
    'Now Chitosan With Chromium',
    'Now Coq 10 With Selenium And Vitamin E',
    'Now Daily Vits',
    'Now Double Strenght Iron 36mg',
    'Now Dry E',
    'Now Glucosomine & Chondriotin Plus Msm',
    'Now Kid Vits Orange Splash',
    'Now Natural E Plus',
    'Now Omega-3',
    'Now Prenatal',
    'Now Royal Jelly',
    'Now Superomega 3-6-9',
    'Now Vitamin D3',
    'Noxafil',
    'Nozaline Nasal Rinsing Fluid',
    'Nozinan',
    'Nplate',
    'Nrgy+',
    'Nu - Seals',
    'Nubain Im/Iv',
    'Nucala',
    'Nuelin Sa',
    'Nupenta 20',
    'Nupenta 40',
    'Nurofen',
    'Nurofen Cold And Flu',
    'Nurofen Express',
    'Nurofen For Children',
    'Nurofen Liquid Capsules',
    'Nurofen Migraine',
    'Nursing Cream',
    'Nutra Drops',
    'Nutraderm',
    'Nutraderm Lotion',
    'Nutraplus',
    'Nutraveda Stress Plus Iron',
    'Nutravit',
    'Nutren Diabetes',
    'Nuvaring',
    'Nux Vomica-Dhu',
    'Nyda Spray',
    'Nyolol',
    'Nystalocal',
    'Nystatin',
    'Ocean Spray',
    'Oceral',
    'Ociano-Plus Nasal Spray',
    'Ocium Forte Tablets',
    'Ocrevus',
    'Octagam',
    'Octanate',
    'Octanine F',
    'Octaplas (a Blood Group)',
    'Octaplas (Ab Blood Group)',
    'Octaplas (b Blood Group)',
    'Octaplas (o Blood Group)',
    'Octaplex',
    'Octasa',
    'Octenisept Vaginal Therapeutic Agent',
    'Octocaine',
    'Octocaine 100',
    'Octoret',
    'Octostim',
    'Octovit',
    'Octreotide',
    'Octreotide Acetate',
    'Octreotide Acetate Injection',
    'Octreotide Acetate Omega',
    'Octreotide Inj',
    'Ocubrax',
    'Oculac',
    'Oculosan',
    'Ocumol',
    'Ocured',
    'Ocusoft Lid Scrub Plus',
    'Ocuvite',
    'Od-Tam 0.4',
    'Oditel',
    'Odrik',
    'Ofev 100',
    'Ofev 150',
    'Oflacin',
    'Ofloaxcin { Falcon }',
    'Oflox',
    'Oftalar',
    'Oftalmolosa Antiedema',
    'Oftalmolosa Cusi Atropine',
    'Oftalmolosa Cusi Blefarida',
    'Oftalmolosa Cusi Chloramphenicol',
    'Oftalmolosa Cusi De Icol',
    'Oftalmolosa Cusi Erythromycin',
    'Oftalmolosa Cusi Gentamicin',
    'Oftalmolosa Cusi Medricol',
    'Oftalmolosa Cusi Pilocarpine',
    'Oftalmotrim',
    'Oftan Timolol',
    'Oilatum',
    'Oilatum Emolient',
    'Oily Phenol',
    'Okacin',
    'Olanza 10',
    'Olanza 5',
    'Olanzapine',
    'Olanzapine 5mg Orodispersible',
    'Olbas Oil',
    'Olfast',
    'Olfen',
    'Olfen Dispersible',
    'Olfen Lactabs',
    'Olfen Sr Depocaps',
    'Olfen Sr Depotabs',
    'Olfen-75 Sr Depotabs',
    'Olimel N5e',
    'Olimel N7e',
    'Olimel N9',
    'Olimel N9e',
    'Olmetec',
    'Olmetec Plus',
    'Olmicard',
    'Olumiant 2mg',
    'Olumiant 4mg',
    'Olysio',
    'Omace',
    'Omaceph',
    'Omacid',
    'Omacillin',
    'Omacip',
    'Omacor',
    'Omafen',
    'Omathrocin',
    'Omcet',
    'Ome-q',
    'Omecare',
    'Omechol',
    'Omedar',
    'Omefa Omega 3',
    'Omega 3 (Natural Fish Oil) Softgels',
    'Omega 3 Fish Oil',
    'Omega Junior',
    'Omega-3',
    'Omega-H3',
    'Omegaform 375 Epa-Konzentrat+',
    'Omegaven',
    'Omegavyte E Liquicap',
    'Omegavyte Liquicaps',
    'Omeprex',
    'Omeral',
    'Omezyn',
    'Omformin',
    'Omidria',
    'Omiz',
    'Omnaris',
    'Omnic',
    'Omnic Ocas',
    'Omnicef',
    'Omnipaque',
    'Omniscan',
    'Omol',
    'Omol Extra',
    'Omvil',
    'Onbrez Breezhaler',
    'Oncaspar',
    'Oncotice',
    'Oncovin',
    'Oncoxin Oral Solution',
    'Onda',
    'Ondansetron',
    'Ondansetron8mg',
    'Ondem',
    'One-Alpha',
    'Onglyza',
    'Onoton',
    'Onset',
    'Op Body Lotion',
    'Op Initiator Lotion',
    'Op Maintainer Cream',
    'Op Scalp Gel',
    'Opdivo',
    'Ophtamolol',
    'Opilon',
    'Opizole',
    'Opizole B',
    'Opram',
    'Oprazole',
    'Opsite Spray',
    'Opsumit',
    'Optasone',
    'Opticare',
    'Optichlor',
    'Opticin',
    'Opticrom',
    'Opticyclin',
    'Optidex - T',
    'Optidrin',
    'Optiflox',
    'Optifresh',
    'Optifucin',
    'Optilone',
    'Optimal',
    'Optimark',
    'Optimol',
    'Optipred',
    'Optiray',
    'Optive',
    'Optive Fusion',
    'Optive Ud',
    'Optivin',
    'Optizolin',
    'Optone',
    'Optrex',
    'Optrex Medicated',
    'Opvero Vaccine',
    'Ora Herp',
    'Ora Plus',
    'Ora Sweet',
    'Orabalance',
    'Orablend',
    'Oracea',
    'Oracort',
    'Oraheal',
    'Oral Bivalent Types 1 And 3 Poliomyelitis Vaccine',
    'Oral Poliomyelitis Vaccine',
    'Oral Rehydration Salts',
    'Oraldene Mouth Wash',
    'Oralite',
    'Oramax',
    'Oramorph',
    'Orap Forte',
    'Oraplus',
    'Orasweet',
    'Orasweet Sf',
    'Oratane',
    'Orencia',
    'Orfadin',
    'Orfiril Retards',
    'Orgalutran',
    'Orgametril',
    'Oribact',
    'Oribact Mixture',
    'Orlin',
    'Ornithine',
    'Orofar',
    'Orphadin',
    'Ors',
    'Ors - Reduced Osmolarity (Orange Flavour)',
    'Orthovisc',
    'Ortis Ananas',
    'Ortis Cell Protect',
    'Ortis Pure Plan',
    'Ortis Vital Iron Plus',
    'Ortisan Fruit Cubes',
    'Oruvail',
    'Oscillococcinum',
    'Osicart',
    'Osicart Forte',
    'Ospamox',
    'Osparen',
    'Ospen',
    'Ospexin',
    'Ospolot',
    'Ostac',
    'Ostenil',
    'Ostenil Plus',
    'Osteo Bi Flix',
    'Osteo-Alfa',
    'Osteocare',
    'Osteocare Chewable Tablets',
    'Osteocare Fizz Effervescent',
    'Osteocare Plus Dual Pack',
    'Osteocare Plus Glucosamine & Chondroitin',
    'Osteohelp Complex Liquid',
    'Osteomin',
    'Osteorapid Gel',
    'Osteve',
    'Otezla 10mg, 20mg & 30mg',
    'Otezla 30mg',
    'Otipax',
    'Otocalm',
    'Otomize',
    'Otosan Nasal Spray',
    'Otosan Nasal Spray Baby',
    'Otosan Nasal Wash Spray + Kit',
    'Otosan Natural Ear Drops',
    'Otosan Spray For Your Ear Care',
    'Otoseptil',
    'Otosporin',
    'Otozol',
    'Otrisalin Metered Dose Nasal Spray',
    'Otrivin',
    'Otrivin (Adult)',
    'Otrivin (Children)',
    'Otrivin (Paediatric)',
    'Otrivin Complete',
    'Otrivin Menthol',
    'Ovestin 1mg Cream',
    'Ovitrelle',
    'Oxacin',
    'Oxadilene',
    'Oxaliplatin',
    'Oxaliplatin Ebewe',
    'Oxaliplatin For Injection Bp',
    'Oxaliplatin Hospira',
    'Oxami',
    'Oxazoline',
    'Oxetine',
    'Oxis',
    'Oxis Turbuhaler',
    'Oxsoralen',
    'Oxsoralen Ultra',
    'Oxy-Seral',
    'Oxyal',
    'Oxyal Monodose',
    'Oxybuprocaine',
    'Oxybutynin',
    'Oxybutynin (Hexal)',
    'Oxybutynin Hcl',
    'Oxybutynin Tablets',
    'Oxycodone',
    'Oxycodone + Acetaminophen',
    'Oxycontin',
    'Oxynorm',
    'Oxytetracycline',
    'Oxytocin',
    'Oxytocin Injection',
    'Ozolex',
    'Ozurdex',
    'Ozurdex Injection',
    'p.p.v',
    'Pabal',
    'Pabavit Vitamin A',
    'Pabendrol',
    'Pabrinex',
    'Pabrinex Im',
    'Pabrinex Iv',
    'Paclitaxel',
    'Paclitaxel (Taxol) Injection',
    'Paclitaxel Actavis',
    'Paclitaxel Ebewe',
    'Paclitaxel Injection',
    'Paclitaxel(Taxol) Injection',
    'Pain And Fever Kids',
    'Pamelor',
    'Pamidronate',
    'Pamidronate Disodium For Injection',
    'Pamidronate Disodium Inj.',
    'Pamserine',
    'Pan',
    'Pan 20mg',
    'Pan 40mg',
    'Pan Cefazoline',
    'Pan-Cefazoline 1g',
    'Pan-Flucloxacilline',
    'Pan-Streptomycin',
    'Panacare',
    'Panadol',
    'Panadol (6 Plus)',
    'Panadol (Baby & Infant)',
    'Panadol Actifast',
    'Panadol Advance',
    'Panadol Baby & Infant',
    'Panadol Cold & Flu',
    'Panadol Cold & Flu All In One',
    'Panadol Cold & Flu Hot Lemon',
    'Panadol Cold & Flu Hot Lemon & Honey',
    'Panadol Cold & Flu Night Relief Pe',
    'Panadol Cold And Flu Day',
    'Panadol Extra With Optizorb',
    'Panadol Joint 665mg',
    'Panadol Night',
    'Panadol Sinus',
    'Panadol Sinus Relief Pe',
    'Panadrex',
    'Panadrex Iv',
    'Panalife',
    'Panbigel Micro-Enema',
    'Pancreozymin',
    'Pancuronium',
    'Pancuronium Bromide',
    'Panderm',
    'Pangen',
    'Pangesic',
    'Panoxyl',
    'Pantho Eva Emulgel',
    'Pantogar',
    'Pantol',
    'Pantoloc 20mg',
    'Pantoloc 40mg',
    'Pantonix',
    'Pantonix I.v.',
    'Pantoprazole Azevedos',
    'Pantor',
    'Pantor 20',
    'Pantozol',
    'Pantozol I.v.',
    'Panvirin',
    'Papaverin',
    'Papaverine',
    'Papaverine Hcl Injection',
    'Papaverine Hydrochloride',
    'Para Shampoo',
    'Paracetamol',
    'Paracetamol + Codeine',
    'Paracetamol S.a.l.f',
    'Paracodol',
    'Paradox Omega 3 Cardio Tg',
    'Paradox Omega Babies',
    'Paradox Omega Mums 1000mg Capsule',
    'Paradox Omega School 990mg',
    'Paraffin',
    'Parafusiv',
    'Paraldehyde',
    'Paraldehyde Injection',
    'Paralgin',
    'Parasidose Shampoo',
    'Parasustain',
    'Pariet',
    'Parlodel',
    'Parodium Gel Gingival',
    'Paromomycin',
    'Partobulin',
    'Parvolex',
    'Parvolex Injection',
    'Parzidim',
    'Paser',
    'Passiflora Incarnatica Mt-Dhu',
    'Pataday',
    'Patanol',
    'Pavulon',
    'Paxeladine',
    'Pazolam',
    'Pectal Expectorant',
    'Pectomed',
    'Pectoral',
    'Pedea',
    'Pedia-Lax Liquid Stool Softener',
    'Pediacol',
    'Pediaderm',
    'Pediafer Drops',
    'Pediafer Solution',
    'Pediafluor',
    'Pediafluor Drops',
    'Pedialyte',
    'Pedialyte Grape',
    'Pediasure',
    'Pediasure Complete Chocolate Powder',
    'Pediasure Complete Vanilla Powder',
    'Pediatrace Infant',
    'Pediatric Electrolyte Fruit Flavor',
    'Pediatric Electrolyte Grape Flavor',
    'Pediavit',
    'Pediavit D',
    'Pediavit D 400 +Dha/Epa',
    'Pediavit Minimum',
    'Pediavit Multi',
    'Pediavit Select',
    'Peditrace',
    'Peditrace (Pediatric)',
    'Pedovex',
    'Pedvax Hib I.m. Vaccine',
    'Peflacine',
    'Peg-Intron',
    'Peg-Intron Pen',
    'Pegasys',
    'Peitel',
    'Pen Needles 0.25 X 4 Mm (Bd Micro-Fine Plus Pen Needles 32g X 4mm)',
    'Pen Needles 0.25 X 5 Mm 31g',
    'Penadur 6-3-3',
    'Penadur La',
    'Penamox',
    'Penbritin',
    'Pencloxin',
    'Peniben La - 12',
    'Penicillin G',
    'Penicillin G Sodium',
    'Penicillin V Potassium',
    'Penicillin V Potassium Syrup',
    'Penicillin-v Potassium For Oral Solution',
    'Pensordil',
    'Penta Mix',
    'Pentacarinat',
    'Pentact-Hib Vaccine',
    'Pentaglobin',
    'Pentalong',
    'Pentasa',
    'Pentasa Enema',
    'Pentasa Sachet',
    'Pentasa Xtend',
    'Pentaxim Vaccine',
    'Penthrox Inhaler',
    'Pentostam',
    'Pentyllin Sr',
    'Pepsolan',
    'Peptazol',
    'Peptazol 30mg',
    'Percutol Cream',
    'Perenterol Forte',
    'Perfalgan',
    'Perfectil',
    'Perfectil Platinum',
    'Perfluoron',
    'Pergoveris',
    'Periactin',
    'Peridone',
    'Periolimel N4e',
    'Peritoneal Dialysis Solution With Dextrose',
    'Peritoneal Dialysis Solution With Dextrose',
    'Peritrate',
    'Peritrate S.a',
    'Perjeta',
    'Perlutex',
    'Permax',
    'Permethrin',
    'Permethrin Cream',
    'Permixon',
    'Persantin',
    'Persantin Retard',
    'Peso Plus Id-Alg',
    'Pethidine',
    'Pethidine Hcl',
    'Pethidine (Meperidine)',
    'Petinutin',
    'Petroleum Jelly',
    'Pevaryl',
    'Pevisone',
    'Peyhadine',
    'Peyona 20mg/Ml',
    'Ph Maxi',
    'Pharmaline I Fol Capsules',
    'Pharmaton',
    'Pharmaton Kiddi Syrup',
    'Pharmexin',
    'Phazyme',
    'Phenazopyridine',
    'Phenergan',
    'Phenergan Inj. (Imported)',
    'Pheniram',
    'Phenobarbital',
    'Phenobarbital Bristol',
    'Phenobarbital Rosemont',
    'Phenobarbital Sodium Bp',
    'Phenobarbitone',
    'Phenobarbitone Injection',
    'Phenobarbitone Sodium',
    'Phenobarbitone Syp(Per Ml)',
    'Phenobarbitone Tablets',
    'Phenol',
    'Phenol Injection',
    'Phenoxybenzamine',
    'Phenoxymethyl Penicillin',
    'Phenoxymethyl Penicillin - Aft',
    'Phentoin Sod Usp',
    'Phentolamine Injection',
    'Phenylephrine',
    'Phenylephrine Aguettant',
    'Phenylephrine Hcl Minims',
    'Phenylephrine Injection',
    'Phenytoin',
    'Phenytoin Labesfal',
    'Phenytoin Sodium Capsules',
    'Phenytoin Sodium Inj. (Imported)',
    'Phenytoin Susp (Per Ml)',
    'Philaquin Forte',
    'Philazole',
    'Phisohex',
    'Phocytan',
    'Pholcodine',
    'Pholcodine Linctus Bp',
    'Phosphate Potassium',
    'Phosphate Sandos Efferv. Tablets',
    'Phosphate Sandoz',
    'Phosphate Sandoz Effervescent',
    'Phosphorus',
    'Phyenylephrine',
    'Phylarm',
    'Phyllocontin Continus',
    'Phyllocontin Continus (Paediatric)',
    'Phyllocontin Continus (Peadiatric)',
    'Physeptone',
    'Physiodose Physiological Saline Solution',
    'Physiogel',
    'Physiogel A.i. Cream',
    'Physiogel A.i. Lotion',
    'Physiogel Intensive Cream',
    'Physiol Ophtha-Ent Solution',
    'Physiologica',
    'Physiotens',
    'Physostigmine',
    'Physostigmine Salicylate',
    'Phyto-Femme',
    'Phytolacca Mt-Dhu',
    'Piascledine',
    'Pic',
    'Picolax',
    'Picolax Sachet',
    'Picoprep',
    'Pil-Food',
    'Pilex',
    'Pilex Double Strength',
    'Pilfood',
    'Pilka',
    'Pilocarpine',
    'Pilocarpine Minims',
    'Pimafucort',
    'Pimozide',
    'Pinaverium Tabs (Imported)',
    'Pinetarsol',
    'Pinetarsol Bath Oil',
    'Pio 15mg',
    'Pio 30mg',
    'Piodine',
    'Piodine Gargle & Mouth Wash',
    'Pioglin',
    'Piperacilline / Tazobactam 2g/250mg',
    'Piperacilline / Tazobactam 4g/500mg',
    'Piperacilline / Tazobactam Sandoz',
    'Piprelix',
    'Pipril',
    'Pipril Im/Iv',
    'Piptal',
    'Piracillin',
    'Pirafene',
    'Piriton Inj.(Chlorpheniramine Maleate)',
    'Piroxicam Stada',
    'Pitressin',
    'Pivox',
    'Pivox Xr',
    'Plaquanil Tablets',
    'Plaquenil',
    'Plasbumin',
    'Plasmanate',
    'Platinum Omega Pure Omega 3 Fish Oil',
    'Platinum Omega Pure Super',
    'Platosin',
    'Plavix',
    'Plegisol (Cardioplegic Solution)',
    'Plegridy 125 Micrograms',
    'Plegridy 63 & 94 Micrograms',
    'Plendil',
    'Pletaal',
    'Pletal',
    'Pmol',
    'Pms-Buspirone',
    'Pms-Chloral Hydrate',
    'Pms-Dexamethasone',
    'Pms-Gabapentin',
    'Pms-Loperamide',
    'Pms-Pramipexole',
    'Pms-Terazosin',
    'Pneumo-23 Vaccine',
    'Pneumovax - 23 Vaccine',
    'Podofilox',
    'Podophyllin',
    'Pofol',
    'Polaramine',
    'Polaramine Expectorant',
    'Polaramine Repetabs',
    'Polidocanol',
    'Polio Sabin (Oral) Vaccine',
    'Polio Vaccine',
    'Poliomyelitis Vaccine (Inactivated)',
    'Poliorix Vaccine',
    'Poliovirus Vaccine Ipv',
    'Poly Ethylene Glycol 3350 Powder',
    'Poly-Vitamin',
    'Polybix',
    'Polyethylene Glycol 3350 Nf',
    'Polygynax',
    'Polysilane Gel',
    'Polysitol',
    'Polyspectran',
    'Polytar',
    'Polyvalent Scorpion Antivenom (Equine Serum)',
    'Polyvalent Snake Antivenom (Equine Serum)',
    'Pomalyst',
    'Pondocillin',
    'Ponstan',
    'Ponstan Forte',
    'Portrazza',
    'Posalfilin',
    'Posicaine',
    'Potassium Acetate',
    'Potassium Acetate Injection',
    'Potassium Chloride',
    'Potassium Chloride 15% W/v (Gulf Inject)',
    'Potassium Chloride Concentrate',
    'Potassium Chloride Injection',
    'Potassium Chloride S.a.l.f',
    'Potassium Chloride Syrup (Per Ml)',
    'Potassium Citrate',
    'Potassium Permanganate',
    'Potassium Phosphate',
    'Potassium Phosphate Injection',
    'Potencort',
    'Povidone Vaginal Pessaries',
    'Povidone-Iodine Medicated Douche',
    'Power Health Cod Liver Oil',
    'Power Health Multivitamin & Minerals',
    'Poxclin Coolmousse',
    'Poxidium',
    'Pozineg',
    'Pp Calamine',
    'Ppd',
    'Ppd Tuberculin',
    'Ppf',
    'Ppsb Human/Nano',
    'Practoclyss Enema',
    'Pradaxa',
    'Pragmatar',
    'Praluent',
    'Pravastatin',
    'Pravastatin Hexal',
    'Praxilene',
    'Praxilene Forte',
    'Prazin',
    'Praziquantel',
    'Prazosin',
    'Prazosin Hcl Capsules',
    'Prebio-d',
    'Prebiotic',
    'Precedex',
    'Pred Forte',
    'Pred Mild',
    'Predenema Enema',
    'Predfoam',
    'Prednesolone Syrup (Per Ml)',
    'Prednisolome',
    'Prednisolon Linz',
    'Prednisolon Nycomed',
    'Prednisolon Stada',
    'Prednisolone',
    'Prednisolone Enema',
    'Prednisolone Stada',
    'Prednisolone Tablets',
    'Prednisone',
    'Predo',
    'Predsol',
    'Prefil',
    'Pregna Plan',
    'Pregnacare',
    'Pregnacare Liquid',
    'Pregnacare Plus Dual Pack (Capsules & Tablets Dual Pack)',
    'Pregnacare Plus Tabs/Caps',
    'Pregnaplus',
    'Pregnaplus Tablets',
    'Pregnyl',
    'Pregvyte Plus',
    'Premarin',
    'Premarin Tablets',
    'Premarin Vaginal Cream',
    'Premarine',
    'Premelle',
    'Premelle Cycle',
    'Premence',
    'Premeno Duo',
    'Premosan',
    'Prempak-c',
    'Premppak C',
    'Premure',
    'Prenatal',
    'Prenatal Vitamin & Mineral',
    'Prenate',
    'Prepidil',
    'Preterax',
    'Preterax Arginine',
    'Prevacid Solutab',
    'Prevenar 13 Vaccine',
    'Prevenar Vaccine',
    'Prevoc',
    'Prezista',
    'Priadel',
    'Prila',
    'Primacine',
    'Primacor',
    'Primalan',
    'Primaquine',
    'Primaquine Phosphate',
    'Primaquine Tablets',
    'Primene',
    'Primidone',
    'Primocef I.m.',
    'Primocef I.m./i.v.',
    'Primocef I.v.',
    'Primolut - N',
    'Primolut - Nor',
    'Primolut Depot',
    'Primosa',
    'Primosa 1000',
    'Primotestone Depot',
    'Primperan',
    'Primperan (Adult)',
    'Primperan (Children)',
    'Princi B Forte',
    'Priorix Tetra Vaccine',
    'Priorix Vaccine',
    'Pristiq',
    'Privigen',
    'Prizma Iv/Im Inf',
    'Probanthine',
    'Probenecid',
    'Probenecid Tablets',
    'Probio',
    'Probiotane',
    'Procainamide',
    'Procainamide Hydrochloride',
    'Procainamide Injection',
    'Procamal Royal Jelly + Garlic',
    'Procamal Royal Jelly - Forte',
    'Procan Sr',
    'Procarbazine',
    'Procarbazine Capsules',
    'Prochlorperazin',
    'Prochlorperazine',
    'Procid Gr 20',
    'Procid Gr 40',
    'Procomvax Vaccine',
    'Procoralan',
    'Procto Glyvenol',
    'Procto Synalar',
    'Proctofoam Hc',
    'Proctoheal',
    'Proctolar Center',
    'Proctolar-Center',
    'Proctosedyl',
    'Procyclidine Hcl',
    'Procytox',
    'Prof',
    'Profasi',
    'Profenid',
    'Proferrin Es',
    'Proferrin Forte',
    'Profertil',
    'Profertil Female',
    'Profilar',
    'Profilnine Sd',
    'Profinal',
    'Profinal (Paediatric)',
    'Profinal Cold & Sinus',
    'Profinal Xp',
    'Proflora Baby Drops',
    'Proflora Daily',
    'Proflora Feminine',
    'Proflora Fiber',
    'Proflora Kids',
    'Proflora Restore',
    'Proflora Start',
    'Progesic',
    'Progesta',
    'Proglycem',
    'Prograf',
    'Progyluton',
    'Progynova',
    'Prokinin',
    'Proleukin',
    'Prolia',
    'Prolyte',
    'Prolyte Lime Flavour',
    'Prolyte Ors Sachets',
    'Promantine',
    'Promax',
    'Promethazine',
    'Promethazine (l R-Phenergan)',
    'Promethazine Hcl',
    'Promethazine Hydrochloride - Fresenius',
    'Promethazine Syrup Ip',
    'Prometin',
    'Promise Nunal',
    'Promise Nunal Tablets',
    'Promise Pure Dha',
    'Pronatal',
    'Propecia',
    'Propess',
    'Propofol',
    'Propofol Fresenius',
    'Propofol Injection',
    'Propofol-Lipuro',
    'Propolis Spray Bimbi',
    'Propranolol',
    'Propranolol Rosemont',
    'Propycil',
    'Propyl Thiouracil Tablets',
    'Propylene Glycol',
    'Propylthiouracil',
    'Proquin-7.5',
    'Proscar',
    'Proskin',
    'Prosobee',
    'Prospan',
    'Prospan Acute',
    'Prospan Cough',
    'Prosta Vit',
    'Prosta-q',
    'Prostacide',
    'Prostacure',
    'Prostafree',
    'Prostagenol',
    'Prostaguard Plus',
    'Prostanorm',
    'Prostavasin',
    'Prostavit',
    'Prostigmine',
    'Prostin',
    'Prostin E2',
    'Prostin Vr',
    'Prostoral',
    'Prosulf',
    'Protamin',
    'Protamine Sulfate',
    'Protamine Sulphate',
    'Protamine Sulphate Injection',
    'Protec Im/Iv',
    'Protec Iv',
    'Protect Junior',
    'Protelos',
    'Protirelin',
    'Protisip Forte Honey Vanilla',
    'Protisip Honey Vanilla',
    'Protisip Unflavoured',
    'Protogyn',
    'Proton',
    'Protopam',
    'Protopic',
    'Protovit',
    'Protussa',
    'Provera',
    'Proviron',
    'Provisc',
    'Provita D',
    'Provita D Drops',
    'Provita D3',
    'Provita Derma-Heal',
    'Provita Liquid D3 400 Iu',
    'Provive',
    'Provocholine',
    'Proxeed Plus',
    'Proxeed Women',
    'Proxen',
    'Proxymetacaine Hcl Minims',
    'Proyigil',
    'Prozac',
    'Prozac Weekly',
    'Psyllium Husks Fiber Capsules',
    'Pulmicort',
    'Pulmicort Turbuhaler',
    'Pulmo Hevert Tablet',
    'Pulmonal-n',
    'Pulmozyme',
    'Pulmozyme (Dornase Alfa)',
    'Pulsatilla-Dhu',
    'Pulvo-47',
    'Pulvo-47 Neomycin',
    'Pumpinox',
    'Pumpinox 20mg',
    'Puregon',
    'Puri-Nethol',
    'Purinethol',
    'Purinol',
    'Puritan\'s Pride Calcium 600 With Vitamin D',
    'Puritan\'s Pride Abc Plus Senior',
    'Puritan\'s Pride Abc Plus With Lutein',
    'Puritan\'s Pride Absorbable Selenium',
    'Puritan\'s Pride Antioxidant 4000',
    'Puritan\'s Pride Bone Care',
    'Puritan\'s Pride Brewer\'s Yeast',
    'Puritan\'s Pride C',
    'Puritan\'s Pride Calcium +Vitamin D',
    'Puritan\'s Pride Easy Iron',
    'Puritan\'s Pride Evening Primrose Oil',
    'Puritan\'s Pride Extra Strength Joint Maintenance',
    'Puritan\'s Pride Eye Vites',
    'Puritan\'s Pride Folic Acid',
    'Puritan\'s Pride Garlic Oil',
    'Puritan\'s Pride High Potency Magnesium',
    'Puritan\'s Pride Hydrolyzed Collagen',
    'Puritan\'s Pride L-Carnitine',
    'Puritan\'s Pride Norwegian Cod Liver Oil',
    'Puritan\'s Pride Odorless Garlic',
    'Puritan\'s Pride Oystercal',
    'Puritan\'s Pride Prenatal Vitamins',
    'Puritan\'s Pride Probiotic Acidophilus',
    'Puritan\'s Pride Psyllium Husks',
    'Puritan\'s Pride Salmon Oil',
    'Puritan\'s Pride Stress B Complex',
    'Puritan\'s Pride Stress Formaula With Zinc',
    'Puritan\'s Pride Stress Formula With Zinc',
    'Puritan\'s Pride Super Omega 3',
    'Puritan\'s Pride Vitamin C With Rose Hips',
    'Puritan\'s Pride Vitamin D',
    'Puritan\'s Pride Vitamin E',
    'Puritan\'s Pride Vitamins For The Hair',
    'Puritan\'s Pride Yeast Free Chromium Picolinate',
    'Puritan\'s Pride Zinc',
    'Puritan\'s Prides Vitamin C With Rose Hips',
    'Puritans Pride C & E',
    'Puritans Pride Chelated Calcium Manesium And Zinc',
    'Puritans Pride E With Selenium',
    'Puritans Pride Evening Primrose Oil',
    'Puritans Pride Prenatal Vitamins',
    'Puritans Pride Q Sorb Coenzyme Q10',
    'Pursennid',
    'Pvidone K-30',
    'Pylera',
    'Pylomid',
    'Pynocare',
    'Pyralvex',
    'Pyrazinamide',
    'Pyrethrin',
    'Pyridoxal-5-Phosphate',
    'Pyridoxin',
    'Pyridoxine',
    'Pyridoxine (Vitamin B6)',
    'Pytest',
    'q-Sorb',
    'Qcciniaherb',
    'Qcip',
    'Qpime',
    'Qpime I.m/i.v',
    'Qu Cal Mag',
    'Qu Vit C',
    'Quadriderm',
    'Qualiphar Megatone Plus',
    'Quest Evening Primrose Borage And Fish Oil',
    'Quest Evening Primrose Oil',
    'Quest Ginkgo Biloba',
    'Quest Glucosamine Sulphate Kcl',
    'Quest Kyolic Garlic',
    'Quest Magnesium',
    'Quest Vitamin C',
    'Questamine Tablets',
    'Questran',
    'Questran Sachets (Imported)',
    'Qufe Plus',
    'Qufe Plus Tablets',
    'Quinax',
    'Quinidine',
    'Quinine Dihydrochloride',
    'Quinine Dihydrochloride - Fresenius',
    'Quinine Hcl Inj',
    'Quinine Sulfate',
    'Quinine Sulfate Tablets',
    'Quinine Sulphate',
    'Quinodis',
    'Quinox',
    'Qumeno',
    'Qumulti Tablets',
    'Qunatal Tablets',
    'Quosteo',
    'Qupinex',
    'Qv Cream',
    'r-Cin',
    'r-Gene',
    'r-Omez',
    'Rabezole 20mg',
    'Rabuman Berna',
    'Racemic Epinephrine',
    'Radian B',
    'Radian Massage',
    'Radiesse',
    'Raisox',
    'Ramep',
    'Ramiplus Al',
    'Ramlac',
    'Ranacid',
    'Ranbaxy\'s Garlic Pearls',
    'Ranexa 375',
    'Ranexa 500',
    'Ranexa 750',
    'Ranexa Er',
    'Ranid',
    'Ranidine',
    'Ranimax',
    'Ranimax Ac',
    'Ranimed',
    'Ranitcare',
    'Ranitidin Stada',
    'Ranitidine',
    'Ranitidine S.a.l.f',
    'Ranitidine Tablets',
    'Ranitlife',
    'Ranoxyl',
    'Ranpime',
    'Rantag',
    'Ranzin',
    'Rapamune',
    'Rapidflox',
    'Rapidus',
    'Rapifen',
    'Rapilysin',
    'Rasha Ointment',
    'Rasilez',
    'Rasilez Hct',
    'Rauwolfia Serpentina-Dhu',
    'Razimol',
    'Razon',
    'Rebetol',
    'Rebif',
    'Recocef',
    'Recofol',
    'Recombinate',
    'Reconil',
    'Recormon',
    'Recormon Multi Dose',
    'Rectogesic 0.2%',
    'Rectogesic 0.4%',
    'Red Back Spider',
    'Red Back Spider Antivenom',
    'Redoxon',
    'Redoxon Orange',
    'Reducar',
    'Reduce',
    'Refludan',
    'Refracta',
    'Refresh Liquigel',
    'Refresh Plus',
    'Refresh Tears',
    'Regaine',
    'Regenex',
    'Regitine',
    'Regonol',
    'Regular Wate-On',
    'Regutol',
    'Rehidrat',
    'Relanox',
    'Relax Drops',
    'Relefact',
    'Relenza',
    'Relenza Diskhaler',
    'Relestat',
    'Reli Spray',
    'Relief Ready To Use Enema Saline Laxative',
    'Relieve Enema',
    'Relifex',
    'Relistor',
    'Relpax',
    'Relukast',
    'Relvar Ellipta',
    'Remeron',
    'Remeron Soltab',
    'Remicade',
    'Remifemin',
    'Remin',
    'Reminyl',
    'Remofen',
    'Removab',
    'Remox',
    'Renagel',
    'Renalka',
    'Renerve Plus',
    'Renewliv',
    'Renitec',
    'Rennie',
    'Rennie Peppermint',
    'Rennie Spearmint',
    'Renvela',
    'Repacoll',
    'Reparil',
    'Reparil Gel N',
    'Repatha',
    'Replagal',
    'Reprazol 20mg',
    'Reprazol 40mg',
    'Requip',
    'Requip Xl',
    'Resclar',
    'Resclar Mr',
    'Rescuvolin',
    'Resibelacta',
    'Resistin Plus',
    'Resochin',
    'Resolor',
    'Resolve Plus',
    'Resolve Thrush',
    'Resolve Tinea',
    'Resonium A',
    'Respal',
    'Respirin',
    'Restamine',
    'Restasis',
    'Restylane',
    'Resyl',
    'Retarpen L.a.',
    'Retin-a',
    'Retino-a',
    'Retrovir',
    'Revacod',
    'Revanin',
    'Revatio',
    'Revcox 100mg',
    'Revcox 200mg',
    'Revlimid',
    'Revolade',
    'Revonto',
    'Reyataz',
    'Rezolsta',
    'Rhesonativ',
    'Rheuma Rest',
    'Rheumarene',
    'Rheumax Capsules',
    'Rheumogel',
    'Rhinaaxia',
    'Rhinase',
    'Rhinathiol',
    'Rhinathiol (Adult)',
    'Rhinathiol (Infant)',
    'Rhinathiol Promethazine',
    'Rhinocort Aqua',
    'Rhinomer Force 1',
    'Rhinomer Force 2',
    'Rhinomer Force 3',
    'Rhinostop',
    'Rhophylac',
    'Rhumalgan',
    'Rhumalgan Retard',
    'Rhus Toxicodendron-Dhu',
    'Riabal',
    'Riabroxol',
    'Riacetamid',
    'Riachol',
    'Riacort',
    'Rialac',
    'Rialocaine',
    'Rialol',
    'Rialox',
    'Riamet',
    'Riamide',
    'Rianest',
    'Riaphan',
    'Riaspasm',
    'Riatropine',
    'Riavate',
    'Riaxine',
    'Riazem',
    'Riazole',
    'Riazolin',
    'Ribasphere',
    'Ribomunyl',
    'Ribomustin',
    'Riconia',
    'Ridal 2mg',
    'Ridal 3mg',
    'Rifacin',
    'Rifadin',
    'Rifadin Injection (Imported)',
    'Rifampicin Caps (Imported)',
    'Rifaximin Tablets',
    'Rifinah',
    'Rifinah 300/150',
    'Rifinah Tablets',
    'Rifinah150/100',
    'Rifoldin',
    'Rikedol',
    'Rilutek',
    'Riluzole',
    'Rimevax Vaccine',
    'Rimifon',
    'Rimso',
    'Rinelon',
    'Ringer Lactate Bag',
    'Ringer\'s Dextrose Injection (Dextrose In Ringer\'s Solution)',
    'Ringer\'s Dextrose Injection Usp',
    'Ringer\'s Injection In Viaflex',
    'Ringer\'s Injection Usp',
    'Ringer\'s Lactate For Injection In Viaflex',
    'Ringer\'s Solution',
    'Ringer\'s Solution Usp',
    'Ringworm',
    'Rinoclenil',
    'Rinofed',
    'Rinofed Expectorant',
    'Rinofed Plus',
    'Rinoflex Sterile Saline Solution',
    'Rinophar Sterile Saline Solution',
    'Rinosin',
    'Risdone',
    'Risek',
    'Risperdal',
    'Risperdal Consta',
    'Ritalin',
    'Ritomune',
    'Rivapant',
    'Rivo',
    'Rivo Micro',
    'Rivotril',
    'Roaccutane',
    'Robinul',
    'Robinul + Neostigmin',
    'Robitussin',
    'Robitussin Cf',
    'Robur',
    'Rocaltrol',
    'Rocephin Im',
    'Rocephin Iv',
    'Rocuronium Injection',
    'Rofenac',
    'Rofenac - D',
    'Rofenac Sr',
    'Roferon-a',
    'Roferon-a Multidose',
    'Rogitine',
    'Rojasan',
    'Rolan',
    'Roletra',
    'Rolitac 0.5mg',
    'Rolitac 1mg',
    'Rolitac 5mg',
    'Romac',
    'Romac 150',
    'Romac 300',
    'Romilar',
    'Romin',
    'Rondec',
    'Ronem',
    'Ronicol Retard',
    'Rootcare Cream',
    'Ropenem',
    'Ropinirole',
    'Ropivacaine',
    'Rosalus',
    'Rotahaler',
    'Rotarix Vaccine',
    'Rotarix Vaccine',
    'Rotateq Vaccine',
    'Rothacin',
    'Rothacin E.c',
    'Rouvax (Measles) Vaccine',
    'Rovamycine',
    'Rovigon',
    'Rovista 10',
    'Rovista 20',
    'Rovista 40',
    'Rowachol',
    'Rowatinex',
    'Roxamed',
    'Roxcef I.m',
    'Roxcef I.m/i.v',
    'Roxcef I.v',
    'Roxcef Im',
    'Roxil',
    'Roxonin',
    'Royal 1000',
    'Royal Vit - G',
    'Roygel',
    'Rozaxon',
    'Rozbio 10',
    'Rozbio 20',
    'Rozbio 40',
    'Rozbio 5',
    'Rozerem',
    'Rozex Cream',
    'Rozex Gel',
    'Rozifax',
    'Rt-Mox 400mg',
    'Rub A 535 Extra Strength',
    'Rub A 535 Heat',
    'Rub A 535 Ice Gel',
    'Rub A-535 No Odour',
    'Rubbing Alcohol',
    'Rubeaten Berna Vaccine',
    'Rubella Vaccine',
    'Rubicalm',
    'Rudivax (Rubella) Vaccine',
    'Rulid',
    'Rumafen',
    'Rumalaya',
    'Rumalaya Forte',
    'Rustat 10mg',
    'Rustat 20 Mg',
    'Rustat 40 Mg',
    'Rustat 5mg',
    'Ruta-Dhu',
    'Ruxid',
    'Rynacrom',
    'Rynacrom M',
    'Rynacrom Compound',
    'Rythinate',
    'Rytmonorm',
    'Sabal Serrulatum Mt-Dhu',
    'Sabril',
    'Sacoline (Adult)',
    'Sacoline (Paediatric)',
    'Safeol',
    'Saflutan',
    'Saizen',
    'Saizen 8mg/Ml',
    'Saizen Click.Easy',
    'Salamol Cfc-Free',
    'Salamol Steri-Neb',
    'Salazopyrin En',
    'Salbucare',
    'Salbutamed',
    'Salbutamol Turbuhaler',
    'Salbuvent',
    'Sali-Decoderm',
    'Salibet',
    'Salicylic Acid',
    'Salicylic Acid Ointment',
    'Salinal',
    'Salinose Adult',
    'Salinose Baby Formula',
    'Salipax',
    'Saliva',
    'Salivix',
    'Salofalk',
    'Salonpas Pain Relief Patch',
    'Salonpas Patch',
    'Salonpas Spray',
    'Salurin',
    'Samixon I.m',
    'Samixon I.v',
    'Samixon I.v/i.m',
    'Sanatogen Junior Vitamins',
    'Sanatogen Multivitamin Plus Calcium',
    'Sanatogen Multivitamins Plus Iron',
    'Sancuso',
    'Sancuso Transdermal Patch (Imported)',
    'Sandimmun',
    'Sandimmun Conc.',
    'Sandimmun Neoral',
    'Sandimmun Neoral Drink',
    'Sandimmune',
    'Sando-k',
    'Sandoglobulin Lyophilisate',
    'Sandostatin',
    'Sandostatin Lar',
    'Sandoz Osteomix',
    'Sanguinaria-Dhu',
    'Sanomit',
    'Sanoskin Cleanser',
    'Sanoskin First',
    'Sanoskin Foam',
    'Sanoskin Melladerm Plus',
    'Sanoskin Net',
    'Sanoskin Oxy',
    'Sanovit',
    'Sanovit Ca,Mg,Zn+D3+c Eff. Tabs',
    'Sanovit Calcium + C',
    'Sanovit Calcium Eff. Tabs',
    'Sanovit Energy Vitamin C',
    'Sanovit Fe + Vitamins',
    'Sanovit Multivitamins Effervescent Tablet',
    'Sanovit Vitamin C Eff. Tabs',
    'Sanyplast',
    'Sapofen',
    'Sapofen Cold & Flu',
    'Sapofen Junior',
    'Sapofen Plus',
    'Sarf',
    'Sarfast',
    'Sargenor',
    'Sartan',
    'Sartan H 100mg/25mg',
    'Sartan H 50mg/12.5mg',
    'Sastid',
    'Sastid Al',
    'Sastid Plain',
    'Sativex Oromucosal Spray',
    'Save-All',
    'Savella',
    'Saventrine',
    'Saventrine I.v.',
    'Savlon Antiseptic',
    'Savoy Antiseptic First-Aid',
    'Savoy Burn Relief',
    'Savy',
    'Saxenda',
    'Sbr Repair',
    'Scandonest',
    'Scandonest Special',
    'Scanlux',
    'Sclerosol',
    'Scopinal',
    'Scopoderm',
    'Scopoderm Tts',
    'Scrub Stat 4%',
    'Sea Snake Anti-Venom',
    'Sebitar',
    'Sebivo',
    'Sebizole',
    'Sebulex',
    'Sebutone',
    'Secabiol',
    'Secretin',
    'Securon',
    'Sedacoron',
    'Sedalac',
    'Sedatif Pc',
    'Sedergine',
    'Sedofan',
    'Sedofan - Ii',
    'Sedofan - T',
    'Sedofan Dm',
    'Seebri Breezhaler',
    'Sefarin',
    'Seirogan',
    'Selace Forte',
    'Selecta 10',
    'Selecta 2.5',
    'Selecta 5',
    'Selectol',
    'Selegiline',
    'Selegiline Hydrochloride',
    'Selen Loges',
    'Selenium',
    'Selenium Injection',
    'Selexid',
    'Selsun',
    'Selsun Blue',
    'Selzentry / Celsentri',
    'Sempervivum Tectorum Mt-Dhu',
    'Semprex',
    'Senega Mt-Dhu',
    'Senfy F Gel',
    'Senfy M',
    'Senfy Wash',
    'Senior-Time',
    'Senna',
    'Senokot',
    'Sepia-Dhu',
    'Septanest N',
    'Septanest Sp',
    'Septazole',
    'Septilin',
    'Septocoll E 20',
    'Septocoll E 40',
    'Septocoll E 80',
    'Septrin',
    'Septrin (Paediatric)',
    'Septrin Ds',
    'Serdolect',
    'Serenace',
    'Seretide Diskus',
    'Seretide Evohaler',
    'Seretide Mdi',
    'Serevent',
    'Serevent Diskus',
    'Sermion',
    'Serodase',
    'Seroflo',
    'Seromycin',
    'Seroquel',
    'Seroquel Patient Starter Pack',
    'Seroquel Xr',
    'Seroxat',
    'Seroxat Cr',
    'Sertraline',
    'Servedol',
    'Setral',
    'Setron',
    'Sevikar 20/10',
    'Sevikar 20/5',
    'Sevikar 40/10',
    'Sevikar 40/5',
    'Sevoflurane',
    'Shanchol',
    'Sherolax',
    'Sibelium',
    'Sicorten',
    'Sicorten Plus',
    'Sideral',
    'Sideral Forte',
    'Sideral Gocce',
    'Sife 100',
    'Sife 50',
    'Sifrol',
    'Sifrol Er',
    'Sigmasporin Microral',
    'Signifor',
    'Sii Rabivax',
    'Sildenafil',
    'Silderm Scar Spray',
    'Silica Ok',
    'Silicea, Biochemic Remedy No. 11',
    'Silikon',
    'Silosin',
    'Silvadiazin',
    'Silvederma',
    'Silver Nitrate',
    'Silver Nitrate Caustic Applicator',
    'Silverin',
    'Simcard',
    'Simcor',
    'Simdax',
    'Simedill',
    'Simple Syrup',
    'Simponi',
    'Simponi Smart Ject',
    'Simulect I.v.',
    'Simva',
    'Simvador',
    'Simvagen',
    'Simvast',
    'Simvastatin',
    'Simvaten',
    'Simvor',
    'Sinbad 50',
    'Sincast',
    'Sincast 4mg',
    'Sincast 5mg',
    'Sine-Up',
    'Sinecod',
    'Sinemet',
    'Sinemet Cr',
    'Sinemet Plus',
    'Sinequan',
    'Singulair',
    'Singulair (Paediatric)',
    'Singulair Paediatric',
    'Sinofree',
    'Sinomarin Adult',
    'Sinomarin Babies',
    'Sinomarin Children',
    'Sinomarin E.n.t',
    'Sinomarin Mini',
    'Sinthrome',
    'Sintopozid',
    'Sinuc',
    'Sinupret',
    'Sinuset',
    'Sinusyn Liquid Spray',
    'Sipro',
    'Sirdalud',
    'Sitcom',
    'Sitcom Cream',
    'Sivacor',
    'Sivextro',
    'Sivylar',
    'Skainar',
    'Skilax',
    'Skinoren',
    'Sleepwell',
    'Slender Gr',
    'Slo-Phyllin',
    'Slow K',
    'Slow K Tablets',
    'Slow Sodium',
    'Smof Lipid',
    'Smoflipid',
    'Snafi',
    'Snake Venom Antiserum I.p',
    'Sno Phenicol',
    'Sno Pilo',
    'Soclav 1000mg/125 Mg',
    'Soclav 500mg/62.5 Mg Child',
    'Sodium Acetate',
    'Sodium Benzoate',
    'Sodium Bicarbonate',
    'Sodium Bicarbonate B.p.',
    'Sodium Bicarbonate Inj',
    'Sodium Bicarbonate Inj Pfs',
    'Sodium Bicarbonate Injection Usp',
    'Sodium Bicarbonate Powder B.p. (For Bicarbonate Haemodialysis)',
    'Sodium Bicarbonate Tablets',
    'Sodium Chloride',
    'Sodium Chloride & Dextrose B.p.',
    'Sodium Chloride & Dextrose B.p',
    'Sodium Chloride & Glucose Bp',
    'Sodium Chloride & Glucose Bp',
    'Sodium Chloride B.p.',
    'Sodium Chloride Irrigation',
    'Sodium Chloride & Dextrose',
    'Sodium Chloride & Dextrose B.p',
    'Sodium Chloride & Glucose Bp',
    'Sodium Chloride & Glucose Bp',
    'Sodium Chloride & Glucose Intravenous Infusion Bp 1988',
    'Sodium Chloride 0.9% Irrigation Usp Uromatic',
    'Sodium Chloride 20%',
    'Sodium Chloride 3%',
    'Sodium Chloride 30 %',
    'Sodium Chloride 5% Eye Drops',
    'Sodium Chloride B.p.',
    'Sodium Chloride Bags',
    'Sodium Chloride Eye Drops',
    'Sodium Chloride For Irrigation',
    'Sodium Chloride For Irrigation Usp',
    'Sodium Chloride Inf',
    'Sodium Chloride Inf Bag',
    'Sodium Chloride Inj',
    'Sodium Chloride Injection',
    'Sodium Chloride Injection In Viaflex',
    'Sodium Chloride Injection Mini Bag',
    'Sodium Chloride Injection Mini Bag Multi Pack',
    'Sodium Chloride Injection Mini Bag Single Pack',
    'Sodium Chloride Injection Mini Bag W/Built In Vail Adapter',
    'Sodium Chloride Injection Usp',
    'Sodium Chloride Intravenous Infusion 0.9% W/v B.p',
    'Sodium Chloride Intravenous Infusion B.p',
    'Sodium Chloride Intravenous Infusion B.p.',
    'Sodium Chloride Intravenous Infusion Bp',
    'Sodium Chloride Irrigation',
    'Sodium Chloride Irrigation B.p.',
    'Sodium Chloride Irrigation Solution Usp',
    'Sodium Chloride Irrigation Usp Uromatic',
    'Sodium Chloride Minibag',
    'Sodium Chloride Proamp',
    'Sodium Chloride Solution Usp 7%',
    'Sodium Chloride& Dextrose B.p',
    'Sodium Citrate',
    'Sodium Citrate + Citric Acid',
    'Sodium Citrate Oral Solution',
    'Sodium Edecrin',
    'Sodium Hydrogen Carbonate',
    'Sodium Lactate Injection Usp',
    'Sodium Nitroprusside',
    'Sodium Nitroprusside Injection',
    'Sodium Nitroprusside Injection Ip',
    'Sodium Phosphate',
    'Sodium Phosphate Inj',
    'Sodium Resonium',
    'Sodium Resonium Per Gram',
    'Sodium Resonium Powder',
    'Sodium Resonium Powder (Per Gm)',
    'Sodium Thiosulfate',
    'Sodium Thiosulfate Injection Usp',
    'Soflax',
    'Soflax Stool Softner',
    'Softa-Man',
    'Solarcaine',
    'Solcoseryl',
    'Solcoseryl Dental Adhesive',
    'Solcoseryl Jelly',
    'Soleil 100',
    'Soleil 200',
    'Soleil 25',
    'Solian',
    'Soliqua Solostar 100 Units/Ml + 33mcg/Ml',
    'Soliqua Solostar 100 Units/Ml + 50mcg/Ml',
    'Soliris',
    'Solis',
    'Solone',
    'Solonex Dt',
    'Solpadeine',
    'Solpadeine Plus',
    'Solu Cortef',
    'Solu Medrol',
    'Solumedrol Inj (Imported)',
    'Soluvit Injection',
    'Soluvit N',
    'Solvex',
    'Somadryl Compound',
    'Somatostatine Ucb',
    'Somatuline',
    'Somavert',
    'Somazina',
    'Sona Multiplus Junior',
    'Sona Pregnaplan G Morning Sickness G',
    'Sonata',
    'Songha Night',
    'Sonidar',
    'Sonovue',
    'Soolan',
    'Soolantra 10mg/g',
    'Soothex',
    'Sorbitol Solution',
    'Sorbitol Solution, Usp',
    'Sore Throat',
    'Sormodren',
    'Sortiva',
    'Sortiva Forte',
    'Sortiva H',
    'Sosegon',
    'Sotalol',
    'Sotalol Tablets',
    'Soutex',
    'Sovaldi',
    'Sovical',
    'Space Gummies Zero Sugar Multi-Vitamin Gummi',
    'Spark Royal',
    'Spascupreel S',
    'Spasmanore',
    'Spasmex',
    'Spasmo Urgenin',
    'Spasmo-Canulase',
    'Spasmocare',
    'Spasmolife',
    'Spasmolyt',
    'Spasmomen',
    'Spasmonal',
    'Spasmonore',
    'Spasmopan',
    'Spasmotalin',
    'Spee-d',
    'Spee-d Children',
    'Speman',
    'Speman Ds',
    'Spersadex Compound',
    'Spersallerg',
    'Spigelia-Dhu',
    'Spiolto Respimat',
    'Spiriva',
    'Spiriva Respimat',
    'Spironolactone',
    'Spironolactone Tablets',
    'Spironolactone Tablets(Imported)',
    'Spondin Drops',
    'Sporanox',
    'Sporidex',
    'Sprycel',
    'St. John\'s Wort',
    'St. Joseph (Children)',
    'St. Joseph Aspirin',
    'St. Joseph Aspirin-Free',
    'Stablon',
    'Stalevo',
    'Staloral',
    'Stamaril Vaccine',
    'Stamlom',
    'Standacillin',
    'Staphonex',
    'Staril',
    'Starlix',
    'Starval 160',
    'Starval 80',
    'Statix',
    'Stavudine',
    'Stelactiv Diaper Rash Cream',
    'Stelaker',
    'Stelara',
    'Stelatopia Bath Oil',
    'Stelatopia Cleansing Cream',
    'Stelatopia Emollient Cream',
    'Stelatria',
    'Stelazine',
    'Stelazine Spansules',
    'Stemetil',
    'Stemetil Injection',
    'Stemetil Tablets (Imported)',
    'Sterambutol',
    'Sterets Tisept Sachet',
    'Sterile Dopamine Hydrochloride',
    'Sterile Talc Powder',
    'Sterile Vancomycin Hydrochloride, Usp',
    'Sterile Water For Injection',
    'Sterile Water For Injection B.p.',
    'Sterile Water For Injection Usp',
    'Sterile Water For Irrigation',
    'Sterile Water For Irrigation Usp',
    'Sterimar Baby',
    'Sterimar Blocked Nose',
    'Sterimar Nasal Hygiene',
    'Sterogyl 15 H',
    'Stesolid',
    'Stiemycin',
    'Stilnoct',
    'Stimate',
    'Stimol Effervescent Powder For Oral Solution',
    'Stimulan Kit',
    'Stimulex',
    'Stivagra',
    'Stivane',
    'Stivarga',
    'Stocrin',
    'Stodal',
    'Stopkof (Alcohol Free)',
    'Strattera',
    'Strepsils Intensive Honey & Lemon',
    'Strepsils Vit-c',
    'Strepto-Hefa',
    'Streptokinase',
    'Streptomycin',
    'Streptomycin Sulphate Inj.',
    'Stresstabs With Zinc',
    'Stretch Mark Cream',
    'Strocain',
    'Structum',
    'Stugeron',
    'Subutex',
    'Sucralfate',
    'Sucralfate Tablets',
    'Sucralose',
    'Sucratec',
    'Sucrazide',
    'Sudafed',
    'Sudocream',
    'Sudocrem',
    'Sufenta',
    'Sufentanil',
    'Sufentanyl',
    'Sulfadiazine',
    'Sulfasalazine',
    'Sulfotrim Forte',
    'Sulfur-Dhu',
    'Sulocton',
    'Sulphur',
    'Sundown Natural Prenatal Omega',
    'Sundrops',
    'Sundrops Dha',
    'Super Energex+',
    'Super Once A Day Vegan',
    'Super Wate-On',
    'Supirocin',
    'Suplasyn',
    'Suplasyn 1-Shot',
    'Supplin',
    'Supradyn',
    'Supral',
    'Supralip',
    'Suprane',
    'Supraproct-s',
    'Supraviran',
    'Suprax',
    'Suprazole',
    'Suprazole Paediatric',
    'Surbex - T',
    'Sure Cure',
    'Surfaz Dusting Powder',
    'Surmontil',
    'Survanta',
    'Sustac',
    'Sustanon',
    'Sustiva',
    'Sutent',
    'Sutrim',
    'Suxamethonium Chloride',
    'Sweetex',
    'Swiclav',
    'Swift Od',
    'Sycrest',
    'Symbicort Turbuhaler',
    'Symbicort Turbuhler',
    'Symmetrel',
    'Synacthen',
    'Synacthen Depot',
    'Synacthen Injection',
    'Synagis',
    'Synalar',
    'Synalar-n',
    'Synaphase-1',
    'Synergy Body Volt',
    'Synergy Cranbiotix',
    'Synergy Fertox',
    'Synergy Kids Biotix',
    'Synergy Kidz Biotix',
    'Synergy Suntabs',
    'Synergys Vita D',
    'Synflorix Vaccine',
    'Synjardy',
    'Synocrom',
    'Synocrom Forte',
    'Synoshield',
    'Synribo',
    'Syntaris',
    'Synthroid',
    'Syntocinon',
    'Syntol Amd Capsules',
    'Syntometrine',
    'Synvisc Hylan G - F 20',
    'Syrup Bp',
    'Systane',
    'Systane Drops',
    'Systane Free Unit Doses',
    'Systane Ultra Lubricant',
    'Systane Ultra Ud',
    'Systral',
    'Syzygium Cumini Mt-Dhu',
    'Tabiclor',
    'Tabiflex',
    'Tabiflex Cool',
    'Tabocine',
    'Tabunex',
    'Tabuvan',
    'Tachosil',
    'Tachyben',
    'Tactam 2g/0.25g',
    'Tactam 4g/0.5g',
    'Tadanite 20mg',
    'Tadanite 5mg',
    'Tadenan',
    'Tafixyl',
    'Tafixyl 100mg/Ml',
    'Tagamet',
    'Tagrisso',
    'Takepron',
    'Talidex',
    'Talin',
    'Talopam',
    'Taltz',
    'Tambocor',
    'Tambocor Injection',
    'Tamictor',
    'Tamiflu',
    'Tamofen',
    'Tamophar',
    'Tamoxene',
    'Tamoxifen',
    'Tamoxifen Ebewe',
    'Tamsulosin',
    'Tamsumac 0.4',
    'Tanatril',
    'Tantum Gel',
    'Tantum Verde',
    'Tao Fd',
    'Tao Hd',
    'Tarceva',
    'Tarcortin',
    'Tardyferon',
    'Targaxan',
    'Targocid',
    'Targretin',
    'Tarivid',
    'Tarka',
    'Tarocef',
    'Tartaric Acid',
    'Tasigna',
    'Taukit',
    'Tavanic',
    'Tavanic I.v.',
    'Tavegyl',
    'Taxol',
    'Taxotere',
    'Tazact',
    'Tazid Im/Iv',
    'Tazid Iv',
    'Tazocin',
    'Tazorac',
    'Td',
    'Te Anatoxal Berna Vaccine',
    'Tears Naturale',
    'Tears Naturale Forte Lubricant',
    'Tears Naturale Free Unit Doses',
    'Tears Naturale Ii',
    'Tebokan',
    'Tecentriq 1200mg/20ml',
    'Tecfidera',
    'Tectaler 10mg',
    'Tectaler 5mg/5ml',
    'Teejel',
    'Tefanyl',
    'Tegretol',
    'Tegretol Cr',
    'Tekam',
    'Telcard',
    'Telebrix Gastro',
    'Telfast',
    'Telfast D',
    'Telmi 20mg',
    'Telmi 40mg',
    'Telmi 80mg',
    'Temetex',
    'Temetex C',
    'Temgesic',
    'Temodal',
    'Temporol',
    'Tenoflam',
    'Tenol',
    'Tenoretic',
    'Tenormin',
    'Tenox',
    'Tensotin',
    'Tentex Royal',
    'Teracin',
    'Terazosin',
    'Terfina',
    'Terracortril',
    'Terracortril Nystatin',
    'Terramycin',
    'Terramycin I.v',
    'Tertroxin',
    'Testogel',
    'Testoman',
    'Testoviron',
    'Tetagam',
    'Tetaglobulin',
    'Tetanol Vaccine',
    'Tetanous Antitoxin Vaccine',
    'Tetanus (Adsorbed) Vaccine',
    'Tetanus (Simple Solution) Vaccine',
    'Tetanus Antitoxin Berna Vaccine',
    'Tetanus Antitoxin Vaccine',
    'Tetanus Gamma',
    'Tetanus Toxoid Vaccine Adsorbed',
    'Tetavax (Adsorbed Tetanus Toxoid) Vaccine',
    'Tetracoq - 05 Vaccine',
    'Tetract- Hib Vaccine',
    'Tetracycline',
    'Tetrahydrobiopterin',
    'Tetralysal',
    'Tetramune Vaccine',
    'Tetrarco',
    'Tetrarco La',
    'Tetrasuiss',
    'Tetraxim Vaccine',
    'Tetuman Berna',
    'Teveten',
    'Teveten Plus',
    'Thalidomide',
    'Thalidomide Pharmion',
    'Tham',
    'Thelin',
    'Theoped',
    'Theoped Sr',
    'Theophar',
    'Theraprim',
    'Theravim M',
    'Thiamine',
    'Thiamine Hcl(Vit B1) Injecion',
    'Thiamine Hydrochloride',
    'Thiavit',
    'Thilo-Tears',
    'Thinrin',
    'Thiopental',
    'Thiopental Inresa 0.5g',
    'Thiopentone Sodium Injection',
    'Thiotacid',
    'Thiotacid Plus',
    'Thiotacid Plus 300',
    'Thiotacid Plus 600',
    'Thivy',
    'Thlapsi Bursa-Pastoris Mt-Dhu',
    'Thom',
    'Thorazine',
    'Thrombate Iii',
    'Thrombin',
    'Thuja',
    'Thuja Mt - Dhu',
    'Thuja-Dhu',
    'Thybon 20 Henning',
    'Thymoglobuline',
    'Thyrocil',
    'Thyrogen',
    'Tiapridal',
    'Tiberal',
    'Tiberal Combi',
    'Tibirox',
    'Ticlid',
    'Ticopar',
    'Tidilor',
    'Tienam',
    'Tilade',
    'Tilcotil',
    'Tilcotil 20mg',
    'Tildiem',
    'Time Release B Complex + C',
    'Timo-Comod',
    'Timo-Comod Eye Drops',
    'Timolol Maleate',
    'Timoptol',
    'Timpilo 2',
    'Timpilo 4',
    'Tinaderm',
    'Tinefcon',
    'Tiny C',
    'Tiny Vits',
    'Tirotax',
    'Tisept',
    'Tisseel Lyo+Duplojet System',
    'Tissel',
    'Tivicay',
    'Tmg',
    'Tobi',
    'Tobi Pod Haler',
    'Tobi Podhaler',
    'Tobradex',
    'Tobramycin',
    'Tobramycin Injection',
    'Tobramycin Mylan',
    'Tobramycin Sulfate',
    'Tobrex',
    'Tobrex 2x',
    'Toco-a-Benson',
    'Tocovid Emulsion Plus',
    'Tocovid Supra Bio',
    'Tocovid Suprabio',
    'Today Vaginal Conttraceptive',
    'Tofranil',
    'Togamycin',
    'Tolmicen',
    'Tonimer',
    'Tonimer Balsamic Soft',
    'Tonimer I Baby',
    'Tonimer Ii Soft',
    'Tonimer Iii Soft',
    'Tonimer Lab Hypertonic Pocket Nose Spray',
    'Tonimer Lab Hypertonic Single Dose Vials',
    'Tonimer Lab Normal Spray',
    'Tonimer Lab Soft Spray',
    'Tonimer Lab: Baby Spray',
    'Tonimer Lab: Nose Gel',
    'Tonimer Lab: Single-Dose Vials',
    'Tonimer Lab: Soft Spray',
    'Tonimer Normal Spray',
    'Tonimer Soft',
    'Tonsilgon N',
    'Tonsilotren',
    'Toot Sweet',
    'Topaal',
    'Topamax',
    'Topamax Sprinkle',
    'Topidic',
    'Topilar',
    'Topizone',
    'Toplexil',
    'Toposar',
    'Topotecan Hospira',
    'Toradol',
    'Torasemid',
    'Torasemidal',
    'Torisel',
    'Torolac',
    'Torrat',
    'Torsec',
    'Torvacard Zentiva',
    'Torvacol',
    'Totaforte',
    'Totamol',
    'Touch & Go Toothache',
    'Toujeo Solostar',
    'Toularynx',
    'Tournes 100mg',
    'Tournes 50mg',
    'Tovast',
    'Tp-1 Serono',
    'Tpn Infusion (Adult)',
    'Tpn Neonatal Infusion',
    'Trachisan',
    'Trachisan Sore Throat Gargle',
    'Trachitol',
    'Trachitol Lozenges',
    'Tracleer',
    'Tracrium',
    'Tractocile',
    'Tracutil Concentrate Of Trace Elements',
    'Trajenta',
    'Tramadol Stada',
    'Tramal',
    'Tramal Retard',
    'Tramundin Retard',
    'Trandate',
    'Trandate (Labetalol) Injection',
    'Tranexamic Acid',
    'Tranexamic Acid Capsules',
    'Tranexamic Acid Tablets',
    'Tranxene',
    'Trasylol',
    'Traumaplant',
    'Traumaplant Cream',
    'Travasol',
    'Travatan',
    'Travisil Cough Syrup (Sugar Free)',
    'Travisil Lemon Sugar Free',
    'Travisil Mint Sugar Free',
    'Travocort',
    'Travogen',
    'Trazodone',
    'Treato',
    'Trecator',
    'Tredaptive',
    'Tremarit',
    'Trental',
    'Tres Orix Forte',
    'Tresiba Flextouch',
    'Tresiba Penfill',
    'Tretin',
    'Trexan',
    'Tri-Luma Cream (Imported)',
    'Triadine',
    'Triam-Hexal',
    'Triamcinolone Acetonide Oral Paste',
    'Triamterene / Hydrochlorothiazide',
    'Triaxone',
    'Triaxone I.v.',
    'Triaxone I.m.',
    'Triaxone I.m./i.v.',
    'Triaxone I.v.',
    'Trichloroacetic Acid',
    'Tricitrates',
    'Tricor',
    'Triesence',
    'Trifed',
    'Trifluoperazine',
    'Trihemic',
    'Trihexyphenidyl',
    'Trilagavit',
    'Trileptal',
    'Trillium Pendulum Mt-Dhu',
    'Triltec',
    'Triluma',
    'Trimethoprim',
    'Trimethoprim Suspension',
    'Trimol',
    'Trimol - A',
    'Trimol Ds',
    'Trimovax Vaccine',
    'Trinex',
    'Trinordiol',
    'Trinsicon',
    'Trinuron',
    'Trioderm Care Mouth&Throat Spray',
    'Trioderm Care Nasal Spray',
    'Triopan',
    'Tripacel Vaccine',
    'Triplixam',
    'Tripofed',
    'Tripofed Dm',
    'Tripofed Expectorant',
    'Triptan Forte',
    'Tris',
    'Trisenox',
    'Trisequens',
    'Trisequens Forte',
    'Trisodium Citrate',
    'Tritace',
    'Tritanrix Hb + Hiberix Vaccine',
    'Tritanrix Hb Vaccine',
    'Triumeq 50mg/600mg/300mg',
    'Trivastal Retard',
    'Trivax-Ad Vaccine',
    'Trivit',
    'Trixaicin',
    'Trixaicin Hp',
    'Trizivir',
    'Trizol 150mg',
    'Trizymal',
    'Tromcardin',
    'Tromethamine',
    'Tropex',
    'Tropicamide',
    'Tropicamide Minims',
    'Trospium',
    'Trospium Chloride',
    'Trulicity',
    'Trusopt',
    'Truvada',
    'Truxal',
    'Tryptizol',
    'Ts-1 Capsule',
    'Tt (Thiomersal Free)',
    'Tuberculin Diluted (For Mantoux Test)',
    'Tuberculin Ppd',
    'Tulip',
    'Tumbiotix',
    'Turox',
    'Tussex (Homeopathic Cough Drops)',
    'Tussifin',
    'Tussifin With Codeine',
    'Tussimont Cough Syrup',
    'Twinrix Adult Vaccine',
    'Twinrix Junior Vaccine',
    'Twynsta',
    'Tygacil',
    'Tykerb',
    'Tylenol',
    'Tylenol Arthritis Pain Extended Relief',
    'Tylenol Extra Strength',
    'Tylenol Forte',
    'Tylenol Sinus Pain',
    'Tylenol Ultra Relief',
    'Tyotocin',
    'Typherix Vaccine',
    'Typhim Vi Vaccine',
    'Typhoid Paratyphoid & Cholera Vaccine',
    'Tyrosur',
    'Tysabri',
    'Tytocine',
    'Tyzine',
    'Tyzine (Paediatric)',
    'u - Cef',
    'u-Cef',
    'Uae R-4-51',
    'Ubistesin Forte',
    'Ubretid',
    'Uciderm',
    'Ulcerbrex',
    'Ulcicure',
    'Ulcipan',
    'Uloric',
    'Ulsaheal',
    'Ultiva',
    'Ultra Carbon',
    'Ultra Cranberry',
    'Ultra D',
    'Ultra-d',
    'Ultracillin Forte',
    'Ultracortenol',
    'Ultraderm',
    'Ultram',
    'Ultramop',
    'Ultramox',
    'Ultratard Hm',
    'Ultravist',
    'Ultravit M',
    'Uman Albumin',
    'Umkan',
    'Umkan Syrup',
    'Unex',
    'Unicam',
    'Unicycline',
    'Unidox',
    'Unidur',
    'Unifed',
    'Unifed Dm',
    'Unifed Expectorant',
    'Unihep',
    'Uniphyllin Continus',
    'Universal White Embrocation',
    'Upsa-c',
    'Ural',
    'Uralyt-u',
    'Urapidil',
    'Urea',
    'Urecare',
    'Urex',
    'Uri-Cran',
    'Urimax',
    'Urisoda',
    'Urisol',
    'Urispas',
    'Uritab Xl',
    'Uritica Urens Mt-Dhu',
    'Uro-Pos',
    'Uro-Vaxom',
    'Urobacid',
    'Urocit-k',
    'Uromitexan',
    'Uropyrine',
    'Uroquad',
    'Uroxin',
    'Urso Falk Tab',
    'Ursobil',
    'Ursochol',
    'Ursodeoxycholic Acid',
    'Ursodeoxycholic Acid Capsules',
    'Ursofalk',
    'Ursofalk Suspension',
    'Ursogal',
    'Utrogestan',
    'Uvamin Retard',
    'v-2',
    'v-2 Plus',
    'v-Cil-k',
    'Vagi-c',
    'Vagifem',
    'Vagirec',
    'Vagoclyss',
    'Vagomycin',
    'Vagran',
    'Valcyte',
    'Valda Lemon',
    'Valdio',
    'Valdio Hct',
    'Valdoxan',
    'Valgir 450',
    'Valine',
    'Valis',
    'Valium',
    'Valoid',
    'Valopin',
    'Valtrex',
    'Valtropine',
    'Valupak Calcium With Vitamin C',
    'Valupak Calcium With Vitamin D',
    'Valupak Children Vitamins Acd',
    'Valupak Folic Acid',
    'Valupak Glucosamine With Chondroitin',
    'Valupak High Strength Cod Liver Oil',
    'Valupak Magnesium',
    'Valupak Multivitamins & Iron',
    'Valupak Multivitamins & Minerals',
    'Valupak Omega 3 Fish Oil',
    'Valupak Selenium With Ace',
    'Valupak Vitamin B Complex',
    'Valupak Vitamin B6',
    'Valupak Vitamin E',
    'Valupak Zinc Gluconate',
    'Valzar',
    'Vaminolact',
    'Vancocin',
    'Vancolab 1g',
    'Vancolab 500mg',
    'Vancoled',
    'Vancolon',
    'Vancomicina Azevedos 1000 Mg',
    'Vancomicina Azevedos 500 Mg',
    'Vancomycin Alpharma',
    'Vancomycin Hydrochloride',
    'Vancor',
    'Vaniqa',
    'Vansil',
    'Vaqta Vaccine',
    'Varcellon',
    'Vargatef 100',
    'Vargatef 150',
    'Varicellon',
    'Varilrix Vaccine',
    'Varitect',
    'Varivax',
    'Varizig',
    'Vascodipine',
    'Vascore',
    'Vasculine',
    'Vaseline',
    'Vaseline Petroleum Jelly',
    'Vasogen',
    'Vasopressin',
    'Vasopressin Injection Usp',
    'Vasopril',
    'Vasostrict',
    'Vasoxine',
    'Vasta',
    'Vastarel Mr',
    'Vastor 10',
    'Vastor 20',
    'Vastor 40',
    'Vavo',
    'Vaxigrip Pediatric Vaccine',
    'Vaxigrip Vaccine',
    'Vectavir',
    'Vectibix',
    'Vectra',
    'Vedafil',
    'Vedrop',
    'Velbe',
    'Velbienne 2mg/1mg',
    'Velcade',
    'Velmetia',
    'Velox',
    'Velphoro',
    'Vemlidy 25mg',
    'Venclexta 100mg',
    'Venoruton',
    'Venoruton Forte',
    'Vental',
    'Ventamol',
    'Ventavis',
    'Ventol',
    'Ventolin',
    'Ventolin Nebules',
    'Ventolin Diskus',
    'Ventolin Evohaler',
    'Ventolin Injection',
    'Ventolin Nebules',
    'Venus 125 Mg',
    'Vepesid',
    'Vera Til Sr',
    'Veracolate',
    'Verahexal',
    'Verapamil',
    'Verapamil Hcl Injection',
    'Verapamil Sr',
    'Verboril',
    'Vercef',
    'Veremoid',
    'Verine',
    'Vermonil',
    'Vermox',
    'Verpamil',
    'Verrumal',
    'Versatis',
    'Versol',
    'Vertigoheel',
    'Vesanoid',
    'Vesicare',
    'Vexol',
    'Vfend',
    'Vi-Daylin',
    'Vi-Daylin Plus Iron',
    'Viagra',
    'Viagra Tablets',
    'Viaome 40mg',
    'Viasol 40mg',
    'Viaspan',
    'Viatrinil',
    'Vibefor',
    'Vibramycin',
    'Vibravenous',
    'Vibrocil',
    'Vibrocil Microdoser',
    'Vicks',
    'Vicks Vaporub',
    'Victoza',
    'Victrelis',
    'Victrelis Cap',
    'Vidaza',
    'Vidermina',
    'Vidermina Intimate',
    'Viekirax',
    'Vifolin',
    'Viforcit',
    'Vigabatrin Tablets',
    'Vigamox',
    'Vigantoletten',
    'Vigofil 20',
    'Vigofil 5',
    'Vigormax',
    'Vigranon B',
    'Vigrx For Men',
    'Vikadar',
    'Vimovo',
    'Vimpat',
    'Vinalac',
    'Vinblastine',
    'Vinblastine Inj (Imported)',
    'Vinblastine Sulphate',
    'Vinblastine Sulphate For Injection Usp',
    'Vincristine',
    'Vincristine Inj (Imported)',
    'Vincristine Pch',
    'Vincristine Sulphate',
    'Vinodine',
    'Vinorelbin Ebewe',
    'Vinorelbine',
    'Vinorelbine Actavis',
    'Vinorelbine Ebewe',
    'Vinorelbine Tartrate Injection',
    'Vioneurin-6',
    'Viophos',
    'Vipdomet',
    'Vipidia',
    'Viracept',
    'Virall',
    'Viramune',
    'Virastop',
    'Viread',
    'Virgan',
    'Virormone',
    'Virpes',
    'Virtigene 16',
    'Virtigene 24',
    'Virtigene 8',
    'Viru-Merz',
    'Viru-Merz Serol',
    'Virucare',
    'Virustat',
    'Visan Sterile Eye Drops',
    'Visanne',
    'Viscap 30mg',
    'Viscap 60mg',
    'Viscap 90mg',
    'Viscoat (Sterile Opthalmic Viscoelastic Solution)',
    'Viscodril (Alcohol Free)',
    'Viscolyt',
    'Viscor',
    'Viscorneal Ortho',
    'Viscum Two In One',
    'Visine',
    'Visionace',
    'Visipaque',
    'Viskaldix',
    'Visken',
    'Vismed',
    'Vistide',
    'Visudyne Injection',
    'Vit A',
    'Vit A + D',
    'Vit C',
    'Vit E',
    'Vita Colon Relief',
    'Vita D',
    'Vita Gestat',
    'Vita Orthocal-Dk',
    'Vita Vigor Chromium Picolinate',
    'Vita Vigor Cod Liver Oil',
    'Vita Vigor Digestive Enzymes',
    'Vita Vigor Evening Primrose Oil',
    'Vita Vigor Hi Potency B Complex',
    'Vita Vigor Korean Ginseng With Royal Jelly',
    'Vita Vigor Osteoporex',
    'Vita Vigor Prenatal Fornula',
    'Vita Vigor Royal Jelly',
    'Vita Vigor Shark Cartilage',
    'Vita Vigor Super Antioxidant',
    'Vita Vigor Super Stress B With Zinc',
    'Vita-Pos',
    'Vitacon',
    'Vital C',
    'Vital Energy',
    'Vital Shield',
    'Vital Vision',
    'Vitaline',
    'Vitalipid Adult Injection',
    'Vitalipid Infant Injection',
    'Vitalipid N Adult',
    'Vitalipid N Infant',
    'Vitamam 1 Capsules',
    'Vitamec Cal Plus',
    'Vitamec Folic Acid',
    'Vitamec Joint Care Plus',
    'Vitamec Prenatal Formula',
    'Vitamin 1',
    'Vitamin 15',
    'Vitamin A',
    'Vitamin A & D3',
    'Vitamin B Complex',
    'Vitamin B-1',
    'Vitamin B-2',
    'Vitamin B1 (Thiamine)',
    'Vitamin B12',
    'Vitamin B12 Depot',
    'Vitamin B12 Depot Inj',
    'Vitamin B12 Forte',
    'Vitamin C',
    'Vitamin C Blackberry Chewable Tablets (Amosvital)',
    'Vitamin C Midy',
    'Vitamin C 100 Pascoe',
    'Vitamin C Injection',
    'Vitamin D',
    'Vitamin D2-Forte Capsules',
    'Vitamin D3',
    'Vitamin D3 (Cholecalciferol) Inj.',
    'Vitamin D3 Capsules (Imported)',
    'Vitamin D3 Liquid',
    'Vitamin D3 Oral Drops',
    'Vitamin D3 Streuli',
    'Vitamin E',
    'Vitamin K',
    'Vitamin K1',
    'Vitaminoo',
    'Vitamount With Anti Oxidant',
    'Vitan\'s Nature Omegavyte 3.6.9',
    'Vitane Calcicare',
    'Vitane Calcicare Liquid',
    'Vitane Covitan',
    'Vitane Drops',
    'Vitane Evening Primrose Oil',
    'Vitane Irovit Drops',
    'Vitane Liquid',
    'Vitane Orlic',
    'Vitane Vitaglobin Syrup',
    'Vitane Vitajoint Tablets',
    'Vitane Vitamin E',
    'Vitane\'s Nature Ferro 28',
    'Vitane\'s Nature Jointfree Triple Action',
    'Vitane\'s Nature Jointfree Tripple Action',
    'Vitane\'s Nature Magvyte Caplets',
    'Vitane\'s Nature Selevyte Softgel',
    'Vitanerve',
    'Vitanes Calcivyte',
    'Vitanes Folvyte',
    'Vitanes Jointfree',
    'Vitanes Nature Pregvyte',
    'Vitanes Omega 3 Norwegian Cod Liver Oil',
    'Vitex Gel',
    'Vitifect Syrup',
    'Vitiron Suscaps',
    'Vitonex',
    'Vitop',
    'Vitox',
    'Vitreolent',
    'Viusid',
    'Vivotif Berna L Vaccine',
    'Vivotif Berna Vaccine',
    'Vocal Eze',
    'Vocort',
    'Voldic',
    'Volmax',
    'Voltamed',
    'Voltaren',
    'Voltaren D',
    'Voltaren Emulgel',
    'Voltaren Emulgel 12 Hours',
    'Voltaren Ophtha',
    'Voltaren Retard',
    'Voltaren Sr',
    'Voltarile',
    'Voltatherm Thermal Patch',
    'Voltfast',
    'Voltfenac',
    'Voltic',
    'Voluven',
    'Vomikind',
    'Vominore',
    'Vorir',
    'Votrex',
    'Votrex Retard',
    'Votrient',
    'Voxin',
    'Vp-Top',
    'Vpriv',
    'Vsl#3 Capsules',
    'Vyvanse',
    'Warfarin',
    'Warfarin Tablets',
    'Warfarin Tablets (Imported)',
    'Warfin',
    'Wartec',
    'Wassen Magnesium-Ok',
    'Wassen Coenzyme Q10 + Magnesium',
    'Wassen Confiance',
    'Wassen Glucoselene',
    'Wassen Omega3 Fish Oil',
    'Wassen Selenium Ace',
    'Wassen Silica-Ok',
    'Wassen Zinc Ace',
    'Water For Injection',
    'Water For Injection B.p.',
    'Water For Injections',
    'Water For Injections B.p.',
    'Water For Injections Bp',
    'Water For Irregation',
    'Water For Irrigation Solution',
    'Water For Irrigation Usp',
    'Waxsol',
    'Webber Naturals Acidophilus With Bifidus&Fos Nondiary',
    'Webber Naturals Coenzyme Q10',
    'Webber Naturals Complete Digestive Enzymes',
    'Webber Naturals Folic Acid',
    'Webber Naturals Odourless Garlic',
    'Webber Naturals Omega 3 For Women',
    'Webcoll Swab',
    'Wellbaby Mv Drops',
    'Wellbaby Vitamin D3 Drops',
    'Wellbutrin Xl',
    'Wellkid',
    'Wellkid Baby And Infant',
    'Wellkid Smart',
    'Wellman',
    'Wellpar',
    'Wellwoman',
    'Whole Psyllium Husks',
    'Wilate',
    'Wilate 1000',
    'Wilate 500',
    'Wilfactin',
    'Wilzin',
    'Winex',
    'Winrho Sdf',
    'Wn Apple Cider Vinegar',
    'Wn Cod Liver Oil',
    'Wn Coenzyme Q10',
    'Wn Multisure For Women 50+',
    'Wn Multisure Multivitamin For Men',
    'Wn Multisure Multivitamin For Men 50+',
    'Wn Omega 3 Salmon & Fish Oil',
    'Wn Omega-3 Cardio Formula',
    'Wn Selenium',
    'Wormazol',
    'Wortie Advanced Wart&Verruca Remover Liquid',
    'Wortie Liquid Wart & Verruca Remover',
    'x-Piles Ointment',
    'x-Prep',
    'Xaira',
    'Xalacom',
    'Xalatan',
    'Xalkori',
    'Xanax',
    'Xarelto',
    'Xatral',
    'Xatral Sr',
    'Xatral Xl',
    'Xcite',
    'Xefo',
    'Xeforam 10mg',
    'Xeforam 20mg',
    'Xelevia',
    'Xeljanz',
    'Xeloda',
    'Xemaderm',
    'Xemestan',
    'Xenazine',
    'Xenetix',
    'Xenical',
    'Xeomin 100',
    'Xeomin 50',
    'Xerumenex',
    'Xflox 400mg',
    'Xgeva',
    'Xifaxamin',
    'Xifaxan',
    'Xigduo',
    'Xigris',
    'Xinclav',
    'Xola',
    'Xolair',
    'Xolamol',
    'Xopenex Hfa',
    'Xopenex Inhalation',
    'Xopenex Inhalation Solution',
    'Xorim',
    'Xorimax',
    'Xpel',
    'Xtandi',
    'Xtracal',
    'Xultophy',
    'Xylo-Acino',
    'Xylo-Comod',
    'Xylo-Mepha',
    'Xylocaine',
    'Xylocaine Adrenaline',
    'Xylocaine 2% With Adrenaline',
    'Xylocaine Viscous',
    'Xylolin (Adult)',
    'Xylolin (Child)',
    'Xylomet Adult',
    'Xylomet Paed.',
    'Xylonor',
    'Xyloproct',
    'Xyntha',
    'Xyzal',
    'Yanoven 2g + 0.25g',
    'Yanoven 4g + 0.5g',
    'Yasmin',
    'Yaya Calcium',
    'Yaya Multi',
    'Yaya Omega 3',
    'Yaya Vita -c',
    'Yaz',
    'Yentreve',
    'Yervoy',
    'Yervoy 200mg/40ml',
    'Yervoy 50mg/10ml',
    'Yomesan',
    'Yondelis',
    'Ytracis Kit',
    'Yutopar',
    'z Span Spansules',
    'z-Mycin',
    'Zadaxin',
    'Zaditen',
    'Zaditen Sdu',
    'Zadorin Suscaps',
    'Zaeer',
    'Zahra',
    'Zakon',
    'Zaldiar',
    'Zaleplon',
    'Zaltrap 100mg/4ml',
    'Zaltrap 200mg/8ml',
    'Zam-Buk',
    'Zamur',
    'Zanipress',
    'Zanosar',
    'Zantac',
    'Zargo',
    'Zargo 100',
    'Zargo Ht',
    'Zarontin',
    'Zaroxolyn (Metalazone) Tablets',
    'Zaroxylin (Metalazone) Tablets',
    'Zarzio 30 Mu/0.5ml',
    'Zarzio 48 Mu/0.5ml',
    'Zavedos',
    'Zavesca',
    'Zavicefta 2g/0.5g',
    'Zeal Sf',
    'Zebinix 800mg',
    'Zecool',
    'Zecuf Herbal Cough Lozenges',
    'Zecuf Herbal Cough Lozenges Honey Lemon',
    'Zecuf Herbal Cough Lozenges Lemon',
    'Zecuf Herbal Cough Lozenges Orange',
    'Zecuf Herbal Cough Lozenges Sugar Free',
    'Zecuf Herbal Cough Remedy',
    'Zecuf Herbal Cough Remedy Sugar Free',
    'Zed 100',
    'Zed 50',
    'Zeffix',
    'Zelboraf',
    'Zeldox',
    'Zelesse',
    'Zell Oxygen Plus',
    'Zelmac',
    'Zemcifer',
    'Zemplar',
    'Zemtard Xl',
    'Zenapax',
    'Zenon',
    'Zentamav Zentiva',
    'Zentel',
    'Zepatier',
    'Zeran',
    'Zerbaxa',
    'Zerit',
    'Zermacin',
    'Zertazine',
    'Zestoretic',
    'Zestril',
    'Zeta',
    'Zeta-Cort',
    'Zetop',
    'Zetron',
    'Zevalin',
    'Ziagen',
    'Ziagen 300mg',
    'Zidime',
    'Zim B-Complex',
    'Zimax',
    'Zinacef',
    'Zinacef 750mg',
    'Zinamide Tablets',
    'Zinc',
    'Zinc & Castor Bp',
    'Zinc Gluconate',
    'Zinc Sulfate',
    'Zincast',
    'Zincolac B',
    'Zineryt',
    'Zinforo',
    'Zinnat',
    'Zinopril',
    'Zinoxime',
    'Zinoximor',
    'Ziquin',
    'Zithrocon',
    'Zithrocon 200mg/5ml',
    'Zithrolag',
    'Zithromax',
    'Zithrova',
    'Zocef Im/Iv',
    'Zocef Iv',
    'Zocin',
    'Zocor',
    'Zofen',
    'Zofran',
    'Zofran Melt',
    'Zoladex Depot',
    'Zoladex La',
    'Zolimetax',
    'Zolinza',
    'Zoloft',
    'Zolpidem',
    'Zolpidem Tartrate',
    'Zomac 1mg',
    'Zometa',
    'Zomig',
    'Zomig Rapimelt',
    'Zonegran',
    'Zonisamide',
    'Zopiclone',
    'Zorodyl',
    'Zorvolex 18',
    'Zorvolex 35',
    'Zovigen',
    'Zovirax',
    'Zovirax Ds',
    'Zpdex 100',
    'Zpdex 200',
    'Zurim',
    'Zyban',
    'Zycal',
    'Zydac',
    'Zygrel',
    'Zyloric',
    'Zymar',
    'Zymaxid',
    'Zynex 20',
    'Zynex 40',
    'Zynovate',
    'Zyomet',
    'Zypadhera',
    'Zypine Odt',
    'Zyprexa',
    'Zyprexa Velotab',
    'Zypyra-500',
    'Zyrtec',
    'Zytiga',
    'Zyvox',
    'Zyvox (Linezolid) Injection',
    'Zyvoxid (Linezolid) Tablets'
];
var MedicationService =               (function () {
    function MedicationService(http$$1, config, dateUtil) {
        this.http = http$$1;
        this.config = config;
        this.dateUtil = dateUtil;
        this.frequencies = [
            { key: 'BID', value: 'Twice per day' },
            { key: 'TID', value: 'Three times per day' },
            { key: 'QID', value: 'Four times per day' },
            { key: 'FID', value: 'Five times daily' },
            { key: 'WID', value: 'Weekly' },
            { key: 'TWID', value: 'Twice Weekly' },
            { key: 'PRN', value: 'As needed' },
            { key: 'MON', value: 'Monthly' },
            { key: 'OTH', value: 'Other' },
            { key: 'QD', value: 'Once per day' }
        ];
        this.units = [
            { key: 'mg', value: 'mg (Milligram)' },
            { key: 'l', value: 'L (Liters)' },
            { key: 'ml', value: 'ml (Mililiter)' },
            { key: 'meq', value: 'mEq (Milli-equivalent)' },
            { key: 'perc', value: '% (Percent)' },
            { key: 'Gm', value: 'gm (Gram)' },
            { key: 'mcg', value: 'mcg (Microgram)' },
            { key: 'oz', value: 'oz (Ounce)' },
            { key: 'puff', value: 'Puffs' },
            { key: 'Gtts', value: 'gtts (Drops)' },
            { key: 'OTH', value: 'OTH (Other)' }
        ];
    }
    MedicationService.prototype.convert = function (response) {
        var medication = {
            id: response.medicationId,
            name: response.name,
            code: response.code,
            notes: response.notes,
            doctor: response.prescribingDoctor,
            prescription: {
                frequency: response.frequency ? this.convertFrequency(response.frequency) : null,
                dosage: response.dosage && response.dosage !== 'null' ? Number.parseFloat(response.dosage) : null,
                strength: response.dosage && response.dosage !== 'null' ? Number.parseFloat(response.dosage) : null,
                unit: response.strengthUnit ? this.convertUnit(response.strengthUnit) : null
            }
        };
        if (response.prescribedFromDate || response.prescribedToDate) {
            medication.duration = {};
            if (response.prescribedFromDate) {
                medication.duration.from = moment$1(response.prescribedFromDate).toDate();
            }
            if (response.prescribedToDate) {
                medication.duration.to = moment$1(response.prescribedToDate).toDate();
            }
        }
        return medication;
    };
    MedicationService.prototype.convertUnit = function (unit) {
        var unitConverted = this.units.find(function (res) { return res.key === unit; });
        return unitConverted ? unitConverted.value : '';
    };
    MedicationService.prototype.convertFrequency = function (frequency) {
        var frequencyConverted = this.frequencies.find(function (res) { return res.key === frequency; });
        return frequencyConverted ? frequencyConverted.value : '';
    };
    MedicationService.prototype.fetchAll = function (individualId) {
        var _this = this;
        return this.http.get(this.config.get.apiUrl + "/vhealth_members/" + individualId + "/medications")
            .pipe(operators.map(function (response) { return response.medications.map(function (medication) { return _this.convert(medication); }); }));
    };
    MedicationService.prototype.save = function (medication, dependent) {
        var _this = this;
        var params = {
            activity: 'ADD',
            individualId: dependent.id,
            name: medication.name,
            code: medication.code,
            notes: medication.notes,
            prescribingDoctor: medication.doctor
        };
        if (medication.prescription) {
            params.dosage = String(medication.prescription.dosage);
            params.frequency = medication.prescription.frequency;
            params.strengthUnit = medication.prescription.unit;
        }
        if (medication.duration && medication.duration.from) {
            params.prescribedFromDate = this.dateUtil.formatAPIDate(medication.duration.from);
        }
        if (medication.duration && medication.duration.to) {
            params.prescribedToDate = this.dateUtil.formatAPIDate(medication.duration.to);
        }
        if (medication.id) {
            params.activity = 'UPDATE';
            params.medicationId = medication.id;
            return this.http.put(this.config.get.apiUrl + "/vhealth_medications/" + medication.id, JSON.stringify(params))
                .pipe(operators.map(function (response) { return response.medicationId ? _this.convert(response) : medication; }));
        }
        else {
            return this.http.post(this.config.get.apiUrl + "/vhealth_members/" + params.individualId + "/medications", JSON.stringify(params))
                .pipe(operators.map(function (response) { return response.medicationId ? _this.convert(response) : medication; }));
        }
    };
    MedicationService.prototype.remove = function (medicationId) {
        return this.http.delete(this.config.get.apiUrl + "/vhealth_medications/" + medicationId);
    };
    MedicationService.prototype.search = function (query) {
        var medicationResults = [];
        if (query !== undefined) {
            query = query.toLowerCase();
            medicationResults = medications.filter(function (medication) {
                return medication.toLowerCase().includes(query);
            }).map(function (medication) {
                return {
                    medicationName: medication,
                    medicationCode: medication
                };
            });
        }
        return of.of(medicationResults);
    };
    return MedicationService;
}());
MedicationService.decorators = [
    { type: core.Injectable },
];
MedicationService.ctorParameters = function () { return [
    { type: http.HttpClient, },
    { type: ConfigService, },
    { type: DateUtil, },
]; };
var DependentRelationship = {
    SELF: 'Self',
    SPOUSE: 'Spouse',
    FATHER: 'Father',
    MOTHER: 'Mother',
    BROTHER: 'Brother',
    SISTER: 'Sister',
    SON: 'Son',
    DAUGHTER: 'Daughter',
    STUDENT: 'Student',
    CHILD: 'Child',
    OTHER: 'Other',
    MARRIED_CHILD: 'Married Child',
    GRANDCHILD: 'Grandchild',
    UNMARRIED_CHILD: 'Unmarried Child',
    PARTNER: 'Partner',
    PARENT: 'Parent',
    SUBSCRIBER: 'Subscriber',
};
var VDependentBoolean = {
    YES: 'Y',
    NO: 'N',
};
var MemberService =               (function () {
    function MemberService(http$$1, config) {
        this.http = http$$1;
        this.config = config;
        this.FETCH_API = '/members/';
    }
    MemberService.prototype.getFamily = function () {
        var id = Session.INDIVIDUAL_ID;
        return this.http.get(this.config.get.apiUrl + "/members/" + id + "/family")
            .pipe(operators.map(function (response) {
            if (response.familyGroup.length > 1) {
                var index = response.familyGroup.findIndex(function (elem) { return elem.relationship === DependentRelationship.SELF; });
                var firstElem = response.familyGroup[index];
                response.familyGroup.splice(index, 1);
                response.familyGroup.unshift(firstElem);
            }
            return response.familyGroup
                .map(function (dep) { return ({ id: dep.individualId, firstName: dep.firstName, lastName: dep.lastName, registered: dep.registered, consent: dep.consent, relationship: dep.relationship, dob: new Date(dep.dob) }); });
        }));
    };
    MemberService.prototype.getDependents = function () {
        return this.getFamily().pipe(operators.map(function (response) {
            var ageLimit = moment$1().subtract(18, 'years');
            return response.filter(function (dependent) { return ageLimit.isBefore(dependent.dob) || dependent.relationship === DependentRelationship.SELF; });
        }));
    };
    MemberService.prototype.getMemberDetails = function (memberId) {
        return this.http.get("" + this.config.get.apiUrl + this.FETCH_API + memberId);
    };
    MemberService.prototype.getMemberState = function () {
        return this.http.post(this.config.get.apiUrl + "/membercurrentstate/fetch", null);
    };
    MemberService.prototype.getEmergencyContacts = function (individualId) {
        return this.http.get(this.config.get.apiUrl + "/members/" + individualId + "/emergencycontacts")
            .pipe(operators.map(function (response) { return response.emergencyContacts; }));
    };
    MemberService.prototype.addEmergencyContacts = function (params, individualId) {
        return this.http.post(this.config.get.apiUrl + "/members/" + individualId + "/emergencycontacts", JSON.stringify({ emergencyContacts: params }))
            .pipe(operators.map(function (response) { return response.emergencyContacts; }));
    };
    MemberService.prototype.registerPushToken = function (config) {
        return this.http.post(this.config.get.mockUrl + "/pushnotification/devicetagging", config);
    };
    MemberService.prototype.updateMemberDetails = function (memberId, params) {
        return this.http.post(this.config.get.apiUrl + "/members/" + memberId + "/contactdetails", JSON.stringify(params));
    };
    MemberService.prototype.checkEligibility = function (username, individualId) {
        var _this = this;
        if (!this.permissionToken) {
            return this.getPublicToken().pipe(operators.flatMap(function (res) {
                var httpOptions = {
                    headers: new http.HttpHeaders({
                        'Authorization': res.access_token
                    })
                };
                return _this.http.post(_this.config.get.mockUrl + "/eligibility", { username: username, individualId: individualId }, httpOptions)
                    .pipe(operators.map(function (res) { return res.eligible; }));
            }));
        }
        else {
            var httpOptions = {
                headers: new http.HttpHeaders({
                    'Authorization': this.permissionToken.access_token
                })
            };
            return this.http.post(this.config.get.mockUrl + "/eligibility", { username: username, individualId: individualId }, httpOptions)
                .pipe(operators.map(function (res) { return res.eligible; }));
        }
    };
    MemberService.prototype.getPublicToken = function () {
        var _this = this;
        return this.http.get("" + this.config.get.permissionUrl)
            .pipe(operators.map(function (response) {
            _this.permissionToken = response;
            return _this.permissionToken;
        }));
    };
    MemberService.prototype.invitePolicyHolders = function (params) {
        var httpOptions = {
            headers: new http.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("" + this.config.get.inviteUrl, JSON.stringify(params), httpOptions);
    };
    return MemberService;
}());
MemberService.decorators = [
    { type: core.Injectable },
];
MemberService.ctorParameters = function () { return [
    { type: http.HttpClient, },
    { type: ConfigService, },
]; };
var NotificationService =               (function () {
    function NotificationService() {
        this.currentConfig = {
            account: {
                email: true,
                sms: false,
            },
            marketing: {
                email: false,
                sms: true,
                phone: true,
            }
        };
    }
    NotificationService.prototype.fetchConfig = function () {
        return of.of(this.currentConfig);
    };
    NotificationService.prototype.updateConfig = function (notification) {
        this.currentConfig = notification;
        return of.of(this.currentConfig);
    };
    return NotificationService;
}());
NotificationService.decorators = [
    { type: core.Injectable },
];
NotificationService.ctorParameters = function () { return []; };
var ShareService =               (function () {
    function ShareService(http$$1, config) {
        this.http = http$$1;
        this.config = config;
    }
    ShareService.prototype.shareToEmail = function (email, shareOptions, dependent) {
        var params = {
            email: email,
            individualId: String(dependent.id)
        };
        Object.keys(shareOptions).forEach(function (key) {
            params[key] = shareOptions[key] ? 'Y' : 'N';
        });
        return this.http.post(this.config.get.mockUrl + "/share", JSON.stringify(params));
    };
    return ShareService;
}());
ShareService.decorators = [
    { type: core.Injectable },
];
ShareService.ctorParameters = function () { return [
    { type: http.HttpClient, },
    { type: ConfigService, },
]; };
var SurgeryService =               (function () {
    function SurgeryService(http$$1, config) {
        this.http = http$$1;
        this.config = config;
    }
    SurgeryService.prototype.convert = function (response) {
        var surgery = {
            id: response.surgeryId,
            name: response.procedureDescription,
            code: response.procedureCode,
            notes: response.notes,
            doctor: response.doctor,
            hospital: response.hospital,
            date: response.date
        };
        return surgery;
    };
    SurgeryService.prototype.fetchAll = function (individualId) {
        var _this = this;
        return this.http.get(this.config.get.apiUrl + "/vhealth_members/" + individualId + "/surgeries")
            .pipe(operators.map(function (response) { return response.surgeries.map(function (surgery) { return _this.convert(surgery); }); }));
    };
    SurgeryService.prototype.save = function (surgery, dependent) {
        var _this = this;
        var params = {
            activity: 'ADD',
            individualId: dependent.id,
            procedureDescription: surgery.name,
            procedureCode: surgery.code,
            notes: surgery.notes,
            doctor: surgery.doctor,
            hospital: surgery.hospital
        };
        if (surgery.date)
            params.date = moment$1(surgery.date).format('YYYY-MM-DD HH:mm');
        if (surgery.id) {
            params.activity = 'UPDATE';
            params.surgeryId = surgery.id;
            return this.http.put(this.config.get.apiUrl + "/vhealth_surgeries/" + params.surgeryId, JSON.stringify(params))
                .pipe(operators.map(function (response) { return response.surgeryId ? _this.convert(response) : surgery; }));
        }
        else {
            return this.http.post(this.config.get.apiUrl + "/vhealth_members/" + params.individualId + "/surgeries", JSON.stringify(params))
                .pipe(operators.map(function (response) { return response.surgeryId ? _this.convert(response) : surgery; }));
        }
    };
    SurgeryService.prototype.remove = function (surgeryId) {
        return this.http.delete(this.config.get.apiUrl + "/vhealth_surgeries/" + surgeryId);
    };
    return SurgeryService;
}());
SurgeryService.decorators = [
    { type: core.Injectable },
];
SurgeryService.ctorParameters = function () { return [
    { type: http.HttpClient, },
    { type: ConfigService, },
]; };
var TranslateHttpLoader =               (function () {
    function TranslateHttpLoader(config, http$$1) {
        this.config = config;
        this.http = http$$1;
    }
    TranslateHttpLoader.prototype.getUrl = function (lang) {
        return this.config.get.translationPrefix + "/" + lang + "." + this.config.get.translationSuffix;
    };
    TranslateHttpLoader.prototype.getTranslation = function (lang) {
        var _this = this;
        var url = this.getUrl(lang);
        return this.http.get(url)
            .pipe(operators.catchError(function (err) {
            if (lang.indexOf('-') !== -1) {
                return _this.http.get(_this.getUrl(lang.split('-')[0]));
            }
            else {
                return err;
            }
        }));
    };
    TranslateHttpLoader.factory = function (config, http$$1) {
        return new TranslateHttpLoader(config, http$$1);
    };
    return TranslateHttpLoader;
}());
var WellbeingData =               (function () {
    function WellbeingData() {
    }
    WellbeingData.data = function () {
        return [
            {
                name: 'Suggested well-being apps',
                description: 'A collection of app and websites that our vHealth team likes.',
                categories: [
                    {
                        name: 'Mindfulness',
                        items: [
                            {
                                info: {
                                    id: 'headspace',
                                    name: 'Headspace: Meditation',
                                    description: 'Breathe, sleep, relax & focus',
                                    image: ''
                                },
                                links: {
                                    android: 'https://play.google.com/store/apps/details?id=com.getsomeheadspace.android',
                                    ios: 'https://itunes.apple.com/app/id493145008',
                                    web: 'https://www.headspace.com/'
                                }
                            },
                            {
                                info: {
                                    id: 'calm',
                                    name: 'Calm',
                                    description: 'Meditation and Sleep Stories',
                                    image: ''
                                },
                                links: {
                                    android: 'https://play.google.com/store/apps/details?id=com.calm.android',
                                    ios: 'https://itunes.apple.com/app/id571800810',
                                    web: 'https://www.calm.com/'
                                }
                            },
                            {
                                info: {
                                    id: 'ginger',
                                    name: 'Ginger.io Emotional Support',
                                    description: 'Emotional Health Coaching',
                                    image: ''
                                },
                                links: {
                                    android: 'https://play.google.com/store/apps/details?id=com.ginger',
                                    ios: 'https://itunes.apple.com/app/id515118602',
                                    web: 'https://ginger.io/'
                                }
                            }
                        ]
                    },
                    {
                        name: 'Sport & Activity',
                        items: [
                            {
                                info: {
                                    id: 'nike',
                                    name: 'Nike Training Club',
                                    description: 'Workouts & fitness plans',
                                    image: ''
                                },
                                links: {
                                    android: 'https://play.google.com/store/apps/details?id=com.nike.ntc',
                                    ios: 'https://itunes.apple.com/app/id301521403',
                                    web: 'https://www.nike.com/gb/en_gb/c/nike-plus/training-app'
                                }
                            },
                            {
                                info: {
                                    id: 'strava',
                                    name: 'Strava: Run & Ride GPS Tracker',
                                    description: 'Record routes & track activity',
                                    image: ''
                                },
                                links: {
                                    android: 'https://play.google.com/store/apps/details?id=com.strava',
                                    ios: 'https://itunes.apple.com/app/id426826309',
                                    web: 'https://www.strava.com/'
                                }
                            },
                            {
                                info: {
                                    id: 'mapmyrun',
                                    name: 'Map My Run by Under Armour',
                                    description: 'GPS Running & Workout Tracker',
                                    image: ''
                                },
                                links: {
                                    android: 'https://play.google.com/store/apps/details?id=com.mapmyrun.android2',
                                    ios: 'https://itunes.apple.com/app/id291890420',
                                    web: 'https://www.mapmyrun.com/'
                                }
                            }
                        ]
                    },
                    {
                        name: 'Diet & Nutrition',
                        items: [
                            {
                                info: {
                                    id: 'lifesum',
                                    name: 'Lifesum',
                                    description: 'Keto recipes & calorie counter',
                                    image: ''
                                },
                                links: {
                                    android: 'https://play.google.com/store/apps/details?id=com.sillens.shapeupclub',
                                    ios: 'https://itunes.apple.com/us/app/lifesum-diet-health-tracker/id286906691',
                                    web: 'https://lifesum.com/'
                                }
                            },
                            {
                                info: {
                                    id: 'myfitnesspal',
                                    name: 'MyFitnessPal',
                                    description: 'Calorie Counter & Diet Tracker',
                                    image: ''
                                },
                                links: {
                                    android: 'https://play.google.com/store/apps/details?id=com.myfitnesspal.android',
                                    ios: 'https://itunes.apple.com/app/id341232718',
                                    web: 'https://www.myfitnesspal.com/'
                                }
                            },
                            {
                                info: {
                                    id: 'myplate',
                                    name: 'MyPlate Calorie Counter',
                                    description: 'Calories, Macros & Fitness',
                                    image: ''
                                },
                                links: {
                                    android: 'https://play.google.com/store/apps/details?id=com.livestrong.tracker',
                                    ios: 'https://itunes.apple.com/app/id502317923',
                                    web: 'https://www.livestrong.com/myplate/'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Trusted medical sources',
                description: 'In our experience, these sites provides reliable information.',
                categories: [
                    {
                        name: 'Medical Sources',
                        items: [
                            {
                                info: {
                                    id: 'nhs',
                                    name: 'NHS Choices',
                                    description: 'Find local NHS services and high quality health information on over 800 health conditions',
                                    image: ''
                                },
                                links: {
                                    web: 'https://www.nhs.uk'
                                }
                            },
                            {
                                info: {
                                    id: 'webmd',
                                    name: 'WebMD',
                                    description: 'The leading source for trustworthy and timely health and medical news and information',
                                    image: ''
                                },
                                links: {
                                    android: 'https://play.google.com/store/apps/details?id=com.webmd.android',
                                    ios: 'https://itunes.apple.com/app/id295076329',
                                    web: 'https://www.webmd.com/'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Our Partners',
                description: 'By having vHealth you may benefit from discounts and deals with these partners ',
                categories: [
                    {
                        name: 'Partners',
                        items: [
                            {
                                info: {
                                    id: 'aetna',
                                    name: 'Employee Assitance Program',
                                    description: 'Help for anything you\'re going through. Expert support is just a call away.',
                                    image: ''
                                },
                                links: {}
                            },
                            {
                                info: {
                                    id: 'entertainer',
                                    name: 'The Entertainer',
                                    description: 'Exclusive monthly offers',
                                    image: ''
                                },
                                links: {
                                    android: 'https://play.google.com/store/apps/details?id=com.theentertainerme.entertainer',
                                    ios: 'https://itunes.apple.com/app/id702813714',
                                    web: 'https://www.theentertainerme.com'
                                }
                            }
                        ]
                    }
                ]
            }
        ];
    };
    return WellbeingData;
}());
var WellbeingService =               (function () {
    function WellbeingService() {
    }
    WellbeingService.prototype.getLinks = function () {
        return of.of(WellbeingData.data());
    };
    return WellbeingService;
}());
var MODULE_DECLARATIONS = [
    ProgressComponent,
    AppointmentComponent,
    AppointmentSelectComponent,
    TruncateComponent,
    IconComponent,
    DocumentCardComponent,
    ErrorMessageComponent,
    RecordComponent,
    RecordGhostComponent,
    RecordTypeComponent,
    AddThumbnailComponent,
    DocumentTypeComponent,
    MembershipCardComponent,
    LinkCardComponent,
    DatePickerComponent,
    InputRatingComponent,
    OptionButtonComponent,
    TimeSlotComponent,
    MomentPipe,
    DayFormatPipe,
    HighlightPipe
];
var ɵ0 = TranslateHttpLoader.factory;
var AetnaCommonModule =               (function () {
    function AetnaCommonModule() {
    }
    AetnaCommonModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: AetnaCommonModule,
            providers: [
                AllergyService,
                AppointmentService,
                AuthService,
                common.CommonModule,
                ConditionService,
                ConsentService,
                DateUtil,
                StatsUtil,
                DocumentService,
                FamilyHistoryService,
                FamilyMembersService,
                FAQService,
                http.HttpClientModule,
                MedicationService,
                MemberService,
                NotificationService,
                ShareService,
                SurgeryService,
                WellbeingService,
                { provide: http.HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
                { provide: CONFIG_TOKEN, useValue: config },
                { provide: ConfigService, useClass: ConfigService, deps: [CONFIG_TOKEN] }
            ]
        };
    };
    return AetnaCommonModule;
}());
AetnaCommonModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: MODULE_DECLARATIONS,
                exports: __spread([
                    core$1.TranslatePipe,
                    core$1.TranslateDirective
                ], MODULE_DECLARATIONS),
                imports: [
                    common.CommonModule,
                    http.HttpClientModule,
                    core$1.TranslateModule.forRoot({
                        loader: { provide: core$1.TranslateLoader, useFactory: ɵ0, deps: [ConfigService, http.HttpClient] },
                    })
                ]
            },] },
];
AetnaCommonModule.ctorParameters = function () { return []; };
var ValidationPattern =               (function () {
    function ValidationPattern() {
    }
    return ValidationPattern;
}());
ValidationPattern.EMAIL = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
ValidationPattern.PHONE = '^([^a-zA-Z]*)$';
var mimeTypes = {
    'application/ecmascript': 'es',
    'application/epub+zip': 'epub',
    'application/java-archive': 'jar',
    'application/javascript': 'js',
    'application/json': 'json',
    'application/msword': 'doc',
    'application/octet-stream': 'bin',
    'application/ogg': 'ogx',
    'application/pdf': 'pdf',
    'application/rtf': 'rtf',
    'application/typescript': 'ts',
    'application/vnd.amazon.ebook': 'azw',
    'application/vnd.apple.installer+xml': 'mpkg',
    'application/vnd.mozilla.xul+xml': 'xul',
    'application/vnd.ms-excel': 'xls',
    'application/vnd.ms-fontobject': 'eot',
    'application/vnd.ms-powerpoint': 'ppt',
    'application/vnd.oasis.opendocument.presentation': 'odp',
    'application/vnd.oasis.opendocument.spreadsheet': 'ods',
    'application/vnd.oasis.opendocument.text': 'odt',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
    'application/vnd.visio': 'vsd',
    'application/x-7z-compressed': '7z',
    'application/x-abiword': 'abw',
    'application/x-bzip': 'bz',
    'application/x-bzip2': 'bz2',
    'application/x-csh': 'csh',
    'application/x-rar-compressed': 'rar',
    'application/x-sh': 'sh',
    'application/x-shockwave-flash': 'swf',
    'application/x-tar': 'tar',
    'application/xhtml+xml': 'xhtml',
    'application/xml': 'xml',
    'application/zip': 'zip',
    'audio/3gpp': '3gp ',
    'audio/3gpp2': '3g2 ',
    'audio/aac': 'aac',
    'audio/midi': 'midi',
    'audio/ogg': 'oga',
    'audio/wav': 'wav',
    'audio/webm': 'weba',
    'font/otf': 'otf',
    'font/ttf': 'ttf',
    'font/woff': 'woff',
    'font/woff2': 'woff2',
    'image/gif': 'gif',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/svg+xml': 'svg',
    'image/tiff': 'tiff',
    'image/webp': 'webp',
    'image/x-icon': 'ico',
    'text/calendar': 'ics',
    'text/css': 'css',
    'text/csv': 'csv',
    'text/html': 'html',
    'video/3gpp': '3gp',
    'video/3gpp2': '3g2',
    'video/mpeg': 'mpeg',
    'video/ogg': 'ogv',
    'video/webm': 'webm',
    'video/x-msvideo': 'avi'
};
var DependentRegistration = {
    true: 'Y',
    false: 'N',
};

exports.AetnaCommonModule = AetnaCommonModule;
exports.AllergyService = AllergyService;
exports.BookingAction = BookingAction;
exports.BookingChannel = BookingChannel;
exports.BookingType = BookingType;
exports.AppointmentStatus = AppointmentStatus;
exports.AppointmentService = AppointmentService;
exports.AuthStatus = AuthStatus;
exports.AuthService = AuthService;
exports.ConditionStatus = ConditionStatus;
exports.ConditionService = ConditionService;
exports.ConsentService = ConsentService;
exports.DocumentService = DocumentService;
exports.Session = Session;
exports.ConfigService = ConfigService;
exports.CONFIG_TOKEN = CONFIG_TOKEN;
exports.FAQService = FAQService;
exports.FamilyHistoryService = FamilyHistoryService;
exports.FamilyMembersService = FamilyMembersService;
exports.MedicationService = MedicationService;
exports.MemberService = MemberService;
exports.VDependentBoolean = VDependentBoolean;
exports.NotificationService = NotificationService;
exports.ShareService = ShareService;
exports.SurgeryService = SurgeryService;
exports.WellbeingService = WellbeingService;
exports.WellbeingData = WellbeingData;
exports.ValidationPattern = ValidationPattern;
exports.FileType = FileType;
exports.mimeTypes = mimeTypes;
exports.RecordType = RecordType;
exports.DependentRelationship = DependentRelationship;
exports.DependentRegistration = DependentRegistration;
exports.CommunicationType = CommunicationType;
exports.ConsentType = ConsentType;
exports.familyMemberConditions = familyMemberConditions;
exports.DateUtil = DateUtil;
exports.ɵk = AddThumbnailComponent;
exports.ɵc = AppointmentSelectComponent;
exports.ɵb = AppointmentComponent;
exports.ɵo = DatePickerComponent;
exports.ɵf = DocumentCardComponent;
exports.ɵl = DocumentTypeComponent;
exports.ɵg = ErrorMessageComponent;
exports.ɵe = IconComponent;
exports.ɵp = InputRatingComponent;
exports.ɵn = LinkCardComponent;
exports.ɵm = MembershipCardComponent;
exports.ɵq = OptionButtonComponent;
exports.ɵa = ProgressComponent;
exports.ɵi = RecordGhostComponent;
exports.ɵj = RecordTypeComponent;
exports.ɵh = RecordComponent;
exports.ɵr = TimeSlotComponent;
exports.ɵd = TruncateComponent;
exports.ɵt = DayFormatPipe;
exports.ɵu = HighlightPipe;
exports.ɵs = MomentPipe;
exports.ɵx = AuthTokenInterceptor;
exports.ɵv = TranslateHttpLoader;
exports.ɵw = StatsUtil;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=aetna-vhealth-common.umd.js.map