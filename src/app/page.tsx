"use client";
import React from 'react'
import styles from './page.module.css'
import { ListOfCategories } from '../components/ListOfCategories/index'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Logo } from '../components/Logo'

export default function Home() {
  return (
    <main className={styles.main}>
    <Logo svg={true}/>
     <ListOfCategories />
     <ListOfPhotoCards />
    </main>
  )
}
