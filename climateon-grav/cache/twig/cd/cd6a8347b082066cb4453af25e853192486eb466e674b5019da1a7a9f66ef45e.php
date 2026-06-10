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

/* forms/fields/number/number.html.twig */
class __TwigTemplate_68db8c4cc0f7baf345a27c93caed73d1847453588572fadfff7722705e82240f extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'input_attributes' => [$this, 'block_input_attributes'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "forms/fields/text/text.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("forms/fields/text/text.html.twig", "forms/fields/number/number.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_input_attributes($context, array $blocks = [])
    {
        // line 4
        echo "    type=\"number\"
    ";
        // line 5
        if ($this->getAttribute($this->getAttribute(($context["field"] ?? null), "validate", [], "any", false, true), "min", [], "any", true, true)) {
            echo "min=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["field"] ?? null), "validate", []), "min", []), "html", null, true);
            echo "\"";
        }
        // line 6
        echo "    ";
        if ($this->getAttribute($this->getAttribute(($context["field"] ?? null), "validate", [], "any", false, true), "max", [], "any", true, true)) {
            echo "max=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["field"] ?? null), "validate", []), "max", []), "html", null, true);
            echo "\"";
        }
        // line 7
        echo "    ";
        if ($this->getAttribute($this->getAttribute(($context["field"] ?? null), "validate", [], "any", false, true), "step", [], "any", true, true)) {
            echo "step=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["field"] ?? null), "validate", []), "step", []), "html", null, true);
            echo "\"";
        }
        // line 8
        echo "    ";
        // line 9
        echo "    ";
        if ($this->getAttribute(($context["field"] ?? null), "size", [])) {
            echo "size=\"";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "size", []), "html", null, true);
            echo "\"";
        }
        // line 10
        echo "    ";
        if ($this->getAttribute(($context["field"] ?? null), "classes", [], "any", true, true)) {
            echo "class=\"";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "classes", []), "html", null, true);
            echo "\" ";
        }
        // line 11
        echo "    ";
        if ($this->getAttribute(($context["field"] ?? null), "id", [], "any", true, true)) {
            echo "id=\"";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "id", []), "html", null, true);
            echo "\" ";
        }
        // line 12
        echo "    ";
        if ($this->getAttribute(($context["field"] ?? null), "style", [], "any", true, true)) {
            echo "style=\"";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "style", []), "html", null, true);
            echo "\" ";
        }
        // line 13
        echo "    ";
        if (($this->getAttribute(($context["field"] ?? null), "disabled", []) || ($context["isDisabledToggleable"] ?? null))) {
            echo "disabled=\"disabled\"";
        }
        // line 14
        echo "    ";
        if ($this->getAttribute(($context["field"] ?? null), "placeholder", [])) {
            echo "placeholder=\"";
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, $this->getAttribute(($context["field"] ?? null), "placeholder", [])), "html", null, true);
            echo "\"";
        }
        // line 15
        echo "    ";
        if (twig_in_filter($this->getAttribute(($context["field"] ?? null), "autofocus", []), [0 => "on", 1 => "true", 2 => 1])) {
            echo "autofocus=\"autofocus\"";
        }
        // line 16
        echo "    ";
        if (twig_in_filter($this->getAttribute(($context["field"] ?? null), "novalidate", []), [0 => "on", 1 => "true", 2 => 1])) {
            echo "novalidate=\"novalidate\"";
        }
        // line 17
        echo "    ";
        if (twig_in_filter($this->getAttribute(($context["field"] ?? null), "readonly", []), [0 => "on", 1 => "true", 2 => 1])) {
            echo "readonly=\"readonly\"";
        }
        // line 18
        echo "    ";
        if ($this->getAttribute(($context["field"] ?? null), "autocomplete", [], "any", true, true)) {
            echo "autocomplete=\"";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "autocomplete", []), "html", null, true);
            echo "\"";
        }
        // line 19
        echo "    ";
        if (twig_in_filter($this->getAttribute($this->getAttribute(($context["field"] ?? null), "validate", []), "required", []), [0 => "on", 1 => "true", 2 => 1])) {
            echo "required=\"required\"";
        }
        // line 20
        echo "    ";
        if ($this->getAttribute($this->getAttribute(($context["field"] ?? null), "validate", []), "pattern", [])) {
            echo "pattern=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["field"] ?? null), "validate", []), "pattern", []), "html", null, true);
            echo "\"";
        }
        // line 21
        echo "    ";
        if ($this->getAttribute($this->getAttribute(($context["field"] ?? null), "validate", []), "message", [])) {
            echo "title=\"";
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, $this->getAttribute($this->getAttribute(($context["field"] ?? null), "validate", []), "message", [])), "html", null, true);
            echo "\"
    ";
        } elseif ($this->getAttribute(        // line 22
($context["field"] ?? null), "title", [], "any", true, true)) {
            echo "title=\"";
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, $this->getAttribute(($context["field"] ?? null), "title", [])), "html", null, true);
            echo "\" ";
        }
    }

    public function getTemplateName()
    {
        return "forms/fields/number/number.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  148 => 22,  141 => 21,  134 => 20,  129 => 19,  122 => 18,  117 => 17,  112 => 16,  107 => 15,  100 => 14,  95 => 13,  88 => 12,  81 => 11,  74 => 10,  67 => 9,  65 => 8,  58 => 7,  51 => 6,  45 => 5,  42 => 4,  39 => 3,  29 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("{% extends \"forms/fields/text/text.html.twig\" %}

{% block input_attributes %}
    type=\"number\"
    {% if field.validate.min is defined %}min=\"{{ field.validate.min }}\"{% endif %}
    {% if field.validate.max is defined %}max=\"{{ field.validate.max }}\"{% endif %}
    {% if field.validate.step is defined %}step=\"{{ field.validate.step }}\"{% endif %}
    {# Skip text.html.twig's minlength/maxlength and go directly to field.html.twig #}
    {% if field.size %}size=\"{{ field.size }}\"{% endif %}
    {% if field.classes is defined %}class=\"{{ field.classes }}\" {% endif %}
    {% if field.id is defined %}id=\"{{ field.id }}\" {% endif %}
    {% if field.style is defined %}style=\"{{ field.style }}\" {% endif %}
    {% if field.disabled or isDisabledToggleable %}disabled=\"disabled\"{% endif %}
    {% if field.placeholder %}placeholder=\"{{ field.placeholder|t }}\"{% endif %}
    {% if field.autofocus in ['on', 'true', 1] %}autofocus=\"autofocus\"{% endif %}
    {% if field.novalidate in ['on', 'true', 1] %}novalidate=\"novalidate\"{% endif %}
    {% if field.readonly in ['on', 'true', 1] %}readonly=\"readonly\"{% endif %}
    {% if field.autocomplete is defined %}autocomplete=\"{{ field.autocomplete }}\"{% endif %}
    {% if field.validate.required in ['on', 'true', 1] %}required=\"required\"{% endif %}
    {% if field.validate.pattern %}pattern=\"{{ field.validate.pattern }}\"{% endif %}
    {% if field.validate.message %}title=\"{{ field.validate.message|t }}\"
    {% elseif field.title is defined %}title=\"{{ field.title|t }}\" {% endif %}
{% endblock %}", "forms/fields/number/number.html.twig", "D:\\gitclones\\climateon\\climateon\\climateon-grav\\user\\plugins\\form\\templates\\forms\\fields\\number\\number.html.twig");
    }
}
