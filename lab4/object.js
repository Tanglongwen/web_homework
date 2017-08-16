/**
 * Created by Administrator on 2016/10/13 0013.
 */
function Employee(name, salary) {
    this.name = name;
    this.salary=salary;
    this.show = function () {
        console.log("Employee:")
        console.log(name +"  "+salary);
    }
}
function Manager(subs,name) {
    this.workers=subs[0];
    this.show_manager=function () {
        console.log(name);
    }
    this.show_subs=function () {
        console.log(name+"的员工有:");
        for(var i=0;i<subs.length;i++)
        console.log(subs[i]);
    }
}
function Secretary(name,bosses) {
    Manager.call(this,name,bosses)
    this.getSuperior=function () {
        console.log(name+"的老板是:")
        this.show_manager();
    }
}
var person = ['Alan', 'Bob', 'Darlin','Luxy'];
var money=[5000,8000,9000,20000];
for(var i in money) {
    var employee=new Employee(person[i],money[i]);
employee.show();
}
Manager.prototype=new Employee();
var manager_1=new Manager(person,'Luxy',20000);
manager_1.show_subs();
var secretary=new Secretary(person[0],'Luxy');
secretary.getSuperior();




