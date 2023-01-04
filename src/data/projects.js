import memeGenerator from '@/images/projects/memeGenerator.png'
import summariser from '@/images/projects/summariser.png'
import reactnative from '@/images/projects/reactnative.png'
import scikit from '@/images/projects/scikit.png'
import virtualsteering from '@/images/projects/virtualsteering.png'

const data = [
  {
    title: 'Done With It',
    description:
      'An app development project which provides a platform to buy and sell used objects',
    techUsed: ['React Native', 'JavaScript', 'Visual Studio'],
    image: reactnative,
    github: 'https://github.com/abhaytiwari262000/DoneWithIt',
  },

  {
    title: 'Breast Cancer Detection',
    description:
      'A Machine Learning Model that predicts if the cells in a lump are cancerous or not',
    techUsed: ['Python', 'scikit', 'Visual Studio'],
    image: scikit,
    github: 'https://github.com/abhaytiwari262000/BreastCancerDetection',
  },

  {
    title: 'Virtual Steering',
    description:
      'A Virtual steering made with help of python libraries mediapipe and OpenCV',
    techUsed: ['Python', 'mediapipe', 'OpenCV'],
    image: virtualsteering,
    github: 'https://github.com/abhaytiwari262000/GameUsingGesture',
  },
]

export default data
