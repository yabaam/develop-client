import browseImage from 'src/assets/browse.png';
import collaborate from 'src/assets/collaborate.png';
import contact from 'src/assets/contact.png';
import create from 'src/assets/create.png';
import { IAuthUser } from 'src/features/auth/interfaces/auth.interface';
import { IBuyerDocument } from 'src/features/buyer/interfaces/buyer.interface';
import { ISellerGig } from 'src/features/gigs/interfaces/gig.interface';
import { ICategory } from 'src/features/home/interfaces/home.interface';
import { IRatingTypes } from 'src/features/order/interfaces/review.interface';
import { ISellerDocument } from 'src/features/sellers/interfaces/seller.interface';

import { ISliderImagesText } from '../shared.interface';

export const initialAuthUserValues: IAuthUser = {
  profilePublicId: null,
  country: null,
  createdAt: null,
  email: null,
  emailVerificationToken: null,
  emailVerified: null,
  id: null,
  passwordResetExpires: null,
  passwordResetToken: null,
  profilePicture: null,
  updatedAt: null,
  username: null
};

export const emptyBuyerData: IBuyerDocument = {
  _id: '',
  username: '',
  email: '',
  profilePicture: '',
  country: '',
  isSeller: false,
  purchasedGigs: [],
  createdAt: ''
};

export const emptySellerData: ISellerDocument = {
  _id: '',
  profilePublicId: '',
  fullName: '',
  profilePicture: '',
  username: '',
  email: '',
  description: '',
  country: '',
  oneliner: '',
  skills: [],
  ratingsCount: 0,
  ratingSum: 0,
  ratingCategories: {
    five: { value: 0, count: 0 },
    four: { value: 0, count: 0 },
    three: { value: 0, count: 0 },
    two: { value: 0, count: 0 },
    one: { value: 0, count: 0 }
  },
  recentDelivery: '',
  languages: [],
  responseTime: 0,
  experience: [],
  education: [],
  socialLinks: [],
  certificates: [],
  ongoingJobs: 0,
  completedJobs: 0,
  cancelledJobs: 0,
  totalEarnings: 0,
  totalGigs: 0,
  paypal: '',
  createdAt: ''
};

export const emptyGigData: ISellerGig = {
  _id: '',
  id: '',
  sellerId: '',
  title: '',
  username: '',
  profilePicture: '',
  email: '',
  description: '',
  basicDescription: '',
  basicTitle: '',
  expectedDelivery: '',
  active: true,
  categories: '',
  subCategories: [],
  tags: [],
  ratingsCount: 0,
  ratingSum: 0,
  ratingCategories: {
    five: { value: 0, count: 0 },
    four: { value: 0, count: 0 },
    three: { value: 0, count: 0 },
    two: { value: 0, count: 0 },
    one: { value: 0, count: 0 }
  },
  price: 0,
  coverImage: '',
  createdAt: ''
};

export const ratingTypes: IRatingTypes = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5'
};

export const sliderImages: string[] = [
  
  'https://res.cloudinary.com/dyvrrabjf/image/upload/v1708762978/slide4_tvmbzu.jpg',
  'https://res.cloudinary.com/dyvrrabjf/image/upload/v1708762983/slide5_c62kpt.jpg',
  'https://res.cloudinary.com/dyvrrabjf/image/upload/v1691207682/samples/people/kitchen-bar.jpg',
  'https://res.cloudinary.com/dyvrrabjf/image/upload/v1691207681/samples/ecommerce/analog-classic.jpg'
];

export const sliderImagesText: ISliderImagesText[] = [
  { header: 'Leading the Way to Excellence', subHeader: 'Your Journey, Our Expertise' },
  { header: 'Turning Ideas into Impactful Content', subHeader: 'Innovate. Create. Elevate.' },
  { header: 'Turning Magic into Results', subHeader: 'Spelling Success, One Task at a Time' },
  { header: 'Creating Futures, Delivering Now', subHeader: 'Your Vision, Our Innovation' }
];

export const categories: ICategory[] = [
  {
    name: 'Programming & Tech',
    icon: create
  },
  {
    name: 'Graphic & Design',
    icon: browseImage
  },
  {
    name: 'Digital Marketing',
    icon: collaborate
  },
  {
    name: 'Writing & Translation',
    icon: contact
  },
  {
    name: 'Video & Animation',
    icon: collaborate
  },
  {
    name: 'Music & Audio',
    icon: collaborate
  },
  {
    name: 'Data',
    icon: collaborate
  },
  {
    name: 'Business',
    icon: collaborate
  }
];

export const PASSWORD_TYPE = {
  TEXT: 'text',
  PASSWORD: 'password'
};

export const STATIC_DATA = {
  EMPTY: '',
  USERNAME: 'username',
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirmPassword',
  EMAIL: 'email',
  COUNTRY: 'country',
  PROFILE_PICTURE: 'profilePicture',
  TITLE: 'title',
  BASIC_TITLE: 'basicTitle',
  BASIC_DESCRIPTION: 'basicDescription',
  DESCRIPTION: 'description',
  CATEGORIES: 'categories',
  SUB_CATEGORIES: 'subCategories',
  TAGS: 'tags',
  PRICE: 'price',
  EXPECTED_DELIVERY: 'expectedDelivery',
  COVER_IMAGE: 'coverImage',
  FULLNAME: 'fullName',
  ONELINER: 'oneliner',
  RESPONSE_TIME: 'responseTime',
  YEAR: 'year',
  MAJOR: 'major',
  UNIVERSITY: 'university',
  COMPANY: 'company',
  START_DATE: 'startDate',
  END_DATE: 'endDate',
  LANGUAGE: 'language',
  LEVEL: 'level'
};
