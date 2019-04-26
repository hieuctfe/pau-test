const helper = {
    /* create unique id */
    createId() {
        var text = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (text() + text() + "" + text() + "" + text() + "" + text() + "" + text() + text() + text());
    },
    /* return true if value is type int */
    isNumeric(value) {
        return /^-{0,1}\d+$/.test(value)
    },
    /* return true if value is type int or float */
    isNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value)
    },
    /* return false word has indexof array */
    excluded(arr = [], value = '') {
        let str = String(value)
        let words = str.split(' ').filter(item => (item != '' && arr.indexOf(item) >= 0))
        return words.length == 0
    },
    /* return array file reader with config object */
    getBase64: async function ({files, config}) {
        var arr = []

        function readFileData(file) {
            return new Promise((resolve, reject) => {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var img = new Image();
                    img.src = e.target.result;
                    img.onload = function () {
                        if (this.width >= config.minWidth && this.height >= config.minHeight && file.size <= (config.maxSizeUpload * 1024 * 1024)) {
                            arr.push({
                                id: helper.createId(),
                                src: e.target.result,
                                name: name,
                                size: file.size,
                                type: file.name.replace(/^.*\./, ''),
                                file: file
                            })
                        } else {
                            $notify({
                                content: `${file.name}  is invalid `,
                                type: 'warning',
                                timeout: 2000
                            })
                        }
                        resolve()
                    }
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            })
        }

        if (files.length) {
            const promisesToAwait = [];
            for (let i = 0; i < files.length; i++) {
                promisesToAwait.push(readFileData(files[i]));
            }
            const responses = await Promise.all(promisesToAwait);
        }
        ;


        return new Promise((resolve) => {
            resolve(arr)
        })
    },
    hash(params) {
        var h = 0, i = 0;
        if (typeof (params) === "string") {
            for (i = 0; i < params.length; i++) {
                h = (h * 31 + params.charCodeAt(i)) & 0xffffffff;
            }
        }
        else if (params instanceof Array) {
            for (i in params) {
                h ^= helper.hash(params[i]);
            }
        }
        return h;
    },
    toSlug(text) {
        var title, slug;
        slug = text.toLowerCase();
        slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
        slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
        slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
        slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
        slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
        slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
        slug = slug.replace(/đ/gi, 'd');
        slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
        slug = slug.replace(/ /gi, "-");
        slug = slug.replace(/\-\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-/gi, '-');
        slug = slug.replace(/\-\-/gi, '-');
        slug = '@' + slug + '@';
        return slug.replace(/\@\-|\-\@|\@/gi, '');
    },
    isInterger(n) {
        return n % 1 === 0
    },
    isFloat(n) {
        return n % 1 !== 0
    },
    numberFormat(value) {
        if (helper.isNumeric(value)) {
            var number = parseInt(value)
            return number.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        } else {
            var number = parseFloat(value)
            return number.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        }
    },
    findDeep( object , key , predicate ){
        if (object.hasOwnProperty(key) && predicate(key, object[key]) === true) return object

        for (let i = 0; i < Object.keys(object).length; i++) {
            if (typeof object[Object.keys(object)[i]] === "object") {
                let o = helper.findDeep(object[Object.keys(object)[i]], key, predicate)
                if (o != null) return o
            }
        }
        return null
    },
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    validatewebsite(website) {
        var re = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        return re.test(String(website).toLowerCase());
    },
}
export default helper
