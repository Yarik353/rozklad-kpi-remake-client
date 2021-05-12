<template>
  <div class="table-wrapper">
    <h3>Розклад занять для групи {{name.toUpperCase()}}</h3>
    <h4>Перший тиждень</h4>
    <table class="customers">
      <tr>
        <th class="table-heading "></th>
        <th v-for="days in daysOfTheWeek" v-bind:key="days">{{ days }}</th>
      </tr>
      <tr v-for="time in lessonsTime" v-bind:key="time">
        <td>{{ time }}</td>
        <td v-for="lesson in filteredLessons(time, '1')" v-bind:key="lesson">
          <div v-if="lesson != ''" style="font-weight: bold;">{{lesson[0].lesson_name}}</div>
          <div v-if="lesson != ''" style="color: #285f8e;">{{lesson[0].teacher_name}}</div>
          <div v-if="lesson != ''">{{lesson[0].lesson_type}} </div>

        </td>
      </tr>

    </table>

    <h4 style="margin-top: 20px">Другий тиждень</h4>
    <table class="customers">
      <tr>
        <th class="table-heading "></th>
        <th v-for="days in daysOfTheWeek" v-bind:key="days">{{ days }}</th>
      </tr>
      <tr v-for="time in lessonsTime" v-bind:key="time">
        <td>{{ time }}</td>
        <td v-for="lesson in filteredLessons(time, '2')" v-bind:key="lesson">
          <div v-if="lesson != ''" style="font-weight: bold;">{{lesson[0].lesson_name}}</div>
          <div v-if="lesson != ''" style="color: #285f8e;">{{lesson[0].teacher_name}}</div>
          <div v-if="lesson != ''">{{lesson[0].lesson_type}} </div>

        </td>
      </tr>

    </table>


  </div>
</template>

<script>
import json from './iv-91_schedule.json'

export default {
  name: "Table",
  data() {
    return {
      schedule: json.lessons,
      name: json.name,
      daysOfTheWeek: [
        "Понеділок",
        "Вівторок",
        "Середа",
        "Четвер",
        "П’ятниця",
        "Субота"
      ],
      lessonsTime: [
        "08:30",
        "10:25",
        "12:20",
        "14:15",
        "16:10",
        "18:30"
      ]
    }
  },
  methods: {
    filteredLessons: function (time, week) {
      let arr;
      arr = new Array([]);

      this.schedule.forEach(lesson => {
        if (lesson.day_number > arr.length) {
          (arr.push([]));}
            if (lesson.time_start.slice(0, 5) == time && lesson.lesson_week == week ) {
              (arr[lesson.day_number - 1].push(lesson))
            }


          }
      );
      while(arr.length !=6){
        (arr.push(''));
      }

      return arr;
    }
  },
}
</script>

<style scoped>
.table-wrapper {
  margin: 10px 100px;
  filter: drop-shadow(20px 14px 3px rgba(50, 50, 50, 0.5));

}


.customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;

}

.customers td, .customers th {
  border: 1px solid #ddd;
  padding: 8px;

}

.customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

.customers tr:nth-child(odd) {
  background-color: white;
}

.customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: var(--dark-blue-color);
  color: white;
  text-align: center;
  border-color: white;


}

.table-heading {
  clip-path: polygon(
      0 0%,
      10% 0,
      100% 0,
      100% 100%,
      100% 100%,
      100% 100%,
      0% 100%,
      0% 70%,
      40px 0%
  );

}

table {
  filter: drop-shadow(20px 14px 3px rgba(50, 50, 50, 0.5));
  border: 3px solid var(--dark-blue-color);
  clip-path: polygon(
      0 0%,
      10% 0,
      100% 0,
      100% 100%,
      100% 100%,
      100% 100%,
      0% 100%,
      0% 40px,
      44px 0%
  );
}
h3{
  margin-top: 50px;
}


</style>