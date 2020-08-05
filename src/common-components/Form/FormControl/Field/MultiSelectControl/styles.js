import styled from "styled-components";

export const Container = styled.div`
  select.bs-select-hidden,
  .bootstrap-select > select.bs-select-hidden,
  select.selectpicker {
    display: none !important;
  }
  .bootstrap-select {
    width: 100% \0;
    /*IE9 and below*/
  }
  .bootstrap-select > .dropdown-toggle {
    position: relative;
    width: 100%;
    z-index: 1;
    text-align: right;
    white-space: nowrap;
  }
  .bootstrap-select > .dropdown-toggle.bs-placeholder,
  .bootstrap-select > .dropdown-toggle.bs-placeholder:hover,
  .bootstrap-select > .dropdown-toggle.bs-placeholder:focus,
  .bootstrap-select > .dropdown-toggle.bs-placeholder:active {
    color: #999;
    box-shadow: none !important;
    border: inherit;
    outline: none !important;
  }
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-primary,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-secondary,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-success,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-danger,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-info,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-dark,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-primary:hover,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-secondary:hover,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-success:hover,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-danger:hover,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-info:hover,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-dark:hover,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-primary:focus,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-secondary:focus,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-success:focus,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-danger:focus,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-info:focus,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-dark:focus,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-primary:active,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-secondary:active,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-success:active,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-danger:active,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-info:active,
  .bootstrap-select > .dropdown-toggle.bs-placeholder.btn-dark:active {
    color: rgba(255, 255, 255, 0.5);
  }
  .bootstrap-select > select {
    position: absolute !important;
    bottom: 0;
    left: 50%;
    display: block !important;
    width: 0.5px !important;
    height: 100% !important;
    padding: 0 !important;
    opacity: 0 !important;
    border: none;
  }
  .bootstrap-select > select.mobile-device {
    top: 0;
    left: 0;
    display: block !important;
    width: 100% !important;
    z-index: 2;
  }
  .has-error .bootstrap-select .dropdown-toggle,
  .error .bootstrap-select .dropdown-toggle,
  .bootstrap-select.is-invalid .dropdown-toggle,
  .was-validated .bootstrap-select .selectpicker:invalid + .dropdown-toggle {
    border-color: #b94a48;
  }
  .bootstrap-select.is-valid .dropdown-toggle,
  .was-validated .bootstrap-select .selectpicker:valid + .dropdown-toggle {
    border-color: #28a745;
  }
  .bootstrap-select.fit-width {
    width: auto !important;
  }
  .bootstrap-select:not([class*="col-"]):not([class*="form-control"]):not(.input-group-btn) {
    width: 100%;
  }
  .bootstrap-select .dropdown-toggle:focus {
    outline: thin dotted #333333 !important;
    outline: 5px auto -webkit-focus-ring-color !important;
    outline-offset: -2px;
  }
  .bootstrap-select.form-control {
    margin-bottom: 0;
    padding: 0;
    border: none;
  }
  :not(.input-group) > .bootstrap-select.form-control:not([class*="col-"]) {
    width: 100%;
  }
  .bootstrap-select.form-control.input-group-btn {
    z-index: auto;
  }
  .bootstrap-select.form-control.input-group-btn:not(:first-child):not(:last-child)
    > .btn {
    border-radius: 0;
  }
  .bootstrap-select:not(.input-group-btn),
  .bootstrap-select[class*="col-"] {
    float: none;
    display: inline-block;
    margin-left: 0;
  }
  .bootstrap-select.dropdown-menu-right,
  .bootstrap-select[class*="col-"].dropdown-menu-right,
  .row .bootstrap-select[class*="col-"].dropdown-menu-right {
    float: right;
  }
  .form-inline .bootstrap-select,
  .form-horizontal .bootstrap-select,
  .form-group .bootstrap-select {
    margin-bottom: 0;
  }
  .form-group-lg .bootstrap-select.form-control,
  .form-group-sm .bootstrap-select.form-control {
    padding: 0;
  }
  .form-group-lg .bootstrap-select.form-control .dropdown-toggle,
  .form-group-sm .bootstrap-select.form-control .dropdown-toggle {
    height: 100%;
    font-size: inherit;
    line-height: inherit;
    border-radius: inherit;
  }
  .bootstrap-select.form-control-sm .dropdown-toggle,
  .bootstrap-select.form-control-lg .dropdown-toggle {
    font-size: inherit;
    line-height: inherit;
    border-radius: inherit;
  }
  .bootstrap-select.form-control-sm .dropdown-toggle {
    padding: 0.25rem 0.5rem;
  }
  .bootstrap-select.form-control-lg .dropdown-toggle {
    padding: 0.5rem 1rem;
  }
  .form-inline .bootstrap-select .form-control {
    width: 100%;
  }
  .bootstrap-select.disabled,
  .bootstrap-select > .disabled {
    cursor: not-allowed;
  }
  .bootstrap-select.disabled:focus,
  .bootstrap-select > .disabled:focus {
    outline: none !important;
  }
  .bootstrap-select.bs-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 0 !important;
    padding: 0 !important;
  }
  .bootstrap-select.bs-container .dropdown-menu {
    z-index: 1060;
  }
  .bootstrap-select .dropdown-toggle:before {
    content: "";
    display: inline-block;
  }
  .bootstrap-select .dropdown-toggle .filter-option {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: inherit;
    padding-right: inherit;
    padding-bottom: inherit;
    padding-left: inherit;
    height: 100%;
    width: 100%;
    text-align: left;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .bootstrap-select .dropdown-toggle .filter-option-inner {
    padding-right: inherit;
  }
  .bootstrap-select .dropdown-toggle .filter-option-inner-inner {
    overflow: hidden;
  }
  .bootstrap-select .dropdown-toggle .caret {
    position: absolute;
    top: 50%;
    right: 12px;
    margin-top: -2px;
    vertical-align: middle;
  }
  .input-group .bootstrap-select.form-control .dropdown-toggle {
    border-radius: inherit;
  }
  .bootstrap-select[class*="col-"] .dropdown-toggle {
    width: 100%;
  }
  .bootstrap-select .dropdown-menu {
    min-width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .bootstrap-select .dropdown-menu > .inner:focus {
    outline: none !important;
  }
  .bootstrap-select .dropdown-menu.inner {
    position: static;
    float: none;
    border: 0;
    padding: 0;
    margin: 0;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .bootstrap-select .dropdown-menu li {
    position: relative;
  }
  .bootstrap-select .dropdown-menu li.active small {
    color: #fff;
  }
  .bootstrap-select .dropdown-menu li.disabled a {
    cursor: not-allowed;
  }
  .bootstrap-select .dropdown-menu li a {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .bootstrap-select .dropdown-menu li a.opt {
    position: relative;
    padding-left: 2.25em;
  }
  .bootstrap-select .dropdown-menu li a span.check-mark {
    display: none;
  }
  .bootstrap-select .dropdown-menu li a span.text {
    display: inline-block;
  }
  .bootstrap-select .dropdown-menu li small {
    padding-left: 0.5em;
  }
  .bootstrap-select .dropdown-menu .notify {
    position: absolute;
    bottom: 5px;
    width: 96%;
    margin: 0 2%;
    min-height: 26px;
    padding: 3px 5px;
    background: #f5f5f5;
    border: 1px solid #e3e3e3;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
    pointer-events: none;
    opacity: 0.9;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .bootstrap-select .no-results {
    padding: 3px;
    background: #f5f5f5;
    margin: 0 5px;
    white-space: nowrap;
  }
  .bootstrap-select.fit-width .dropdown-toggle .filter-option {
    position: static;
    display: inline;
    padding: 0;
  }
  .bootstrap-select.fit-width .dropdown-toggle .filter-option-inner,
  .bootstrap-select.fit-width .dropdown-toggle .filter-option-inner-inner {
    display: inline;
  }
  .bootstrap-select.fit-width .dropdown-toggle .caret {
    position: static;
    top: auto;
    margin-top: -1px;
  }
  .bootstrap-select.show-tick .dropdown-menu .selected span.check-mark {
    position: absolute;
    display: inline-block;
    right: 15px;
    top: 5px;
  }
  .bootstrap-select.show-tick .dropdown-menu li a span.text {
    margin-right: 34px;
  }
  .bootstrap-select .bs-ok-default:after {
    content: "";
    display: block;
    width: 0.45em;
    height: 0.8em;
    border-color: green;
    border-style: solid;
    border-width: 0 0.1em 0.1em 0;
    transform: rotate(45deg);
  }
  .bootstrap-select.show-menu-arrow.open > .dropdown-toggle,
  .bootstrap-select.show-menu-arrow.show > .dropdown-toggle {
    z-index: 1061;
  }
  .bootstrap-select.show-menu-arrow .dropdown-toggle .filter-option:before {
    content: "";
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid rgba(204, 204, 204, 0.2);
    position: absolute;
    bottom: -4px;
    left: 9px;
    display: none;
  }
  .bootstrap-select.show-menu-arrow .dropdown-toggle .filter-option:after {
    content: "";
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid white;
    position: absolute;
    bottom: -4px;
    left: 10px;
    display: none;
  }
  .bootstrap-select.show-menu-arrow.dropup
    .dropdown-toggle
    .filter-option:before {
    bottom: auto;
    top: -4px;
    border-top: 7px solid rgba(204, 204, 204, 0.2);
    border-bottom: 0;
  }
  .bootstrap-select.show-menu-arrow.dropup
    .dropdown-toggle
    .filter-option:after {
    bottom: auto;
    top: -4px;
    border-top: 6px solid white;
    border-bottom: 0;
  }
  .bootstrap-select.show-menu-arrow.pull-right
    .dropdown-toggle
    .filter-option:before {
    right: 12px;
    left: auto;
  }
  .bootstrap-select.show-menu-arrow.pull-right
    .dropdown-toggle
    .filter-option:after {
    right: 13px;
    left: auto;
  }
  .bootstrap-select.show-menu-arrow.open
    > .dropdown-toggle
    .filter-option:before,
  .bootstrap-select.show-menu-arrow.show
    > .dropdown-toggle
    .filter-option:before,
  .bootstrap-select.show-menu-arrow.open
    > .dropdown-toggle
    .filter-option:after,
  .bootstrap-select.show-menu-arrow.show
    > .dropdown-toggle
    .filter-option:after {
    display: block;
  }
  .bs-searchbox,
  .bs-actionsbox,
  .bs-donebutton {
    padding: 4px 8px;
  }
  .bs-actionsbox {
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .bs-actionsbox .btn-group button {
    width: 50%;
  }
  .bs-donebutton {
    float: left;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .bs-donebutton .btn-group button {
    width: 100%;
  }
  .bs-searchbox + .bs-actionsbox {
    padding: 0 8px 4px;
  }
  .bs-searchbox .form-control {
    margin-bottom: 0;
    width: 100%;
    float: none;
  }
`;
