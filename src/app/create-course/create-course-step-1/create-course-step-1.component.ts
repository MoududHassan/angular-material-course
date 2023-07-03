import {Component} from '@angular/core';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import { MatCalendarCellClassFunction, MatCalendarCellCssClasses } from '@angular/material/datepicker';


const SIMPLE_TEXT = "This is simple text for testing purposes.This is simple text for testing purposes.This is simple text for testing purposes.This is simple text for testing purposes.This is simple text for testing purposes.This is simple text for testing purposes.This is simple text for testing purposes.";

@Component({
  selector: "create-course-step-1",
  templateUrl:"create-course-step-1.component.html",
  styleUrls: ["create-course-step-1.component.scss"]
})
export class CreateCourseStep1Component {

  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    releasedAt: [new Date(), Validators.required],
    category: ['BEGINNER', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: [SIMPLE_TEXT, [Validators.required, Validators.minLength(3)]]
  });

  constructor(private fb: UntypedFormBuilder) {

  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {

    const date = cellDate.getDate();

    if (view == 'month') {
        return (date === 1) ? ['highlight-date'] : [""];
    }

    return [""];
  }

  // dateClass = (d: Date) => {
  //   const date = d.getDay();
  //   // Highlight saturday and sunday.
  //   return (date === 0 || date === 6) ? 'highlight-date' : undefined;
  // }

  get courseTitle() {
    return this.form.controls['title'];
  }

}
