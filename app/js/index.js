window.$docsify = {
    name: '剑指offer',
    loadNavbar: true,
    loadNavbar: "./pages/nav.md",
    repo: 'https://github.com/eveningwater/to-offer',
    loadSidebar: "./pages/sidebar.md",
    alias: {
        '/.*/sidebar.md': 'pages/sidebar.md',
        '/.*/nav.md': 'pages/nav.md'
    },
    coverpage: "./pages/coverpage.md",
    autoHeader: true,
    mergeNavbar: true,
    plugins: [(hook) => {
        var footer = ['<hr/>', '<footer>',
            `<p>
                MIT Licensed | Copyright © 2020-present&nbsp;&nbsp;<a href="https://github.com/eveningwater">eveningwater</a>&nbsp;
                Proudly published with <a href="https://github.com/docsifyjs/docsify" target="_blank">docsify</a>
            </p>`, '</footer>'].join('');
        hook.afterEach(html => html + footer);
    },
    (hook, vm) => {
        hook.beforeEach(function (html) {
            const url = 'https://github.com/eveningwater/eveningwater.github.io/blob/master/' + vm.route.file;
            const editHtml = '[📝 EDIT DOCUMENT](' + url + ')';
            return (
                html + '\n----\n' + 'Last modified {docsify-updated} ' + editHtml
            );
        });
    }
    ],
    search: {
        maxAge: 86400000, // 过期时间，单位毫秒，默认一天
        paths: "auto", // or 'auto'
        placeholder: '请输入需要搜索的内容',
        noData: 'No Results!',
        // 搜索标题的最大程级, 1 - 6
        depth: 6
    },
    markdown: {
        renderer: {
            code: function (code, lang) {
                if (lang === 'tex') {
                    return katex.renderToString(
                        code,
                        {
                            throwOnError: false,
                            displayMode: true
                        }
                    )
                }
                return this.origin.code.apply(this, arguments)
            }
        }
    }
}
