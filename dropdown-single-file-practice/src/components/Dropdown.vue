<template>
    <div class="dropdown">
        <div :class="{'disabled-dropdown':!titleShow, 'dropdown-title': titleShow}" @click="disabledDropdown">
            <label class="title-label">{{titleMessage}}</label>
        </div>
        <div class="dropdown-scroll-hider" v-show="isDropDownShow" style="display: block; transform: translateY(0px);">
            <div class="dropdown-container" style="display: block;">
                <div class="text-label-container" :data-val="labelText" @click="chooseTextLabel(index, $event)" v-for="(labelText, index) in labelTextList"
                    :key="index">
                    <label class="dateTicket-text-label">
                        {{labelText}}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="../js/Dropdown.js"></script>
