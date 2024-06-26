


// const Studentdetail = () => {
//     return (
//         <>
//             <body id="studentdetail_body">
//                 <div className="row panel panel-success" style={{ marginTop: "2%" }}>
//                     <div className="panel-heading lead">
//                         <div className="row">
//                             <div className="col-lg-8 col-md-8"><i classNameName="fa fa-users"></i> View Student Details</div>
//                             <div className="col-lg-4 col-md-4 text-right">
//                                 <div className="btn-group text-center">
//                                     <a href="#" className="btn btn-success btn-sm btn-default"><i className="fa fa-eye fa-1x"></i></a>
//                                     <a href="#" className="btn btn-success btn-sm btn-default"><i className="fa fa-edit fa-1x"></i></a>
//                                     <a href="#" className="btn btn-success btn-sm btn-default"><i className="fa fa-print fa-1x"></i></a>
//                                     <a href="#" className="btn btn-success btn-sm btn-default"><i className="fa fa-trash-o fa-1x"></i></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="panel-body">
//                         <div className="row">
//                             <div className="col-lg-12 col-md-12">

//                                 <div className="row">
//                                     <div className="col-lg-3 col-md-3">
//                                         <center>
//                                             <span className="text-left">
//                                                 <img src="https://lh5.googleusercontent.com/proxy/EkYugv9KzLUfAIpv-P4g6b0_mKxhcsfTvNmVueDn6XDHQp_SA0_hG2YFVAwB0Lbj_S-LrT-OtYsvxXMCrkZZMCmBfwelTQaAZW6GZwMQ8bRLwEvZonc0k0NxUpkhLBDuApx25K735rZfyHCIqA1RVpSdU84HF7U-j3xAwt3XLevAJtr5pwaVnRUC=w120-h120" className="img-responsive img-thumbnail" />
//                                                 <div className="modal fade" id="PhotoOption" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{ display: "none" }} >
//                                                     <div className="modal-dialog" style={{ width: "30%", height: "30%" }}>
//                                                         <div className="modal-content">
//                                                             <div className="modal-header">
//                                                                 <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
//                                                                 <h4 className="modal-title text-success" id="myModalLabel"><i className="fa fa-gear"></i> <span className="text-right">Viddhyut Mall</span></h4>
//                                                             </div>
//                                                             <div className="modal-body">
//                                                                 <center><img src="upload/profile_pic/701b4263f7d38604699b7c1f89a3e6a6.jpg" className="img-responsive img-thumbnail" /></center>
//                                                             </div>
//                                                             <div className="modal-footer">
//                                                                 <a href="#" className="btn btn-success"><i className="fa fa-photo"></i> Upload</a>
//                                                                 <a href="#" className="btn btn-danger"><i className="fa fa-trash"></i> Delete</a>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </span>
//                                         </center>

//                                         <div className="table-responsive panel">
//                                             <table className="table">
//                                                 <tbody>
//                                                     <tr>
//                                                         <td className="text-center">
//                                                             <span className="btn btn-danger text-success btn-block"><i className="fa fa-rupee"></i> Unpaid</span>
//                                                             <a href="#" className="btn btn-success btn-block" data-toggle="modal" data-target="#PhotoOption"><i className="fa fa-photo"></i> Change</a>
//                                                         </td>
//                                                     </tr>

//                                                 </tbody>
//                                             </table>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-9 col-md-9">
//                                         <ul className="nav nav-tabs" id="detailnavbar">
//                                             <li className="active"><a data-toggle="tab" href="/Summery" className="text-success"><i className="fa fa-indent"></i> Summery</a></li>
//                                             <li><a data-toggle="tab" href="/Address" className="text-success"><i className="fa fa-bookmark-o"></i> Contact Info</a></li>
//                                             <li><a data-toggle="tab" href="/Contact" className="text-success"><i className="fa fa-home"></i> Address</a></li>
//                                             <li><a data-toggle="tab" href="/Contact" className="text-success"><i className="fa fa-info"></i> General Info</a></li>
//                                         </ul>

//                                         <div className="tab-content">
//                                             <div id="Summery" className="tab-pane fade in active">

//                                                 <div className="table-responsive panel">
//                                                     <table className="table">
//                                                         <tbody>

//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-user"></i> Full Name</td>
//                                                                 <td>Viddhyut Mall</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-list-ol"></i> Scholar Number</td>
//                                                                 <td>45</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-book"></i> Medium</td>
//                                                                 <td>English</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-group"></i> className &amp; Section</td>
//                                                                 <td>12-F</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-calendar"></i> Birthday</td>
//                                                                 <td>December 2, 2011</td>
//                                                             </tr>

//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-university"></i> School</td>
//                                                                 <td>
//                                                                     Shyama Mall Girls Inter College                                                                 </td>
//                                                             </tr>
//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>

//                                             <div id="Address" className="tab-pane fade">
//                                                 <div className="table-responsive panel">
//                                                     <table className="table">
//                                                         <tbody>

//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-home"></i> Address</td>
//                                                                 <td>
//                                                                     <address>
//                                                                         <strong>C-***, Amahiya </strong><br />
//                                                                         Kharobar, ****** <br />
//                                                                         Gorakhpur, Utter Pradesh, India<br />
//                                                                     </address>
//                                                                 </td>
//                                                             </tr>
//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>

//                                             <div id="Contact" className="tab-pane fade">
//                                                 <div className="table-responsive panel">
//                                                     <table className="table">
//                                                         <tbody>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-envelope-o"></i> Email ID</td>
//                                                                 <td><a href="mailto:****@pawanmall.net?subject=Email from &amp;body=Hello, Viddhyut Mall">****@pawanmall.net</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="glyphicon glyphicon-phone"></i> Mobile Number</td>
//                                                                 <td>88********</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-flag"></i> Nationality</td>
//                                                                 <td>Indian</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-user"></i> Father's Name</td>
//                                                                 <td>Ajay Mall</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="glyphicon glyphicon-phone"></i> Father's Mobile</td>
//                                                                 <td>+91 99********</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-user"></i> Mother's Name</td>
//                                                                 <td>Hemlata Mall</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="glyphicon glyphicon-phone"></i> Mother's Mobile</td>
//                                                                 <td>+91 90********</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-user"></i> Emergency Contact Person</td>
//                                                                 <td>Pawan Mall</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="glyphicon glyphicon-phone"></i> Emergency Contact Person's Mobile</td>
//                                                                 <td>+91 88********</td>
//                                                             </tr>
//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                             <div id="General" className="tab-pane fade">
//                                                 <div className="table-responsive panel">
//                                                     <table className="table">
//                                                         <tbody>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-university"></i> Last School</td>
//                                                                 <td>Pawan Mall's School</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-calendar"></i> Date of Admission</td>
//                                                                 <td>March 4, 2009</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-home"></i> Birth Place</td>
//                                                                 <td>Delhi</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-calendar"></i> Academic Year</td>
//                                                                 <td>2015-2016</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-medkit"></i> Medical Condition</td>
//                                                                 <td>Normal</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="fa fa-thumbs-up"></i> Active/Inactive</td>
//                                                                 <td>Student is Active</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td className="text-success"><i className="glyphicon glyphicon-time"></i> Last Editing</td>
//                                                                 <td>2015-08-20 09:41:56</td>
//                                                             </tr>
//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </body>
//         </>
//     );
// }
// export default Studentdetail;