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

/* partials/plugin-data.html.twig */
class __TwigTemplate_3806b4f2ef673b78e335c1e6f169e4a56ffc4ace2f7c90d021b11212ceafc900 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<table>
    ";
        // line 2
        if ($this->getAttribute(($context["plugin"] ?? null), "author", [])) {
            // line 3
            echo "    <tr>
        <td>";
            // line 4
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.AUTHOR"), "html", null, true);
            echo ":</td>
        <td class=\"double\">
            ";
            // line 6
            if ($this->getAttribute($this->getAttribute(($context["plugin"] ?? null), "author", []), "url", [])) {
                // line 7
                echo "                <a href=\"";
                echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["plugin"] ?? null), "author", []), "url", []), "html", null, true);
                echo "\" target=\"_blank\" rel=\"noopener noreferrer\">";
                echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["plugin"] ?? null), "author", []), "name", []), "html", null, true);
                echo "</a>
            ";
            } else {
                // line 9
                echo "                ";
                echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["plugin"] ?? null), "author", []), "name", []), "html", null, true);
                echo "
            ";
            }
            // line 11
            echo "            ";
            if ($this->getAttribute($this->getAttribute(($context["plugin"] ?? null), "author", []), "email", [])) {
                // line 12
                echo "                - <a href=\"mailto:";
                echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["plugin"] ?? null), "author", []), "email", []), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["plugin"] ?? null), "author", []), "email", []), "html", null, true);
                echo "</a>
            ";
            }
            // line 14
            echo "        </td>
    </tr>
    ";
        }
        // line 17
        echo "    ";
        if ($this->getAttribute(($context["plugin"] ?? null), "homepage", [])) {
            // line 18
            echo "        <tr>
            <td>";
            // line 19
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.HOMEPAGE"), "html", null, true);
            echo ":</td>
            <td class=\"double\"><a href=\"";
            // line 20
            echo twig_escape_filter($this->env, $this->getAttribute(($context["plugin"] ?? null), "homepage", []), "html", null, true);
            echo "\" target=\"_blank\" rel=\"noopener noreferrer\">";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["plugin"] ?? null), "homepage", []), "html", null, true);
            echo "</a></td>
        </tr>
    ";
        }
        // line 23
        echo "    ";
        if ($this->getAttribute(($context["plugin"] ?? null), "demo", [])) {
            // line 24
            echo "        <tr>
            <td>";
            // line 25
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.DEMO"), "html", null, true);
            echo ":</td>
            <td class=\"double\"><a href=\"";
            // line 26
            echo twig_escape_filter($this->env, $this->getAttribute(($context["plugin"] ?? null), "demo", []), "html", null, true);
            echo "\" target=\"_blank\" rel=\"noopener noreferrer\">";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["plugin"] ?? null), "demo", []), "html", null, true);
            echo "</a></td>
        </tr>
    ";
        }
        // line 29
        echo "    ";
        if ($this->getAttribute(($context["plugin"] ?? null), "bugs", [])) {
            // line 30
            echo "        <tr>
            <td>";
            // line 31
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.BUG_TRACKER"), "html", null, true);
            echo ":</td>
            <td class=\"double\"><a href=\"";
            // line 32
            echo twig_escape_filter($this->env, $this->getAttribute(($context["plugin"] ?? null), "bugs", []), "html", null, true);
            echo "\" target=\"_blank\" rel=\"noopener noreferrer\">";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["plugin"] ?? null), "bugs", []), "html", null, true);
            echo "</a></td>
        </tr>
    ";
        }
        // line 35
        echo "    ";
        if ($this->getAttribute(($context["plugin"] ?? null), "keywords", [])) {
            // line 36
            echo "        <tr>
            <td>";
            // line 37
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.KEYWORDS"), "html", null, true);
            echo ":</td>
            <td class=\"double\">";
            // line 38
            echo twig_escape_filter($this->env, twig_join_filter($this->getAttribute(($context["plugin"] ?? null), "keywords", []), ", "), "html", null, true);
            echo "</td>
        </tr>
    ";
        }
        // line 41
        echo "    ";
        if ($this->getAttribute(($context["plugin"] ?? null), "license", [])) {
            // line 42
            echo "        <tr>
            <td>";
            // line 43
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.LICENSE"), "html", null, true);
            echo ":</td>
            ";
            // line 44
            if ($this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->startsWithFilter($this->getAttribute(($context["plugin"] ?? null), "license", []), "http")) {
                // line 45
                echo "                <td class=\"double\"><a href=\"";
                echo twig_escape_filter($this->env, $this->getAttribute(($context["plugin"] ?? null), "license", []), "html", null, true);
                echo "\" target=\"_blank\">";
                echo twig_escape_filter($this->env, $this->getAttribute(($context["plugin"] ?? null), "license", []), "html", null, true);
                echo "</a></td>
            ";
            } else {
                // line 47
                echo "                <td class=\"double\">";
                echo twig_escape_filter($this->env, $this->getAttribute(($context["plugin"] ?? null), "license", []), "html", null, true);
                echo "</td>
            ";
            }
            // line 49
            echo "        </tr>
    ";
        }
        // line 51
        echo "
    <tr>
        <td>Compatibility:</td>
        <td class=\"double\">
            ";
        // line 55
        $context["compat"] = ((($this->getAttribute($this->getAttribute(($context["plugin"] ?? null), "compatibility", [], "any", false, true), "grav", [], "any", true, true) &&  !(null === $this->getAttribute($this->getAttribute(($context["plugin"] ?? null), "compatibility", [], "any", false, true), "grav", [])))) ? ($this->getAttribute($this->getAttribute(($context["plugin"] ?? null), "compatibility", [], "any", false, true), "grav", [])) : ([0 => "1.7"]));
        // line 56
        echo "            ";
        if (twig_in_filter("1.7", ($context["compat"] ?? null))) {
            echo "<span class=\"gpm-compat gpm-compat-17\">1.7</span>";
        }
        // line 57
        echo "            ";
        if (twig_in_filter("1.8", ($context["compat"] ?? null))) {
            echo "<span class=\"gpm-compat gpm-compat-18\">1.8</span>";
        }
        // line 58
        echo "            ";
        if ($this->getAttribute($this->getAttribute(($context["plugin"] ?? null), "compatibility", [], "any", false, true), "api", [], "any", true, true)) {
            // line 59
            echo "                ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute(($context["plugin"] ?? null), "compatibility", []), "api", []));
            foreach ($context['_seq'] as $context["_key"] => $context["v"]) {
                echo "<span class=\"gpm-compat gpm-compat-api\">api:";
                echo twig_escape_filter($this->env, $context["v"], "html", null, true);
                echo "</span>";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['v'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 60
            echo "            ";
        }
        // line 61
        echo "        </td>
    </tr>

    ";
        // line 64
        if ($this->getAttribute(($context["plugin"] ?? null), "description", [])) {
            // line 65
            echo "        <tr>
            <td>";
            // line 66
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.DESCRIPTION"), "html", null, true);
            echo ":</td>
            <td class=\"double\">";
            // line 67
            echo $this->getAttribute(($context["plugin"] ?? null), "description_html", []);
            echo "</td>
        </tr>
    ";
        }
        // line 70
        echo "
    ";
        // line 71
        if (($this->getAttribute(($context["plugin"] ?? null), "readme", []) || $this->getAttribute(($context["plugin"] ?? null), "homepage", []))) {
            // line 72
            echo "        ";
            $context["readme_link"] = (($this->getAttribute(($context["plugin"] ?? null), "readme", [])) ? ($this->getAttribute(($context["plugin"] ?? null), "readme", [])) : ((($this->getAttribute(($context["plugin"] ?? null), "docs", [], "any", true, true)) ? (_twig_default_filter($this->getAttribute(($context["plugin"] ?? null), "docs", []), ($this->getAttribute(($context["plugin"] ?? null), "homepage", []) . "/blob/master/README.md"))) : (($this->getAttribute(($context["plugin"] ?? null), "homepage", []) . "/blob/master/README.md")))));
            // line 73
            echo "        <tr>
            <td>";
            // line 74
            echo twig_escape_filter($this->env, (($this->getAttribute(($context["plugin"] ?? null), "readme", [])) ? ($this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.README")) : ($this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.DOCS"))), "html", null, true);
            echo ":</td>
            <td class=\"double\"><a href=\"";
            // line 75
            echo twig_escape_filter($this->env, ($context["readme_link"] ?? null), "html", null, true);
            echo "\" target=\"_blank\" rel=\"noopener noreferrer\">";
            echo twig_escape_filter($this->env, ($context["readme_link"] ?? null), "html", null, true);
            echo "</a></td>
        </tr>
    ";
        }
        // line 78
        echo "
    ";
        // line 79
        if ($this->getAttribute($this->getAttribute($this->getAttribute(($context["admin"] ?? null), "gpm", []), "findPackage", [0 => $this->getAttribute(($context["plugin"] ?? null), "slug", []), 1 => true], "method"), "changelog", [])) {
            // line 80
            echo "    <tr>
        <td>";
            // line 81
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, "PLUGIN_ADMIN.CHANGELOG"), "html", null, true);
            echo ":</td>
        <td class=\"double\"><a class=\"button button-small\" href=\"#\" data-remodal-target=\"changelog\" data-remodal-changelog=\"";
            // line 82
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Plugin\Admin\Twig\AdminTwigExtension')->adminRouteFunc(("/changelog/slug:" . $this->getAttribute(($context["plugin"] ?? null), "slug", []))), "html", null, true);
            echo "\"><i class=\"fa fa-binoculars\"></i> View Changelog</a></td>
    </tr>
    ";
        }
        // line 85
        echo "
</table>
";
    }

    public function getTemplateName()
    {
        return "partials/plugin-data.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  272 => 85,  266 => 82,  262 => 81,  259 => 80,  257 => 79,  254 => 78,  246 => 75,  242 => 74,  239 => 73,  236 => 72,  234 => 71,  231 => 70,  225 => 67,  221 => 66,  218 => 65,  216 => 64,  211 => 61,  208 => 60,  196 => 59,  193 => 58,  188 => 57,  183 => 56,  181 => 55,  175 => 51,  171 => 49,  165 => 47,  157 => 45,  155 => 44,  151 => 43,  148 => 42,  145 => 41,  139 => 38,  135 => 37,  132 => 36,  129 => 35,  121 => 32,  117 => 31,  114 => 30,  111 => 29,  103 => 26,  99 => 25,  96 => 24,  93 => 23,  85 => 20,  81 => 19,  78 => 18,  75 => 17,  70 => 14,  62 => 12,  59 => 11,  53 => 9,  45 => 7,  43 => 6,  38 => 4,  35 => 3,  33 => 2,  30 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("<table>
    {% if plugin.author %}
    <tr>
        <td>{{ \"PLUGIN_ADMIN.AUTHOR\"|t }}:</td>
        <td class=\"double\">
            {% if plugin.author.url %}
                <a href=\"{{ plugin.author.url }}\" target=\"_blank\" rel=\"noopener noreferrer\">{{ plugin.author.name }}</a>
            {% else %}
                {{ plugin.author.name }}
            {% endif %}
            {% if plugin.author.email %}
                - <a href=\"mailto:{{ plugin.author.email }}\">{{ plugin.author.email }}</a>
            {% endif %}
        </td>
    </tr>
    {% endif %}
    {% if plugin.homepage %}
        <tr>
            <td>{{ \"PLUGIN_ADMIN.HOMEPAGE\"|t }}:</td>
            <td class=\"double\"><a href=\"{{ plugin.homepage }}\" target=\"_blank\" rel=\"noopener noreferrer\">{{ plugin.homepage }}</a></td>
        </tr>
    {% endif %}
    {% if plugin.demo %}
        <tr>
            <td>{{ \"PLUGIN_ADMIN.DEMO\"|t }}:</td>
            <td class=\"double\"><a href=\"{{ plugin.demo }}\" target=\"_blank\" rel=\"noopener noreferrer\">{{ plugin.demo }}</a></td>
        </tr>
    {% endif %}
    {% if plugin.bugs %}
        <tr>
            <td>{{ \"PLUGIN_ADMIN.BUG_TRACKER\"|t }}:</td>
            <td class=\"double\"><a href=\"{{ plugin.bugs }}\" target=\"_blank\" rel=\"noopener noreferrer\">{{ plugin.bugs }}</a></td>
        </tr>
    {% endif %}
    {% if plugin.keywords %}
        <tr>
            <td>{{ \"PLUGIN_ADMIN.KEYWORDS\"|t }}:</td>
            <td class=\"double\">{{ plugin.keywords|join(', ') }}</td>
        </tr>
    {% endif %}
    {% if plugin.license %}
        <tr>
            <td>{{ \"PLUGIN_ADMIN.LICENSE\"|t }}:</td>
            {% if plugin.license|starts_with('http') %}
                <td class=\"double\"><a href=\"{{ plugin.license }}\" target=\"_blank\">{{ plugin.license }}</a></td>
            {% else %}
                <td class=\"double\">{{ plugin.license }}</td>
            {% endif %}
        </tr>
    {% endif %}

    <tr>
        <td>Compatibility:</td>
        <td class=\"double\">
            {% set compat = plugin.compatibility.grav ?? ['1.7'] %}
            {% if '1.7' in compat %}<span class=\"gpm-compat gpm-compat-17\">1.7</span>{% endif %}
            {% if '1.8' in compat %}<span class=\"gpm-compat gpm-compat-18\">1.8</span>{% endif %}
            {% if plugin.compatibility.api is defined %}
                {% for v in plugin.compatibility.api %}<span class=\"gpm-compat gpm-compat-api\">api:{{ v }}</span>{% endfor %}
            {% endif %}
        </td>
    </tr>

    {% if plugin.description %}
        <tr>
            <td>{{ \"PLUGIN_ADMIN.DESCRIPTION\"|t }}:</td>
            <td class=\"double\">{{ plugin.description_html|raw }}</td>
        </tr>
    {% endif %}

    {% if plugin.readme or plugin.homepage %}
        {% set readme_link = plugin.readme ?: plugin.docs|default(plugin.homepage ~ '/blob/master/README.md') %}
        <tr>
            <td>{{ plugin.readme ? \"PLUGIN_ADMIN.README\"|t : \"PLUGIN_ADMIN.DOCS\"|t }}:</td>
            <td class=\"double\"><a href=\"{{ readme_link }}\" target=\"_blank\" rel=\"noopener noreferrer\">{{ readme_link }}</a></td>
        </tr>
    {% endif %}

    {% if admin.gpm.findPackage(plugin.slug, true).changelog %}
    <tr>
        <td>{{ \"PLUGIN_ADMIN.CHANGELOG\"|t }}:</td>
        <td class=\"double\"><a class=\"button button-small\" href=\"#\" data-remodal-target=\"changelog\" data-remodal-changelog=\"{{ admin_route('/changelog/slug:' ~ plugin.slug) }}\"><i class=\"fa fa-binoculars\"></i> View Changelog</a></td>
    </tr>
    {% endif %}

</table>
", "partials/plugin-data.html.twig", "D:\\gitclones\\climateon\\climateon\\climateon-grav\\user\\plugins\\admin\\themes\\grav\\templates\\partials\\plugin-data.html.twig");
    }
}
