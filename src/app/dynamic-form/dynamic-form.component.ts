import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface IFormConfig {
  label: string;
  name: string;
  type: 'text' | 'number' | 'combo' | 'switch' | 'textarea'
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  value = {
    typeId: 2,
    address: "hhhh",
    cityId: 1,
    fax: 85858,
    phone: 23232323,
    website: "3w2w2w2",
    adress2 : "adress2"
  }

  formConfig: IFormConfig[] = [
    {
      label: 'نوع',
      name: 'typeId',
      type: 'combo'
    },
    {
      label: 'آدرس',
      name: 'address',
      type: 'textarea'
    },
    {
      label: 'آدرس',
      name: 'adress2',
      type: 'textarea'
    },
    {
      label: 'شهر',
      name: 'cityId',
      type: 'combo'
    },
    {
      label: 'فکس',
      name: 'fax',
      type: 'text'
    },
    {
      label: 'تلفن',
      name: 'phone',
      type: 'text'
    },
    {
      label: 'وبسایت',
      name: 'website',
      type: 'text'
    }
  ]

  public dynamicForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.inItDynamicForm()
  }

  inItDynamicForm() {
    if (this.value) {
      for (const [key, val] of Object.entries(this.value)) {
        this.dynamicForm.addControl(key, new FormControl(val))
      }
    }
  }


  sendFormData() {

  }

}
