import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  relationships = [
    { "key": "father", "value": "Father" },
    { "key": "mother", "value": "Mother" },
    { "key": "brother", "value": "Brother" },
    { "key": "sister", "value": "Sister" },
    { "key": "son", "value": "Son" },
    { "key": "daughter", "value": "Daughter" },
    { "key": "husband", "value": "Husband" },
    { "key": "wife", "value": "Wife" },
    { "key": "grandfather", "value": "Grandfather" },
    { "key": "grandmother", "value": "Grandmother" },
    { "key": "grandson", "value": "Grandson" },
    { "key": "granddaughter", "value": "Granddaughter" },
    { "key": "uncle", "value": "Uncle" },
    { "key": "aunt", "value": "Aunt" },
    { "key": "nephew", "value": "Nephew" },
    { "key": "niece", "value": "Niece" },
    { "key": "cousin", "value": "Cousin" },
    { "key": "father_in_law", "value": "Father-in-law" },
    { "key": "mother_in_law", "value": "Mother-in-law" },
    { "key": "brother_in_law", "value": "Brother-in-law" },
    { "key": "sister_in_law", "value": "Sister-in-law" },
    { "key": "son_in_law", "value": "Son-in-law" },
    { "key": "daughter_in_law", "value": "Daughter-in-law" },
    { "key": "friend", "value": "Friend" },
    { "key": "colleague", "value": "Colleague" },
    { "key": "neighbor", "value": "Neighbor" },
    { "key": "mentor", "value": "Mentor" },
    { "key": "guardian", "value": "Guardian" },
    { "key": "stepfather", "value": "Stepfather" },
    { "key": "stepmother", "value": "Stepmother" },
    { "key": "stepbrother", "value": "Stepbrother" },
    { "key": "stepsister", "value": "Stepsister" },
    { "key": "stepson", "value": "Stepson" },
    { "key": "stepdaughter", "value": "Stepdaughter" },
    { "key": "foster_parent", "value": "Foster parent" },
    { "key": "foster_child", "value": "Foster child" }
  ];

  constructor() { }

  getCountries() {
  }

  getStates(countryCode: string) {
  }

  getDistricts(stateCode: string) {
  }

  getRelationships() {
    return this.relationships;
  }
}
