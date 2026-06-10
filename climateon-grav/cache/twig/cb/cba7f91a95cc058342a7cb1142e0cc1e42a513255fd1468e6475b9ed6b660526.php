<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* partials/base.html.twig */
class __TwigTemplate_3889dfe5a6de0e91534101510c464e67a176741900f37c4fa086f71bc4a46b0e extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'head' => [$this, 'block_head'],
            'stylesheets' => [$this, 'block_stylesheets'],
            'content' => [$this, 'block_content'],
            'javascripts' => [$this, 'block_javascripts'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"";
        // line 2
        echo twig_escape_filter($this->env, (($this->getAttribute($this->getAttribute(($context["grav"] ?? null), "language", []), "getActive", [])) ? ($this->getAttribute($this->getAttribute(($context["grav"] ?? null), "language", []), "getActive", [])) : ($this->getAttribute($this->getAttribute($this->getAttribute(($context["grav"] ?? null), "config", []), "site", []), "default_lang", []))), "html", null, true);
        echo "\">
<head>
";
        // line 4
        $this->displayBlock('head', $context, $blocks);
        // line 20
        echo "</head>
<body id=\"top\" class=\"";
        // line 21
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["page"] ?? null), "header", []), "body_classes", []), "html", null, true);
        echo "\">
    <header class=\"site-header\">
        <div class=\"container\">
            <a href=\"";
        // line 24
        (((($context["base_url"] ?? null) == "")) ? (print ("/")) : (print (twig_escape_filter($this->env, ($context["base_url"] ?? null), "html", null, true))));
        echo "\" class=\"logo\">
                <img src=\"";
        // line 25
        echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->urlFunc("theme://images/logo.png"), "html", null, true);
        echo "\" alt=\"Climateon Logo\" />
            </a>
            <nav class=\"main-nav\">
                <a href=\"";
        // line 28
        echo twig_escape_filter($this->env, ($context["base_url"] ?? null), "html", null, true);
        echo "/iklim-dijelaskan\">Iklim Dijelaskan</a>
                <a href=\"";
        // line 29
        echo twig_escape_filter($this->env, ($context["base_url"] ?? null), "html", null, true);
        echo "/data-story\">Data Story</a>
                <a href=\"";
        // line 30
        echo twig_escape_filter($this->env, ($context["base_url"] ?? null), "html", null, true);
        echo "/bedah-paper\">Bedah Paper</a>
                <a href=\"";
        // line 31
        echo twig_escape_filter($this->env, ($context["base_url"] ?? null), "html", null, true);
        echo "/climate-watch\">Climate Watch</a>
            </nav>
            <div class=\"search-wrap\">
                ";
        // line 35
        echo "                ";
        $__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4 = null;
        try {
            $__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4 =             $this->loadTemplate("partials/simplesearch_searchbox.html.twig", "partials/base.html.twig", 35);
        } catch (LoaderError $e) {
            // ignore missing template
        }
        if ($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4) {
            $__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4->display($context);
        }
        // line 36
        echo "            </div>
        </div>
    </header>

    <main id=\"main-content\">
        ";
        // line 41
        $this->displayBlock('content', $context, $blocks);
        // line 42
        echo "    </main>

    <footer class=\"site-footer\">
        <div class=\"container\">
            <p>&copy; ";
        // line 46
        echo twig_escape_filter($this->env, twig_date_format_filter($this->env, "now", "Y"), "html", null, true);
        echo " Climateon. All Rights Reserved.</p>
        </div>
    </footer>
    
    ";
        // line 50
        $this->displayBlock('javascripts', $context, $blocks);
        // line 58
        echo "</body>
</html>
";
    }

    // line 4
    public function block_head($context, array $blocks = [])
    {
        // line 5
        echo "    <meta charset=\"utf-8\" />
    <title>";
        // line 6
        if ($this->getAttribute(($context["header"] ?? null), "title", [])) {
            echo twig_escape_filter($this->env, $this->getAttribute(($context["header"] ?? null), "title", []), "html");
            echo " | ";
        }
        echo twig_escape_filter($this->env, $this->getAttribute(($context["site"] ?? null), "title", []), "html");
        echo "</title>
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
    ";
        // line 9
        $__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144 = null;
        try {
            $__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144 =             $this->loadTemplate("partials/metadata.html.twig", "partials/base.html.twig", 9);
        } catch (LoaderError $e) {
            // ignore missing template
        }
        if ($__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144) {
            $__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144->display($context);
        }
        // line 10
        echo "    <link rel=\"icon\" type=\"image/png\" href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->urlFunc("theme://images/favicon.png"), "html", null, true);
        echo "\" />
    <link rel=\"canonical\" href=\"";
        // line 11
        echo twig_escape_filter($this->env, $this->getAttribute(($context["page"] ?? null), "url", [0 => true, 1 => true], "method"), "html", null, true);
        echo "\" />
    
    ";
        // line 13
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 16
        echo "    
    ";
        // line 17
        echo $this->getAttribute(($context["assets"] ?? null), "css", [], "method");
        echo "
    <script src=\"https://unpkg.com/lucide@latest\" defer></script>
";
    }

    // line 13
    public function block_stylesheets($context, array $blocks = [])
    {
        // line 14
        echo "        ";
        $this->getAttribute(($context["assets"] ?? null), "addCss", [0 => "theme://css/custom.css", 1 => 100], "method");
        // line 15
        echo "    ";
    }

    // line 41
    public function block_content($context, array $blocks = [])
    {
    }

    // line 50
    public function block_javascripts($context, array $blocks = [])
    {
        // line 51
        echo "        ";
        echo $this->getAttribute(($context["assets"] ?? null), "js", [], "method");
        echo "
        <script>
            document.addEventListener(\"DOMContentLoaded\", function() {
                lucide.createIcons();
            });
        </script>
    ";
    }

    public function getTemplateName()
    {
        return "partials/base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  188 => 51,  185 => 50,  180 => 41,  176 => 15,  173 => 14,  170 => 13,  163 => 17,  160 => 16,  158 => 13,  153 => 11,  148 => 10,  138 => 9,  128 => 6,  125 => 5,  122 => 4,  116 => 58,  114 => 50,  107 => 46,  101 => 42,  99 => 41,  92 => 36,  81 => 35,  75 => 31,  71 => 30,  67 => 29,  63 => 28,  57 => 25,  53 => 24,  47 => 21,  44 => 20,  42 => 4,  37 => 2,  34 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html lang=\"{{ grav.language.getActive ?: grav.config.site.default_lang }}\">
<head>
{% block head %}
    <meta charset=\"utf-8\" />
    <title>{% if header.title %}{{ header.title|e('html') }} | {% endif %}{{ site.title|e('html') }}</title>
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
    {% include 'partials/metadata.html.twig' ignore missing %}
    <link rel=\"icon\" type=\"image/png\" href=\"{{ url('theme://images/favicon.png') }}\" />
    <link rel=\"canonical\" href=\"{{ page.url(true, true) }}\" />
    
    {% block stylesheets %}
        {% do assets.addCss('theme://css/custom.css', 100) %}
    {% endblock %}
    
    {{ assets.css()|raw }}
    <script src=\"https://unpkg.com/lucide@latest\" defer></script>
{% endblock head %}
</head>
<body id=\"top\" class=\"{{ page.header.body_classes }}\">
    <header class=\"site-header\">
        <div class=\"container\">
            <a href=\"{{ base_url == '' ? '/' : base_url }}\" class=\"logo\">
                <img src=\"{{ url('theme://images/logo.png') }}\" alt=\"Climateon Logo\" />
            </a>
            <nav class=\"main-nav\">
                <a href=\"{{ base_url }}/iklim-dijelaskan\">Iklim Dijelaskan</a>
                <a href=\"{{ base_url }}/data-story\">Data Story</a>
                <a href=\"{{ base_url }}/bedah-paper\">Bedah Paper</a>
                <a href=\"{{ base_url }}/climate-watch\">Climate Watch</a>
            </nav>
            <div class=\"search-wrap\">
                {# SimpleSearch Plugin integration #}
                {% include 'partials/simplesearch_searchbox.html.twig' ignore missing %}
            </div>
        </div>
    </header>

    <main id=\"main-content\">
        {% block content %}{% endblock %}
    </main>

    <footer class=\"site-footer\">
        <div class=\"container\">
            <p>&copy; {{ \"now\"|date(\"Y\") }} Climateon. All Rights Reserved.</p>
        </div>
    </footer>
    
    {% block javascripts %}
        {{ assets.js()|raw }}
        <script>
            document.addEventListener(\"DOMContentLoaded\", function() {
                lucide.createIcons();
            });
        </script>
    {% endblock %}
</body>
</html>
", "partials/base.html.twig", "D:\\gitclones\\climateon\\climateon\\climateon-grav\\user\\themes\\climateon\\templates\\partials\\base.html.twig");
    }
}
