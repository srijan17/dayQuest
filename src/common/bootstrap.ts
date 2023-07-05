import 'reflect-metadata';
import Container from 'typedi';
const bootstrap =()=>{
   const db= Container.get('db')
}