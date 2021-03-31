<template>
  <div class="item-body">
    <div class="form-container">
      <TextInput
        :value="data.firstName"
        @onChange="handleChangeFirstName"
        :label="'First Name'"
      />
      <TextInput
        :value="data.lastName"
        @onChange="handleChangeLastName"
        :label="'Last Name'"
      />
      <DateTimePicker
        @change="handleChangeTime"
        :value="data.time"
        :label="'Date'"
      />
    </div>
    <div class="btn-group">
      <Button @click="handleClear" :text="'Clear'" />
    </div>
  </div>
</template>
<script>
import TextInput from "@/components/shared/TextInput";
import DateTimePicker from "@/components/shared/DateTimePicker";
import Button from "@/components/shared/Button";

export default {
  name: "e-list-item-body",
  components: { TextInput, DateTimePicker, Button },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  methods: {
    /** first name change event handling */
    handleChangeFirstName(value) {
      const updatedData = {
        ...this.data,
        firstName: value,
      };
      this.$emit("change", updatedData);
    },
    /** last name change event handling */
    handleChangeLastName(value) {
      const updatedData = {
        ...this.data,
        lastName: value,
      };
      this.$emit("change", updatedData);
    },
    /** time change event handling. the checkout is depended on time */
    handleChangeTime(value) {
      const updatedData = {
        ...this.data,
        time: value,
      };
      this.$emit("change", updatedData);
    },
    /** clear event handling. the checkout will be disappeared. */
    handleClear() {
      const updatedData = {
        ...this.data,
        firstName: null,
        lastName: null,
        time: null,
      };
      this.$emit("change", updatedData);
    },
  },
};
</script>
<style scoped>
.item-body {
  width: 100%;
  min-height: 10rem;
  display: flex;
  flex-direction: column;
}
.form-container {
  display: flex;
  flex-wrap: wrap;
}
.btn-group {
  display: flex;
  padding-right: 1rem;
  box-sizing: border-box;
  justify-content: flex-end;
}
</style>
