(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{sVcZ:function(t,o,c){"use strict";c.d(o,"a",(function(){return s}));class a{constructor(t,o,c,a,r){this.id=t,this.nombre=o,this.celular=c,this.direccion=a,this.fecha=r}}var r=c("fXoL");let s=(()=>{class t{constructor(){this.contactos=[],this.cargarStorage()}createContacts(t,o,c,r,s){const n=new a(t,o,c,r,s);this.contactos.push(n),this.guardarStorage()}guardarStorage(){localStorage.setItem("contact",JSON.stringify(this.contactos))}cargarStorage(){this.contactos=localStorage.getItem("contact")?JSON.parse(localStorage.getItem("contact")):[]}eliminar(t){this.contactos=this.contactos.filter(o=>o!==t),localStorage.setItem("contact",JSON.stringify(this.contactos))}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=r.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);