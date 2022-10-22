import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const Add_About = gql`
mutation addAbout(
  $description: String!
) {
  addAbout(
    description: $description
  )
}
`;

export const ADD_Education = gql`
mutation addEducation(
  $schoolName: String!
 $majorSubject: String!
  $degree: String!
  $startDate: String!
  $endDate: String!
  $location: String!
) {
  addEducation(
  schoolName: $schoolName
  majorSubject: $majorSubject
  degree: $degree  
  startDate: $startDate
  endDate: $endDate
  location: $location
  )
}
`; 

export const ADD_Personal = gql`
mutation addPersonal(
  $name: String!
  $email: String!
  $phoneNumber: Int!
  $city: String!
  $state: String! 
) {
  addPersonal(
    name: $name
    email: $email
    phoneNumber: $phoneNumber
    city: $city
    state: $state
  )
}
`;

export const ADD_Project = gql`
mutation addProject(
  $title: String!
  $link: String!
  $about: [About]
) {
  addProject(
    title: $title
    link: $link
    about: [About]
  )
}
`;

export const ADD_WorkExperience = gql`
mutation addWorkExperience(
  $postion: String!
  $companyName: String!
  $employmentType: String!
  $location: String!
  $startDate: Date!
  $endDate: Date!
  $description: String! 
) {
  addWorkExperience(
    postion: $postion
    companyName: $companyName
    employmentType: $employmentType
    location: $location
    startDate: $startDate
    endDate: $endDate
    description: $description
  )
}
`;