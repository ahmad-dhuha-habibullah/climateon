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

/* blog.html.twig */
class __TwigTemplate_8ebfc64542eb1721e22f8464350e49fbcf4ab58e61d3f1daf56bc4255152f796 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'content' => [$this, 'block_content'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "partials/base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("partials/base.html.twig", "blog.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_content($context, array $blocks = [])
    {
        // line 4
        echo "    <div class=\"container blog-wrapper\">
        <header class=\"page-header\">
            <h1>";
        // line 6
        echo twig_escape_filter($this->env, $this->getAttribute(($context["page"] ?? null), "title", []), "html", null, true);
        echo "</h1>
            ";
        // line 7
        if ($this->getAttribute(($context["page"] ?? null), "content", [])) {
            // line 8
            echo "                <div class=\"category-description\">";
            echo $this->getAttribute(($context["page"] ?? null), "content", []);
            echo "</div>
            ";
        }
        // line 10
        echo "        </header>
        
        <div class=\"posts-grid\">
            ";
        // line 13
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["page"] ?? null), "collection", []));
        $context['_iterated'] = false;
        foreach ($context['_seq'] as $context["_key"] => $context["child"]) {
            // line 14
            echo "                <article class=\"post-card\">
                    ";
            // line 15
            if (twig_first($this->env, $this->getAttribute($this->getAttribute($context["child"], "media", []), "images", []))) {
                // line 16
                echo "                        <div class=\"post-image\">
                            ";
                // line 17
                echo $this->getAttribute($this->getAttribute(twig_first($this->env, $this->getAttribute($this->getAttribute($context["child"], "media", []), "images", [])), "cropZoom", [0 => 600, 1 => 400], "method"), "html", []);
                echo "
                        </div>
                    ";
            }
            // line 20
            echo "                    <div class=\"post-card-content\">
                        <h2><a href=\"";
            // line 21
            echo twig_escape_filter($this->env, $this->getAttribute($context["child"], "url", []), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, $this->getAttribute($context["child"], "title", []), "html", null, true);
            echo "</a></h2>
                        <div class=\"post-meta\">
                            <span class=\"date\">";
            // line 23
            echo twig_escape_filter($this->env, twig_date_format_filter($this->env, $this->getAttribute($context["child"], "date", []), "d M Y"), "html", null, true);
            echo "</span>
                            ";
            // line 24
            if ($this->getAttribute($this->getAttribute($context["child"], "header", []), "author", [])) {
                // line 25
                echo "                                <span class=\"author\">oleh ";
                echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["child"], "header", []), "author", []), "html", null, true);
                echo "</span>
                            ";
            }
            // line 27
            echo "                        </div>
                        <p class=\"excerpt\">";
            // line 28
            echo twig_escape_filter($this->env, Grav\Common\Utils::truncate(strip_tags($this->getAttribute($context["child"], "summary", [])), 150), "html", null, true);
            echo "</p>
                    </div>
                </article>
            ";
            $context['_iterated'] = true;
        }
        if (!$context['_iterated']) {
            // line 32
            echo "                <p>Belum ada artikel di kategori ini.</p>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['child'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 34
        echo "        </div>
    </div>
";
    }

    public function getTemplateName()
    {
        return "blog.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  123 => 34,  116 => 32,  107 => 28,  104 => 27,  98 => 25,  96 => 24,  92 => 23,  85 => 21,  82 => 20,  76 => 17,  73 => 16,  71 => 15,  68 => 14,  63 => 13,  58 => 10,  52 => 8,  50 => 7,  46 => 6,  42 => 4,  39 => 3,  29 => 1,);
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

{% block content %}
    <div class=\"container blog-wrapper\">
        <header class=\"page-header\">
            <h1>{{ page.title }}</h1>
            {% if page.content %}
                <div class=\"category-description\">{{ page.content|raw }}</div>
            {% endif %}
        </header>
        
        <div class=\"posts-grid\">
            {% for child in page.collection %}
                <article class=\"post-card\">
                    {% if child.media.images|first %}
                        <div class=\"post-image\">
                            {{ child.media.images|first.cropZoom(600,400).html|raw }}
                        </div>
                    {% endif %}
                    <div class=\"post-card-content\">
                        <h2><a href=\"{{ child.url }}\">{{ child.title }}</a></h2>
                        <div class=\"post-meta\">
                            <span class=\"date\">{{ child.date|date(\"d M Y\") }}</span>
                            {% if child.header.author %}
                                <span class=\"author\">oleh {{ child.header.author }}</span>
                            {% endif %}
                        </div>
                        <p class=\"excerpt\">{{ child.summary|striptags|truncate(150) }}</p>
                    </div>
                </article>
            {% else %}
                <p>Belum ada artikel di kategori ini.</p>
            {% endfor %}
        </div>
    </div>
{% endblock %}
", "blog.html.twig", "D:\\gitclones\\climateon\\climateon\\climateon-grav\\user\\themes\\climateon\\templates\\blog.html.twig");
    }
}
