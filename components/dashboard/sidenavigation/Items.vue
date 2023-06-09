<template>
  <ul class="md:pl-3">
    <sidenav-item title="Home" to="/dashboard">
      <home-icon />
    </sidenav-item>

    <sidenav-item title="Stoks" to="/dashboard/stoks">
      <status-icon />
    </sidenav-item>

    <sidenav-item title="Menus" to="/dashboard/menus">
      <archives-icon />
    </sidenav-item>

    <sidenav-item title="Credits" to="/dashboard/credits">
      <credits-icon />
    </sidenav-item>

    <sidenav-item title="Settings" to="/dashboard/settings">
      <settings-icon />
    </sidenav-item>

    <sidenav-item title="Documentation" to="/dashboard/documentation">
      <documentation-icon />
    </sidenav-item>
  </ul>
</template>

<script>
import SidenavItem from './Item.vue';

/* ICONS */
import HomeIcon from './icons/Home.vue';
import StatusIcon from './icons/Status.vue';
import CreditsIcon from './icons/Credits.vue';
import SettingsIcon from './icons/Settings.vue';
import ArchivesIcon from './icons/Archives.vue';
import DocumentationIcon from './icons/Documentation.vue';

export default {
  name: 'SidenavItems',
  components: {
    HomeIcon,
    StatusIcon,
    SidenavItem,
    CreditsIcon,
    SettingsIcon,
    ArchivesIcon,
    DocumentationIcon,
  },
};
</script>
