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

/* forms/fields/select/select.html.twig */
class __TwigTemplate_91168ac972c9fcdba9d5b893741ed9770f4c05676af524d0db72c650f9080cf9 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'global_attributes' => [$this, 'block_global_attributes'],
            'input' => [$this, 'block_input'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "forms/field.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("forms/field.html.twig", "forms/fields/select/select.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_global_attributes($context, array $blocks = [])
    {
        // line 4
        echo "    data-grav-selectize=\"";
        echo twig_escape_filter($this->env, twig_jsonencode_filter((($this->getAttribute(($context["field"] ?? null), "selectize", [], "any", true, true)) ? ($this->getAttribute(($context["field"] ?? null), "selectize", [])) : ([]))), "html_attr");
        echo "\"
    ";
        // line 5
        $this->displayParentBlock("global_attributes", $context, $blocks);
        echo "
";
    }

    // line 8
    public function block_input($context, array $blocks = [])
    {
        // line 9
        echo "    <div class=\"";
        ((($context["form_field_wrapper_classes"] ?? null)) ? (print (twig_escape_filter($this->env, ($context["form_field_wrapper_classes"] ?? null), "html", null, true))) : (print ("form-select-wrapper")));
        echo " ";
        echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "size", []), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "wrapper_classes", []), "html", null, true);
        echo "\">
        <select name=\"";
        // line 10
        echo twig_escape_filter($this->env, ($this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->fieldNameFilter((($context["scope"] ?? null) . $this->getAttribute(($context["field"] ?? null), "name", []))) . (($this->getAttribute(($context["field"] ?? null), "multiple", [])) ? ("[]") : (""))), "html", null, true);
        echo "\"
                class=\"";
        // line 11
        echo twig_escape_filter($this->env, ($context["form_field_select_classes"] ?? null), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "classes", []), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "size", []), "html", null, true);
        echo "\"
                ";
        // line 12
        if ($this->getAttribute(($context["field"] ?? null), "id", [], "any", true, true)) {
            echo "id=\"";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "id", []));
            echo "\" ";
        }
        // line 13
        echo "                ";
        if ($this->getAttribute(($context["field"] ?? null), "style", [], "any", true, true)) {
            echo "style=\"";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "style", []));
            echo "\" ";
        }
        // line 14
        echo "                ";
        if ($this->getAttribute(($context["field"] ?? null), "disabled", [])) {
            echo "disabled=\"disabled\"";
        }
        // line 15
        echo "                ";
        if (twig_in_filter($this->getAttribute(($context["field"] ?? null), "autofocus", []), [0 => "on", 1 => "true", 2 => 1])) {
            echo "autofocus=\"autofocus\"";
        }
        // line 16
        echo "                ";
        if (twig_in_filter($this->getAttribute(($context["field"] ?? null), "novalidate", []), [0 => "on", 1 => "true", 2 => 1])) {
            echo "novalidate=\"novalidate\"";
        }
        // line 17
        echo "                ";
        if (($context["required"] ?? null)) {
            echo "required=\"required\"";
        }
        // line 18
        echo "                ";
        if (twig_in_filter($this->getAttribute(($context["field"] ?? null), "multiple", []), [0 => "on", 1 => "true", 2 => 1])) {
            echo "multiple=\"multiple\"";
        }
        // line 19
        echo "                ";
        if (($this->getAttribute(($context["field"] ?? null), "disabled", []) || ($context["isDisabledToggleable"] ?? null))) {
            echo "disabled=\"disabled\"";
        }
        // line 20
        echo "                ";
        if ($this->getAttribute(($context["field"] ?? null), "tabindex", [])) {
            echo "tabindex=\"";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "tabindex", []), "html", null, true);
            echo "\"";
        }
        // line 21
        echo "                ";
        if ($this->getAttribute(($context["field"] ?? null), "form", [])) {
            echo "form=\"";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "form", []), "html", null, true);
            echo "\"";
        }
        // line 22
        echo "                ";
        if ($this->getAttribute(($context["field"] ?? null), "autocomplete", [], "any", true, true)) {
            echo "autocomplete=\"";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["field"] ?? null), "autocomplete", []), "html", null, true);
            echo "\"";
        }
        // line 23
        echo "                ";
        if ($this->getAttribute(($context["field"] ?? null), "key", [])) {
            // line 24
            echo "                    data-key-observe=\"";
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->fieldNameFilter((($context["scope"] ?? null) . $this->getAttribute(($context["field"] ?? null), "name", []))), "html", null, true);
            echo "\"
                ";
        }
        // line 26
        echo "                ";
        if ($this->getAttribute(($context["field"] ?? null), "datasets", [])) {
            // line 27
            echo "                    ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["field"] ?? null), "datasets", []));
            foreach ($context['_seq'] as $context["datakey"] => $context["datavalue"]) {
                // line 28
                echo "                        data-";
                echo twig_escape_filter($this->env, $context["datakey"], "html", null, true);
                echo "=\"";
                echo twig_escape_filter($this->env, $context["datavalue"], "html_attr");
                echo "\"
                    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['datakey'], $context['datavalue'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 30
            echo "                ";
        }
        // line 31
        echo "                ";
        if ($this->getAttribute(($context["field"] ?? null), "attributes", [])) {
            // line 32
            echo "                    ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["field"] ?? null), "attributes", []));
            foreach ($context['_seq'] as $context["key"] => $context["value"]) {
                // line 33
                echo "                        ";
                echo twig_escape_filter($this->env, $context["key"], "html", null, true);
                echo "=\"";
                echo twig_escape_filter($this->env, $context["value"], "html_attr");
                echo "\"
                    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['key'], $context['value'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 35
            echo "                ";
        }
        // line 36
        echo "                >
            ";
        // line 37
        if ($this->getAttribute(($context["field"] ?? null), "placeholder", [])) {
            echo "<option value=\"\" disabled selected>";
            echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, $this->getAttribute(($context["field"] ?? null), "placeholder", [])), "html", null, true);
            echo "</option>";
        }
        // line 38
        echo "
            ";
        // line 39
        $context["options"] = $this->getAttribute(($context["field"] ?? null), "options", []);
        // line 40
        echo "            ";
        if (($this->getAttribute($this->getAttribute(($context["field"] ?? null), "selectize", []), "create", []) && ($context["value"] ?? null))) {
            // line 41
            echo "              ";
            $context["custom_value"] = (($this->getAttribute(($context["field"] ?? null), "multiple", [])) ? (($context["value"] ?? null)) : ([($context["value"] ?? null) => ($context["value"] ?? null)]));
            // line 42
            echo "              ";
            $context["options"] = array_unique(twig_array_merge(($context["options"] ?? null), ((array_key_exists("custom_value", $context)) ? (_twig_default_filter(($context["custom_value"] ?? null), [])) : ([]))));
            // line 43
            echo "            ";
        }
        // line 44
        echo "
            ";
        // line 48
        echo "            ";
        $context["selectize_store_keys"] = ((($this->getAttribute($this->getAttribute(($context["field"] ?? null), "selectize", [], "any", false, true), "store_keys", [], "any", true, true) &&  !(null === $this->getAttribute($this->getAttribute(($context["field"] ?? null), "selectize", [], "any", false, true), "store_keys", [])))) ? ($this->getAttribute($this->getAttribute(($context["field"] ?? null), "selectize", [], "any", false, true), "store_keys", [])) : (false));
        // line 49
        echo "            ";
        $context["selectize_use_label_as_value"] = (($this->getAttribute(($context["field"] ?? null), "selectize", []) && $this->getAttribute(($context["field"] ?? null), "multiple", [])) &&  !($context["selectize_store_keys"] ?? null));
        // line 50
        echo "
            ";
        // line 51
        $context["value"] = ((twig_test_iterable(($context["value"] ?? null))) ? (($context["value"] ?? null)) : ($this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->stringFilter(($context["value"] ?? null))));
        // line 52
        echo "            ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["options"] ?? null));
        foreach ($context['_seq'] as $context["key"] => $context["item_value"]) {
            // line 53
            echo "                ";
            if ((twig_test_iterable($context["item_value"]) && $this->getAttribute($context["item_value"], "value", []))) {
                // line 54
                echo "                    ";
                $context["akey"] = ((($context["selectize_use_label_as_value"] ?? null)) ? ($context["item_value"]) : ($context["key"]));
                // line 55
                echo "                    ";
                $context["avalue"] = $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, $this->getAttribute($context["item_value"], "value", []));
                // line 56
                echo "                    <option ";
                echo (($this->getAttribute($context["item_value"], "disabled", [])) ? ("disabled=\"disabled\"") : (""));
                echo "
                        ";
                // line 57
                echo ((($this->getAttribute($context["item_value"], "selected", []) || ($context["key"] == ($context["value"] ?? null)))) ? ("selected=\"selected\"") : (""));
                echo "
                        ";
                // line 58
                (($this->getAttribute($context["item_value"], "label", [])) ? (print (twig_escape_filter($this->env, ("label=" . $this->getAttribute($context["item_value"], "label", [])), "html", null, true))) : (print ("")));
                echo "
                        value=\"";
                // line 59
                echo twig_escape_filter($this->env, ($context["akey"] ?? null), "html", null, true);
                echo "\"
                    >
                        ";
                // line 64
                echo "                        ";
                echo twig_escape_filter($this->env, ($context["avalue"] ?? null), "html", null, true);
                echo "
                    </option>
                ";
            } elseif (twig_test_iterable(            // line 66
$context["item_value"])) {
                // line 67
                echo "                    ";
                $context["optgroup_label"] = twig_first($this->env, twig_get_array_keys_filter($context["item_value"]));
                // line 68
                echo "                    <optgroup label=\"";
                echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, ($context["optgroup_label"] ?? null)), "html_attr");
                echo "\">
                      ";
                // line 69
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute($this->getAttribute(($context["field"] ?? null), "options", []), $context["key"], [], "array"), ($context["optgroup_label"] ?? null), [], "array"));
                foreach ($context['_seq'] as $context["subkey"] => $context["suboption"]) {
                    // line 70
                    echo "                          ";
                    $context["subkey"] = $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->stringFilter($context["subkey"]);
                    // line 71
                    echo "                          ";
                    $context["item_value"] = $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->stringFilter(((($context["selectize_use_label_as_value"] ?? null)) ? ($context["suboption"]) : ($context["subkey"])));
                    // line 72
                    echo "                          ";
                    $context["selected"] = $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->stringFilter(((($context["selectize_use_label_as_value"] ?? null)) ? ($context["suboption"]) : ($context["subkey"])));
                    // line 73
                    echo "                          <option ";
                    if ((($context["subkey"] === ($context["value"] ?? null)) || ($this->getAttribute(($context["field"] ?? null), "multiple", []) && twig_in_filter(($context["selected"] ?? null), ($context["value"] ?? null))))) {
                        echo "selected=\"selected\"";
                    }
                    echo " value=\"";
                    echo twig_escape_filter($this->env, $context["subkey"], "html", null, true);
                    echo "\">
                            ";
                    // line 74
                    echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, $context["suboption"]), "html", null, true);
                    echo "
                          </option>
                      ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['subkey'], $context['suboption'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 77
                echo "                    </optgroup>
                ";
            } else {
                // line 79
                echo "                    ";
                $context["val"] = $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->stringFilter(((($context["selectize_use_label_as_value"] ?? null)) ? ($context["item_value"]) : ($context["key"])));
                // line 80
                echo "                    ";
                $context["selected"] = $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->stringFilter(((($context["selectize_use_label_as_value"] ?? null)) ? ($context["item_value"]) : ($context["key"])));
                // line 81
                echo "                    <option ";
                if (((($context["val"] ?? null) === ($context["value"] ?? null)) || ($this->getAttribute(($context["field"] ?? null), "multiple", []) && twig_in_filter(($context["selected"] ?? null), ($context["value"] ?? null))))) {
                    echo "selected=\"selected\"";
                }
                echo " value=\"";
                echo twig_escape_filter($this->env, ($context["val"] ?? null), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, $this->env->getExtension('Grav\Common\Twig\Extension\GravExtension')->translate($this->env, $context["item_value"]), "html", null, true);
                echo "</option>
                ";
            }
            // line 83
            echo "            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['item_value'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 84
        echo "
        </select>
    </div>
";
    }

    public function getTemplateName()
    {
        return "forms/fields/select/select.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  342 => 84,  336 => 83,  324 => 81,  321 => 80,  318 => 79,  314 => 77,  305 => 74,  296 => 73,  293 => 72,  290 => 71,  287 => 70,  283 => 69,  278 => 68,  275 => 67,  273 => 66,  267 => 64,  262 => 59,  258 => 58,  254 => 57,  249 => 56,  246 => 55,  243 => 54,  240 => 53,  235 => 52,  233 => 51,  230 => 50,  227 => 49,  224 => 48,  221 => 44,  218 => 43,  215 => 42,  212 => 41,  209 => 40,  207 => 39,  204 => 38,  198 => 37,  195 => 36,  192 => 35,  181 => 33,  176 => 32,  173 => 31,  170 => 30,  159 => 28,  154 => 27,  151 => 26,  145 => 24,  142 => 23,  135 => 22,  128 => 21,  121 => 20,  116 => 19,  111 => 18,  106 => 17,  101 => 16,  96 => 15,  91 => 14,  84 => 13,  78 => 12,  70 => 11,  66 => 10,  57 => 9,  54 => 8,  48 => 5,  43 => 4,  40 => 3,  30 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("{% extends \"forms/field.html.twig\" %}

{% block global_attributes %}
    data-grav-selectize=\"{{ (field.selectize is defined ? field.selectize : {})|json_encode()|e('html_attr') }}\"
    {{ parent() }}
{% endblock %}

{% block input %}
    <div class=\"{{ form_field_wrapper_classes ?: 'form-select-wrapper' }} {{ field.size }} {{ field.wrapper_classes }}\">
        <select name=\"{{ (scope ~ field.name)|fieldName ~ (field.multiple ? '[]' : '') }}\"
                class=\"{{ form_field_select_classes }} {{ field.classes }} {{ field.size }}\"
                {% if field.id is defined %}id=\"{{ field.id|e }}\" {% endif %}
                {% if field.style is defined %}style=\"{{ field.style|e }}\" {% endif %}
                {% if field.disabled %}disabled=\"disabled\"{% endif %}
                {% if field.autofocus in ['on', 'true', 1] %}autofocus=\"autofocus\"{% endif %}
                {% if field.novalidate in ['on', 'true', 1] %}novalidate=\"novalidate\"{% endif %}
                {% if required %}required=\"required\"{% endif %}
                {% if field.multiple in ['on', 'true', 1] %}multiple=\"multiple\"{% endif %}
                {% if field.disabled or isDisabledToggleable %}disabled=\"disabled\"{% endif %}
                {% if field.tabindex %}tabindex=\"{{ field.tabindex }}\"{% endif %}
                {% if field.form %}form=\"{{ field.form }}\"{% endif %}
                {% if field.autocomplete is defined %}autocomplete=\"{{ field.autocomplete }}\"{% endif %}
                {% if field.key %}
                    data-key-observe=\"{{ (scope ~ field.name)|fieldName }}\"
                {% endif %}
                {% if field.datasets %}
                    {% for datakey, datavalue in field.datasets %}
                        data-{{ datakey }}=\"{{ datavalue|e('html_attr') }}\"
                    {% endfor %}
                {% endif %}
                {% if field.attributes %}
                    {% for key, value in field.attributes %}
                        {{ key }}=\"{{ value|e('html_attr') }}\"
                    {% endfor %}
                {% endif %}
                >
            {% if field.placeholder %}<option value=\"\" disabled selected>{{ field.placeholder|t }}</option>{% endif %}

            {% set options = field.options %}
            {% if field.selectize.create and value %}
              {% set custom_value = field.multiple ? value : { (value): value } %}
              {% set options = options|merge(custom_value|default([]))|array_unique %}
            {% endif %}

            {# When selectize+multiple, the legacy default stores option labels
               rather than keys. Setting `selectize.store_keys: true` opts in to
               the saner \"store the option key as value\" behavior. #}
            {% set selectize_store_keys = field.selectize.store_keys ?? false %}
            {% set selectize_use_label_as_value = field.selectize and field.multiple and not selectize_store_keys %}

            {% set value = value is iterable ? value : value|string %}
            {% for key, item_value in options %}
                {% if item_value is iterable and item_value.value %}
                    {% set akey = selectize_use_label_as_value ? item_value : key %}
                    {% set avalue = item_value.value|t %}
                    <option {{ item_value.disabled ? 'disabled=\"disabled\"' : '' }}
                        {{ item_value.selected or key == value ? 'selected=\"selected\"' : '' }}
                        {{ item_value.label    ? 'label=' ~ item_value.label : '' }}
                        value=\"{{ akey }}\"
                    >
                        {# GHSA-c2q3-p4jr-c55f: dropped |raw — option text is now
                           autoescaped so taxonomy/option values supplied by
                           lower-privileged editors can no longer inject script. #}
                        {{ avalue }}
                    </option>
                {% elseif item_value is iterable %}
                    {% set optgroup_label = item_value|keys|first %}
                    <optgroup label=\"{{ optgroup_label|t|e('html_attr') }}\">
                      {% for subkey, suboption in field.options[key][optgroup_label] %}
                          {% set subkey = subkey|string %}
                          {% set item_value = (selectize_use_label_as_value ? suboption : subkey)|string %}
                          {% set selected = (selectize_use_label_as_value ? suboption : subkey)|string %}
                          <option {% if subkey is same as (value) or (field.multiple and selected in value) %}selected=\"selected\"{% endif %} value=\"{{ subkey }}\">
                            {{ suboption|t }}
                          </option>
                      {% endfor %}
                    </optgroup>
                {% else %}
                    {% set val = (selectize_use_label_as_value ? item_value : key)|string %}
                    {% set selected = (selectize_use_label_as_value ? item_value : key)|string %}
                    <option {% if val is same as (value) or (field.multiple and selected in value) %}selected=\"selected\"{% endif %} value=\"{{ val }}\">{{ item_value|t }}</option>
                {% endif %}
            {% endfor %}

        </select>
    </div>
{% endblock %}
", "forms/fields/select/select.html.twig", "D:\\gitclones\\climateon\\climateon\\climateon-grav\\user\\plugins\\form\\templates\\forms\\fields\\select\\select.html.twig");
    }
}
