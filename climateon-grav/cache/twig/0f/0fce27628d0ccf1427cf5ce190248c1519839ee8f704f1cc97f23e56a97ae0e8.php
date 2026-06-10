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

/* dashboard.html.twig */
class __TwigTemplate_6824393182d1568cc71373ab8576a445c69f5367d335753b4303e7910f6a27f6 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'titlebar' => [$this, 'block_titlebar'],
            'widgets' => [$this, 'block_widgets'],
            'content' => [$this, 'block_content'],
            'content_bottom' => [$this, 'block_content_bottom'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "partials/base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 3
        $context["title"] = $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.DASHBOARD");
        // line 5
        $context["clear_cache_url"] = (((($context["base_url_relative"] ?? null) . "/cache.json/task") . $this->getAttribute($this->getAttribute(($context["config"] ?? null), "system", []), "param_sep", [])) . twig_escape_filter($this->env, "clearCache", "html_attr"));
        // line 1
        $this->parent = $this->loadTemplate("partials/base.html.twig", "dashboard.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 7
    public function block_titlebar($context, array $blocks = [])
    {
        // line 8
        echo "    <div class=\"button-bar\">
        ";
        // line 9
        if ($this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->authorize([0 => "admin.maintenance", 1 => "admin.super", 2 => "admin.cache"])) {
            // line 10
            echo "            <div class=\"button-group\">
                <button data-clear-cache-type=\"\" data-clear-cache=\"";
            // line 11
            echo twig_escape_filter($this->env, $this->getAttribute(($context["uri"] ?? null), "addNonce", [0 => ($context["clear_cache_url"] ?? null), 1 => "admin-form", 2 => "admin-nonce"], "method"), "html", null, true);
            echo "\" class=\"button\"><i class=\"fa fa-retweet\"></i> ";
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.CLEAR_CACHE"), "html", null, true);
            echo "</button>
                <button type=\"button\" class=\"button dropdown-toggle\" data-toggle=\"dropdown\">
                    <i class=\"fa fa-caret-down\"></i>
                </button>
                <ul class=\"dropdown-menu\">
                    <li><a data-clear-cache-type=\"all\" data-clear-cache=\"";
            // line 16
            echo twig_escape_filter($this->env, $this->getAttribute(($context["uri"] ?? null), "addNonce", [0 => (((($context["clear_cache_url"] ?? null) . "/cleartype") . $this->getAttribute($this->getAttribute(($context["config"] ?? null), "system", []), "param_sep", [])) . "all"), 1 => "admin-form", 2 => "admin-nonce"], "method"), "html", null, true);
            echo "\" href=\"#\">";
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.CLEAR_CACHE_ALL_CACHE"), "html", null, true);
            echo "</a></li>
                    <li><a data-clear-cache-type=\"assets-only\" data-clear-cache=\"";
            // line 17
            echo twig_escape_filter($this->env, $this->getAttribute(($context["uri"] ?? null), "addNonce", [0 => (((($context["clear_cache_url"] ?? null) . "/cleartype") . $this->getAttribute($this->getAttribute(($context["config"] ?? null), "system", []), "param_sep", [])) . "assets-only"), 1 => "admin-form", 2 => "admin-nonce"], "method"), "html", null, true);
            echo "\" href=\"#\">";
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.CLEAR_CACHE_ASSETS_ONLY"), "html", null, true);
            echo "</a></li>
                    <li><a data-clear-cache-type=\"images-only\" data-clear-cache=\"";
            // line 18
            echo twig_escape_filter($this->env, $this->getAttribute(($context["uri"] ?? null), "addNonce", [0 => (((($context["clear_cache_url"] ?? null) . "/cleartype") . $this->getAttribute($this->getAttribute(($context["config"] ?? null), "system", []), "param_sep", [])) . "images-only"), 1 => "admin-form", 2 => "admin-nonce"], "method"), "html", null, true);
            echo "\" href=\"#\">";
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.CLEAR_CACHE_IMAGES_ONLY"), "html", null, true);
            echo "</a></li>
                    <li><a data-clear-cache-type=\"cache-only\" data-clear-cache=\"";
            // line 19
            echo twig_escape_filter($this->env, $this->getAttribute(($context["uri"] ?? null), "addNonce", [0 => (((($context["clear_cache_url"] ?? null) . "/cleartype") . $this->getAttribute($this->getAttribute(($context["config"] ?? null), "system", []), "param_sep", [])) . "cache-only"), 1 => "admin-form", 2 => "admin-nonce"], "method"), "html", null, true);
            echo "\" href=\"#\">";
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.CLEAR_CACHE_CACHE_ONLY"), "html", null, true);
            echo "</a></li>
                    <li><a data-clear-cache-type=\"tmp-only\" data-clear-cache=\"";
            // line 20
            echo twig_escape_filter($this->env, $this->getAttribute(($context["uri"] ?? null), "addNonce", [0 => (((($context["clear_cache_url"] ?? null) . "/cleartype") . $this->getAttribute($this->getAttribute(($context["config"] ?? null), "system", []), "param_sep", [])) . "tmp-only"), 1 => "admin-form", 2 => "admin-nonce"], "method"), "html", null, true);
            echo "\" href=\"#\">";
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.CLEAR_CACHE_TMP_ONLY"), "html", null, true);
            echo "</a></li>
                    <li><a data-clear-cache-type=\"purge\" data-clear-cache=\"";
            // line 21
            echo twig_escape_filter($this->env, $this->getAttribute(($context["uri"] ?? null), "addNonce", [0 => (((($context["clear_cache_url"] ?? null) . "/cleartype") . $this->getAttribute($this->getAttribute(($context["config"] ?? null), "system", []), "param_sep", [])) . "purge"), 1 => "admin-form", 2 => "admin-nonce"], "method"), "html", null, true);
            echo "\" href=\"#\">";
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.CACHE_PURGE"), "html", null, true);
            echo "</a></li>
                </ul>
            </div>
        ";
        }
        // line 25
        echo "        ";
        if ($this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->authorize([0 => "admin.maintenance", 1 => "admin.super"])) {
            // line 26
            echo "            <button data-gpm-checkupdates=\"\" class=\"button\"><i class=\"fa fa-refresh\"></i> ";
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.CHECK_FOR_UPDATES"), "html", null, true);
            echo "</button>
        ";
        }
        // line 28
        echo "    </div>
    <h1><i class=\"fa fa-fw fa-th\"></i> ";
        // line 29
        echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.DASHBOARD"), "html", null, true);
        echo "</h1>
";
    }

    // line 32
    public function block_widgets($context, array $blocks = [])
    {
        // line 33
        echo "    ";
        if ($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["config"] ?? null), "plugins", []), "admin", []), "notifications", []), "dashboard", [])) {
            // line 34
            echo "    <div class=\"dashboard-notifications-container\"></div>
    ";
        }
        // line 36
        echo "
    ";
        // line 38
        echo "    ";
        $__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4 = null;
        try {
            $__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4 =             $this->loadTemplate("partials/dashboard-migration-notice.html.twig", "dashboard.html.twig", 38);
        } catch (LoaderError $e) {
            // ignore missing template
        }
        if ($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4) {
            $__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4->display($context);
        }
        // line 39
        echo "    ";
        $this->loadTemplate("partials/dashboard-problems.html.twig", "dashboard.html.twig", 39)->display($context);
        // line 40
        echo "
    <div id=\"admin-dashboard\">
        ";
        // line 42
        if ($this->getAttribute($this->getAttribute(($context["grav"] ?? null), "twig", []), "plugins_hooked_dashboard_widgets_top", [])) {
            // line 43
            echo "            ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute(($context["grav"] ?? null), "twig", []), "plugins_hooked_dashboard_widgets_top", []));
            $context['loop'] = [
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            ];
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["widget"]) {
                // line 44
                echo "                ";
                if (twig_in_filter($this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->stringFilter($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["config"] ?? null), "plugins", []), "admin", []), "widgets_display", []), $this->getAttribute($context["widget"], "template", []))), [0 => "1", 1 => "true"])) {
                    // line 45
                    echo "                    <div class=\"dashboard-item-flex\">
                        ";
                    // line 46
                    $this->loadTemplate((("partials/" . $this->getAttribute($context["widget"], "template", [])) . ".html.twig"), "dashboard.html.twig", 46)->display($context);
                    // line 47
                    echo "                    </div>
                ";
                }
                // line 49
                echo "            ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['widget'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 50
            echo "        ";
        }
        // line 51
        echo "    </div>
";
    }

    // line 54
    public function block_content($context, array $blocks = [])
    {
        // line 55
        if ($this->getAttribute($this->getAttribute(($context["grav"] ?? null), "twig", []), "plugins_hooked_dashboard_widgets_main", [])) {
            // line 56
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute(($context["grav"] ?? null), "twig", []), "plugins_hooked_dashboard_widgets_main", []));
            $context['loop'] = [
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            ];
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["widget"]) {
                // line 57
                if (twig_in_filter($this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->stringFilter($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["config"] ?? null), "plugins", []), "admin", []), "widgets_display", []), $this->getAttribute($context["widget"], "template", []))), [0 => "1", 1 => "true"])) {
                    // line 58
                    echo "                ";
                    $this->loadTemplate((("partials/" . $this->getAttribute($context["widget"], "template", [])) . ".html.twig"), "dashboard.html.twig", 58)->display($context);
                    // line 59
                    echo "            ";
                }
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['widget'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
        }
    }

    // line 64
    public function block_content_bottom($context, array $blocks = [])
    {
        // line 65
        echo "    <div id=\"admin-dashboard\">";
        // line 66
        if ($this->getAttribute($this->getAttribute(($context["grav"] ?? null), "twig", []), "plugins_hooked_dashboard_widgets_bottom", [])) {
            // line 67
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute(($context["grav"] ?? null), "twig", []), "plugins_hooked_dashboard_widgets_bottom", []));
            $context['loop'] = [
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            ];
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["widget"]) {
                // line 68
                if (twig_in_filter($this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->stringFilter($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["config"] ?? null), "plugins", []), "admin", []), "widgets_display", []), $this->getAttribute($context["widget"], "template", []))), [0 => "1", 1 => "true"])) {
                    // line 69
                    echo "                    ";
                    $this->loadTemplate((("partials/" . $this->getAttribute($context["widget"], "template", [])) . ".html.twig"), "dashboard.html.twig", 69)->display($context);
                    // line 70
                    echo "                ";
                }
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['widget'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
        }
        // line 73
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "dashboard.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  300 => 73,  284 => 70,  281 => 69,  279 => 68,  262 => 67,  260 => 66,  258 => 65,  255 => 64,  237 => 59,  234 => 58,  232 => 57,  215 => 56,  213 => 55,  210 => 54,  205 => 51,  202 => 50,  188 => 49,  184 => 47,  182 => 46,  179 => 45,  176 => 44,  158 => 43,  156 => 42,  152 => 40,  149 => 39,  138 => 38,  135 => 36,  131 => 34,  128 => 33,  125 => 32,  119 => 29,  116 => 28,  110 => 26,  107 => 25,  98 => 21,  92 => 20,  86 => 19,  80 => 18,  74 => 17,  68 => 16,  58 => 11,  55 => 10,  53 => 9,  50 => 8,  47 => 7,  42 => 1,  40 => 5,  38 => 3,  32 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'partials/base.html.twig' %}

{% set title = \"PLUGIN_ADMIN.DASHBOARD\"|t %}

{% set clear_cache_url = base_url_relative ~ '/cache.json/task' ~ config.system.param_sep ~ 'clearCache'|e('html_attr') %}

{% block titlebar %}
    <div class=\"button-bar\">
        {% if authorize(['admin.maintenance', 'admin.super', 'admin.cache']) %}
            <div class=\"button-group\">
                <button data-clear-cache-type=\"\" data-clear-cache=\"{{ uri.addNonce(clear_cache_url, 'admin-form', 'admin-nonce') }}\" class=\"button\"><i class=\"fa fa-retweet\"></i> {{ \"PLUGIN_ADMIN.CLEAR_CACHE\"|t }}</button>
                <button type=\"button\" class=\"button dropdown-toggle\" data-toggle=\"dropdown\">
                    <i class=\"fa fa-caret-down\"></i>
                </button>
                <ul class=\"dropdown-menu\">
                    <li><a data-clear-cache-type=\"all\" data-clear-cache=\"{{  uri.addNonce(clear_cache_url ~'/cleartype' ~ config.system.param_sep ~ 'all', 'admin-form', 'admin-nonce') }}\" href=\"#\">{{ \"PLUGIN_ADMIN.CLEAR_CACHE_ALL_CACHE\"|t }}</a></li>
                    <li><a data-clear-cache-type=\"assets-only\" data-clear-cache=\"{{ uri.addNonce(clear_cache_url ~'/cleartype' ~ config.system.param_sep ~ 'assets-only', 'admin-form', 'admin-nonce') }}\" href=\"#\">{{ \"PLUGIN_ADMIN.CLEAR_CACHE_ASSETS_ONLY\"|t }}</a></li>
                    <li><a data-clear-cache-type=\"images-only\" data-clear-cache=\"{{ uri.addNonce(clear_cache_url ~'/cleartype' ~ config.system.param_sep ~ 'images-only', 'admin-form', 'admin-nonce') }}\" href=\"#\">{{ \"PLUGIN_ADMIN.CLEAR_CACHE_IMAGES_ONLY\"|t }}</a></li>
                    <li><a data-clear-cache-type=\"cache-only\" data-clear-cache=\"{{ uri.addNonce(clear_cache_url ~'/cleartype' ~ config.system.param_sep ~ 'cache-only', 'admin-form', 'admin-nonce') }}\" href=\"#\">{{ \"PLUGIN_ADMIN.CLEAR_CACHE_CACHE_ONLY\"|t }}</a></li>
                    <li><a data-clear-cache-type=\"tmp-only\" data-clear-cache=\"{{ uri.addNonce(clear_cache_url ~'/cleartype' ~ config.system.param_sep ~ 'tmp-only', 'admin-form', 'admin-nonce') }}\" href=\"#\">{{ \"PLUGIN_ADMIN.CLEAR_CACHE_TMP_ONLY\"|t }}</a></li>
                    <li><a data-clear-cache-type=\"purge\" data-clear-cache=\"{{ uri.addNonce(clear_cache_url ~'/cleartype' ~ config.system.param_sep ~ 'purge', 'admin-form', 'admin-nonce') }}\" href=\"#\">{{ \"PLUGIN_ADMIN.CACHE_PURGE\"|t }}</a></li>
                </ul>
            </div>
        {% endif %}
        {% if authorize(['admin.maintenance', 'admin.super']) %}
            <button data-gpm-checkupdates=\"\" class=\"button\"><i class=\"fa fa-refresh\"></i> {{ \"PLUGIN_ADMIN.CHECK_FOR_UPDATES\"|t }}</button>
        {% endif %}
    </div>
    <h1><i class=\"fa fa-fw fa-th\"></i> {{ \"PLUGIN_ADMIN.DASHBOARD\"|t }}</h1>
{% endblock %}

{% block widgets %}
    {% if config.plugins.admin.notifications.dashboard %}
    <div class=\"dashboard-notifications-container\"></div>
    {% endif %}

    {# System notifications, cannot be turned off #}
    {% include 'partials/dashboard-migration-notice.html.twig' ignore missing %}
    {% include 'partials/dashboard-problems.html.twig' %}

    <div id=\"admin-dashboard\">
        {% if grav.twig.plugins_hooked_dashboard_widgets_top %}
            {% for widget in grav.twig.plugins_hooked_dashboard_widgets_top %}
                {% if attribute(config.plugins.admin.widgets_display, widget.template)|string in ['1', 'true'] %}
                    <div class=\"dashboard-item-flex\">
                        {% include 'partials/' ~ widget.template ~ '.html.twig' %}
                    </div>
                {% endif %}
            {% endfor %}
        {% endif %}
    </div>
{% endblock %}

{% block content %}
    {%- if grav.twig.plugins_hooked_dashboard_widgets_main -%}
        {%- for widget in grav.twig.plugins_hooked_dashboard_widgets_main -%}
            {% if attribute(config.plugins.admin.widgets_display, widget.template)|string in ['1', 'true'] %}
                {% include 'partials/' ~ widget.template ~ '.html.twig' %}
            {% endif -%}
        {%- endfor -%}
    {%- endif -%}
{% endblock %}

{% block content_bottom %}
    <div id=\"admin-dashboard\">
        {%- if grav.twig.plugins_hooked_dashboard_widgets_bottom -%}
            {%- for widget in grav.twig.plugins_hooked_dashboard_widgets_bottom -%}
                {% if attribute(config.plugins.admin.widgets_display, widget.template)|string in ['1', 'true'] %}
                    {% include 'partials/' ~ widget.template ~ '.html.twig' %}
                {% endif -%}
            {%- endfor -%}
        {%- endif -%}
    </div>
{% endblock %}
", "dashboard.html.twig", "D:\\gitclones\\climateon\\climateon\\climateon-grav\\user\\plugins\\admin\\themes\\grav\\templates\\dashboard.html.twig");
    }
}
