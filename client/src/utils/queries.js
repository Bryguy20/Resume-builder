import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query User($_id: ID!) {
    user {
      _id
      firstName
      lastName
      email
      password
      education
      workExperience
      personalInfo
      project
      skills
      about
    }
  }
`;
export const QUERY_WORK= gql`
  query Experience($_id: ID!){
      experience{
       position
       companyName
       location
       description
    }
    }
`;
export const QUERY_EDUCATION = gql`
  query Education($_id: ID){
      education{
        schoolName
        majorSubject
        degree
        location
      }
  }
`;
export const QUERY_PERSONAL = gql`
  query Personal($_id: ID){
    personal{
      name
      email
      phoneNumber
      city 
      state
    }
  }
`;
export const QUERY_PROJECT= gql`
  query Project($_id:ID){
    project{
    _id
    title
    link
    about
    }
  }
`;
export const QUERY_ABOUT= gql`
query About($_id:ID){
  about{
    _id
    description
  }
}
`;
export const QUERY_SKILLS= gql`
  query Skills($_id:ID){
    skills{
      _id
      description
    }
  }
`;