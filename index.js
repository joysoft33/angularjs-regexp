
const VALIDATION_PATTERN = {
  email: '',
  lastname: '',
  firstname: '',
  age: '',
  address: ''
};

angular.module('app', [])

  .component('inputField', {

    template: `
      <div class="form-group">
        <label for="{{$ctrl.name}}">{{$ctrl.label}}</label>
        <input class="form-control" ng-model="$ctrl.parent.user[$ctrl.name]" type="text" id="{{$ctrl.name}}" name="{{$ctrl.name}}" required ng-pattern="$ctrl.pattern">
        <div ng-show="$ctrl.form.$submitted">
          <span class="error" ng-show="$ctrl.form[$ctrl.name].$error.required">Vous devez saisir une valeur</span>
          <span class="error" ng-show="$ctrl.form[$ctrl.name].$error.pattern">La valeur saisie est incorrecte</span>
        </div>
      </div>
    `,

    require: {
      parent: '^^registerForm'
    },

    bindings: {
      label: '@',
      name: '@'
    },

    controller: function() {

      this.$onInit = () => {
        this.pattern = VALIDATION_PATTERN[this.name];
        this.form = this.parent.regform;
      };
    }

  })

  .component('registerForm', {

    template: `
      <form name="$ctrl.regform" ng-submit="$ctrl.save()" novalidate>

        <input-field name="email" label="Adresse mail"></input-field>
        <input-field name="lastname" label="Nom"></input-field>
        <input-field name="firstname" label="Prénom"></input-field>
        <input-field name="age" label="Age"></input-field>
        <input-field name="address" label="Adresse"></input-field>

        <button class="btn btn-success" type="submit" ng-disabled="$ctrl.regform.$pristine">
          OK
        </button>
      </form>
    `,

    controller: function () {

      this.$onInit = () => {

        this.user = {
          email: '',
          lastname: '',
          firstname: '',
          age: '',
          address: ''
        };
      };

      this.save = () => {
        if (this.regform.$valid) {
          console.log('user:', this.user);
        } 
      };
    }

  });
