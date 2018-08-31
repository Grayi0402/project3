import { Injectable } from '@angular/core';

@Injectable()
export class ManagerStaffService {
  list = data;
    staff : any = {
    userId:"",
    name: "",
    ngayUngTuyen: "",
    viTriUTuyen: "",
    nguoiGThieu: "",
    email: "",
    phone: "",
    result: "",
    note: "",
    link_cv: ""
  }
  constructor() { }

}

const data = [
  {
    
    userId: 1,
    name: "Ngô Thị Mỹ Linh",
    ngayUngTuyen: "12/12/2012",
    viTriUTuyen: "BA",
    nguoiGThieu: " Nga",
    email: "ngothimylinh1212@gmail.com",
    phone: "01976293636",
    result: "đậu",
    note: "tốt",
    link_cv: "c:/dowload/cv"
  },
  {
    userId: 2,
    name: "Võ Thị Như Diệu",
    ngayUngTuyen: "10/2/2001",
    viTriUTuyen: "PA",
    nguoiGThieu: "",
    email: "Vodieu@gmail.com",
    phone: "019466532",
    result: "đậu",
    note: "tốt",
    link_cv: "c:/dowload/cv"
  },
  {
    userId: 3,
    name: "Huỳnh Thế Bảo",
    ngayUngTuyen: "10/2/2015",
    viTriUTuyen: "dev",
    nguoiGThieu: "",
    email: "bao@gmail.com",
    phone: "08935535855",
    result: "đậu",
    note: "tốt",
    link_cv: "c:/dowload/cv"
  }
]