<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledMarkdownFile',
    'filename' => 'D:/gitclones/climateon/climateon/climateon-grav/user/pages/02.iklim-dijelaskan/blog.md',
    'modified' => 1781075818,
    'size' => 236,
    'data' => [
        'header' => [
            'title' => 'Iklim Dijelaskan',
            'content' => [
                'items' => '@self.children',
                'order' => [
                    'by' => 'date',
                    'dir' => 'desc'
                ],
                'limit' => 10,
                'pagination' => true
            ]
        ],
        'frontmatter' => 'title: \'Iklim Dijelaskan\'
content:
    items: \'@self.children\'
    order:
        by: date
        dir: desc
    limit: 10
    pagination: true',
        'markdown' => 'Artikel eksplanatori untuk membantu Anda memahami fenomena iklim secara sederhana.
'
    ]
];
