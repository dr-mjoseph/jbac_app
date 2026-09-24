import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

var testApi = "https://jbac.in:9762/dashboardapi/"

@Injectable()
export class ServiceProvider {

  testApi = 'https://jbac.in:9762/dashboardapi/'

  
  // testApi = 'http://localhost:2303/dashboardapi/'


  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }


  // <-------------------------------------------------------Meeting start----------------------------------------------->

  getdenomation() {

    return this.http.post(testApi + 'denomations', [])
  }

  getbeliversdata() {
    return this.http.post(this.testApi + 'getbeliversdata', [])
  }

  searchingdemonationdata(data: any) {
    return this.http.post(this.testApi + 'searchingdemonation', data);
  }

  getdistrict() {
    return this.http.post(this.testApi + 'getdistricts', []);
  }

  getconsistencys() {
    return this.http.post(this.testApi + 'getconsistencys', []);
  }

  getmandals() {
    return this.http.post(this.testApi + 'getmandals', []);
  }

  gepanchayatis() {
    return this.http.post(this.testApi + 'gepanchayati', []);
  }

  searchingdata(data: any) {
    return this.http.post(this.testApi + 'searchingdata', data);
  }

  getevents() {
    return this.http.post(this.testApi + 'getupdateevents', []);
  }

  getpastorsfilters(data) {
    return this.http.post(this.testApi + 'getpastorsfilters', data);
  }

  getwing() {
    return this.http.post(this.testApi + 'getwing', []);
  }

  getchurch() {
    return this.http.post(this.testApi + 'getchurch', []);
  }

  getbelivers() {
    return this.http.post(this.testApi + 'getbelivers', [])
  }

  getservices() {
    return this.http.post(this.testApi + 'getservices', [])
  }

  institutes() {
    return this.http.post(this.testApi + 'getinstitutes', [])
  }

  postbeliver(data: any) {
    return this.http.post(this.testApi + 'postbeliversignup', data)
  }

  poststudentsignup(data: any) {
    return this.http.post(this.testApi + 'studentsignup', data)
  }

  postministrysignup(data: any) {
    return this.http.post(this.testApi + 'postministrysignup', data)
  }

  postchurchregister(data: any) {
    return this.http.post(this.testApi + 'postchurchregister', data)
  }

  postpastor(data: any) {
    return this.http.post(this.testApi + 'postpastor', data)
  }
  postindepedentorganisation(data: any) {
    return this.http.post(this.testApi + 'postindepedentorganisation', data)
  }

  postpastorassociationss(data: any) {
    return this.http.post(this.testApi + 'postpastorassociations', data)
  }

  getimages() {
    return this.http.post(this.testApi + 'getwebsitegallery', [])
  }

  postupdatenews(data: any) {
    return this.http.post(this.testApi + 'postnews', data)
  }

  Searchinstitute(data: any) {
    return this.http.post(this.testApi + 'Searchinstitute', data)
  }

  searchmarriages(data: any) {
    return this.http.post(this.testApi + 'Searchmarriages', data)
  }

  searchingmarriages(data: any) {
    return this.http.post(this.testApi + 'searchingmarriages', data);
  }

  getjobs(data: any) {
    return this.http.post(this.testApi + 'searchjob', data)
  }

  getjob() {
    return this.http.post(this.testApi + 'getjob', []);
  }

  searchjobswise(data: any) {
    return this.http.post(this.testApi + 'searchjobswise', data);
  }

  posthelping(data: any) {
    return this.http.post(this.testApi + 'posthelping', data)
  }

  searchingbusiness(data: any) {
    return this.http.post(this.testApi + 'searchingbusiness', data);
  }

  getbusiness() {
    return this.http.post(this.testApi + 'getbusiness', []);
  }

  postattacks(data: any) {
    return this.http.post<any>(this.testApi + 'postattacks', data);
  }

  postsmeetings(data: any) {
    return this.http.post(this.testApi + 'postmeetings', data)
  }

  searchorganization(data: any) {
    return this.http.post(this.testApi + 'searchorganization', data)
  }

  searchinorganizations(data: any) {
    return this.http.post(this.testApi + 'searchinorganizations', data);
  }

  getorganizations() {
    return this.http.post(this.testApi + 'getorganizations', []);
  }

  postchurchmeetings(data: any) {
    return this.http.post(this.testApi + 'postchuechmeetings', data);
  }

  postinsututies(data: any) {
    return this.http.post(this.testApi + 'postinsututies', data);
  }

  postbusiness(data: any) {
    return this.http.post(this.testApi + 'postbusiness', data);
  }

  postingmarriages(data: any) {
    return this.http.post(this.testApi + 'postingmarriages', data)
  }

  postjobs(data: any) {
    return this.http.post(this.testApi + 'postjobs', data);
  }

  postadds(data: any) {
    return this.http.post(this.testApi + 'postadds', data);
  }

  passwordlogin(data: any) {
    return this.http.post(this.testApi + 'passwordwebsitelogin', data)
  }

  getpastorassci() {
    return this.http.post(this.testApi + 'getpastorassociation', [])
  }

  getuserprofilereport(data: any) {
    return this.http.post(this.testApi + 'getuserprofilereport', data);
  }

  geteditdtails(data: any) {
    return this.http.post(this.testApi + 'geteditdtails', data);
  }

  editbeliver(data: any) {
    return this.http.post(this.testApi + 'editbeliver', data);
  }

  editstudent(data: any) {
    return this.http.post(this.testApi + 'editstudent', data);
  }

  editministry(data: any) {
    return this.http.post(this.testApi + 'editministry', data);
  }

  editindependentorgainsation(data: any) {
    return this.http.post(this.testApi + 'editindependentorgainsation', data);
  }

  editpastororgainsation(data: any) {
    return this.http.post(this.testApi + 'editpastororgainsation', data);
  }

  editpastorsassociations(data: any) {
    return this.http.post(this.testApi + 'editpastororgainsation', data);
  }

  editchurch(data: any) {
    return this.http.post(this.testApi + 'editchurch', data);
  }

  editpastor(data: any) {
    return this.http.post(this.testApi + 'editpastor', data);
  }

  getcatewebsitegallery() {
    return this.http.get(this.testApi + 'getcatewebsitegallery')
  }

  getvideourl() {
    return this.http.get(this.testApi + 'getvideourl')
  }

  getUserMainData(data: any) {
    return this.http.post(this.testApi + 'getUserMainData', data)
  }

  getLeaderswebsiteD(data: any) {
    return this.http.post(this.testApi + 'getLeaderswebsiteData', data)
  }

  getLeaderswebsitewing(data: any) {
    return this.http.post(this.testApi + 'getLeaderswebsitewing', data)
  }

  deleteleaders(data: any) {
    return this.http.post(this.testApi + 'deleteboardmember', data)
  }

  updateconsistency(data: any) {
    return this.http.post<any>(this.testApi + `updateconsis`, data)
  }

  postinfo(data: any) {
    return this.http.post<any>(this.testApi + `postinfo`, data)
  }

  getupdatenews() {
    return this.http.get<any>(this.testApi + `updatenewsdataa`)
  }

  getchurchesdatafilters(data) {
    return this.http.post<any>(this.testApi + `getchurchesdatafilters`, data)
  }

  getchurches() {
    return this.http.post<any>(this.testApi + `getchurches`, [])
  }

  searchingchurchdata(data: any) {
    return this.http.post(this.testApi + 'searchingchurchdata', data);
  }

  getadds() {
    return this.http.post(this.testApi + 'searchingchurchdata', []);
  }

  updatecount() {
    return this.http.post(this.testApi + 'updatecount', []);
  }

  getcount() {
    return this.http.post(this.testApi + 'getcount', []);
  }




  // <-------------------------------------------------------Meeting End----------------------------------------------->

  checknumberpassword(data) {
    return this.http.post(this.testApi + 'checknumberpassword', data);
  }

  upadtedpassword(data) {
    return this.http.post(this.testApi + 'upadtedpassword', data);
  }


}
