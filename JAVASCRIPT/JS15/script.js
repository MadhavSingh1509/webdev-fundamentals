// static = keyword that defines properties or methods that belong 
//to a class itself rather than the objects created
//from that class (class owns anything static,

class MathUtil{
static PI = 3.14159;

static getDiameter(radius){
return radius * 2;}

static getcircumference(radius){
return radius*2*this.PI;}


}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
//use of static keyword to find the number of users
class USER{
static usercount=0;
constructor(username){
    this.username=username;
    USER.usercount++;
}
hello(){
    console.log(`my username is ${this.username}`);
}
static getcount(){
    console.log(`there are ${USER.usercount} users online`);
}
}
const user1=new USER(`aditya`);
const user2=new USER("PRATHAM");
const user3=new USER("PRINCE");
console.log(user1.username);
console.log(USER.usercount);
user3.hello();
USER.getcount();