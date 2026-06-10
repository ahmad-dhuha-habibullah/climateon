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

/* iframe.html.twig */
class __TwigTemplate_c76f6f9c7da32141c7ba453459707dad5b1308f46476621ecd88cc57851ee48f extends \Twig\Template
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
        $this->parent = $this->loadTemplate("partials/base.html.twig", "iframe.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_content($context, array $blocks = [])
    {
        // line 4
        echo "    <div class=\"iframe-container\">
        <header class=\"page-header container\">
            <h1>";
        // line 6
        echo twig_escape_filter($this->env, $this->getAttribute(($context["page"] ?? null), "title", []), "html", null, true);
        echo "</h1>
            <p>";
        // line 7
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["page"] ?? null), "header", []), "description", []), "html", null, true);
        echo "</p>
        </header>
        
        <iframe 
            src=\"";
        // line 11
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["page"] ?? null), "header", []), "iframe_url", []), "html", null, true);
        echo "\" 
            width=\"100%\" 
            height=\"800px\" 
            frameborder=\"0\" 
            allowfullscreen>
        </iframe>
    </div>
";
    }

    public function getTemplateName()
    {
        return "iframe.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  57 => 11,  50 => 7,  46 => 6,  42 => 4,  39 => 3,  29 => 1,);
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
    <div class=\"iframe-container\">
        <header class=\"page-header container\">
            <h1>{{ page.title }}</h1>
            <p>{{ page.header.description }}</p>
        </header>
        
        <iframe 
            src=\"{{ page.header.iframe_url }}\" 
            width=\"100%\" 
            height=\"800px\" 
            frameborder=\"0\" 
            allowfullscreen>
        </iframe>
    </div>
{% endblock %}
", "iframe.html.twig", "D:\\gitclones\\climateon\\climateon\\climateon-grav\\user\\themes\\climateon\\templates\\iframe.html.twig");
    }
}
