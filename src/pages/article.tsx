import React from 'react'
import ArticleCard from '../components/Article/ArticleCard'
import HeroSection from '../components/HeroSection'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const Article: React.FC = () => (
  <>
    <Layout title="Article Page">
      <Navbar />
      <ArticleCard />
    </Layout>
  </>
)

export default Article
