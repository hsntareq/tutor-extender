(()=>{"use strict";async function s(e,t=!0){document.body.insertAdjacentHTML("beforeend",`<div id="tutor-periscope-loader-wrapper">
        <div class="tutor-periscope-loading">
        </div>
    </div>`);const o=await fetch(tp_data.url,{method:"POST",body:e});return document.getElementById("tutor-periscope-loader-wrapper").remove(),!!o.ok&&(t?o.json():o.text())}const a=wp.i18n["__"];document.addEventListener("DOMContentLoaded",function(){var e;tp_data.should_show_evaluation_form&&(e=`
        <div class="tutor-modal-wrap tutor-quiz-builder-modal-wrap show">
        <div class="tutor-modal-content">
            <div class="modal-header">
                <div class="modal-title">
                    <h1>${a("Please evaluate the course","tutor-periscope")}</h1>
                </div>
                <div class="modal-close-wrap">
                    <a href="javascript:;" class="modal-close-btn"><i class="tutor-icon-line-cross"></i> </a>
                </div>
            </div>
            <div class="modal-container" style="padding:20px;">
                <div class="tutor-periscope-student-course-evaluation-wrapper">
                    <form id="tutor-periscope-evaluation-form">
                        <div class="tutor-form-group mb-3 clearfix">
                            <label class="d-inline-block">
                                ${a("1. Were the course learning objectives met?","tutor-periscope")}
                            </label>
                            <select name="objectives_met" id="" class="tutor-form-control">
                                <option value="agree">${a("Strongly Agree","tutor-periscope")}</option>
                                <option value="agree">${a("Agree","tutor-periscope")}</option>
                                <option value="disagree">${a("Disagree","tutor-periscope")}</option>
                                <option value="neutral">${a("Neutral","tutor-periscope")}</option>
                                <option value="neutral">${a("Strongly Disagree","tutor-periscope")}</option>
                            </select>
                        </div>
                        <div class="tutor-form-group mb-3 clearfix">
                            <label class="d-inline-block">
                                ${a("2. Did course content match course description?","tutor-periscope")}
                            </label>
                            <select name="content_matched" id="" class="tutor-form-control">
                                <option value="agree">${a("Strongly Agree","tutor-periscope")}</option>
                                <option value="agree">${a("Agree","tutor-periscope")}</option>
                                <option value="disagree">${a("Disagree","tutor-periscope")}</option>
                                <option value="neutral">${a("Neutral","tutor-periscope")}</option>
                                <option value="neutral">${a("Strongly Disagree","tutor-periscope")}</option>
                            </select>
                        </div>
                        <div class="tutor-form-group mb-3 clearfix">
                            <label class="d-inline-block">
                                ${a("3. Was current evidence provided to substantiate material presented? ","tutor-periscope")}
                            </label>
                            <select name="material_presented" id="" class="tutor-form-control">
                                <option value="agree">${a("Strongly Agree","tutor-periscope")}</option>
                                <option value="agree">${a("Agree","tutor-periscope")}</option>
                                <option value="disagree">${a("Disagree","tutor-periscope")}</option>
                                <option value="neutral">${a("Neutral","tutor-periscope")}</option>
                                <option value="neutral">${a("Strongly Disagree","tutor-periscope")}</option>
                            </select>
                        </div>
                        <div class="tutor-form-group mb-3 clearfix">
                            <label class="d-inline-block">
                                ${a("4. Were the instructors effective and knowledgeable?","tutor-periscope")}
                            </label>
                            <select name="instructors_effective" id="" class="tutor-form-control">
                                <option value="agree">${a("Strongly Agree","tutor-periscope")}</option>
                                <option value="agree">${a("Agree","tutor-periscope")}</option>
                                <option value="disagree">${a("Disagree","tutor-periscope")}</option>
                                <option value="neutral">${a("Neutral","tutor-periscope")}</option>
                                <option value="neutral">${a("Strongly Disagree","tutor-periscope")}</option>
                            </select>
                        </div>
                        <div class="tutor-form-group mb-3 clearfix">
                            <label class="d-inline-block">
                                ${a("5. Was the virtual learning platform supportive to learning? ","tutor-periscope")}
                            </label>
                            <select name="supportive_learning" id="" class="tutor-form-control">
                                <option value="agree">${a("Strongly Agree","tutor-periscope")}</option>
                                <option value="agree">${a("Agree","tutor-periscope")}</option>
                                <option value="disagree">${a("Disagree","tutor-periscope")}</option>
                                <option value="neutral">${a("Neutral","tutor-periscope")}</option>
                                <option value="neutral">${a("Strongly Disagree","tutor-periscope")}</option>
                            </select>
                        </div>
                        <div class="tutor-form-group mb-3 clearfix">
                            <label class="d-inline-block">
                                ${a("6. Overall, the course was valuable.","tutor-periscope")}
                            </label>
                            <select name="was_valuable" id="" class="tutor-form-control">
                                <option value="agree">${a("Strongly Agree","tutor-periscope")}</option>
                                <option value="agree">${a("Agree","tutor-periscope")}</option>
                                <option value="disagree">${a("Disagree","tutor-periscope")}</option>
                                <option value="neutral">${a("Neutral","tutor-periscope")}</option>
                                <option value="neutral">${a("Strongly Disagree","tutor-periscope")}</option>
                            </select>
                        </div>

                        <div class="tutor-form-group mb-3 clearfix">
                            <label class="d-inline-block">
                                ${a("7. Would you recommend this course to a colleague?","tutor-periscope")}
                            </label>
                            <select name="recommend" id="" class="tutor-form-control">
                                <option value="agree">${a("Strongly Agree","tutor-periscope")}</option>
                                <option value="agree">${a("Agree","tutor-periscope")}</option>
                                <option value="disagree">${a("Disagree","tutor-periscope")}</option>
                                <option value="neutral">${a("Neutral","tutor-periscope")}</option>
                                <option value="neutral">${a("Strongly Disagree","tutor-periscope")}</option>
                            </select>
                        </div>
                        <div class="tutor-form-group mb-3 clearfix">
                            <label class="d-inline-block">
                                ${a("8. Were personal experience and observation the primary source of information? ","tutor-periscope")}
                            </label>
                            <select name="information" id="" class="tutor-form-control">
                                <option value="agree">${a("Strongly Agree","tutor-periscope")}</option>
                                <option value="agree">${a("Agree","tutor-periscope")}</option>
                                <option value="disagree">${a("Disagree","tutor-periscope")}</option>
                                <option value="neutral">${a("Neutral","tutor-periscope")}</option>
                                <option value="neutral">${a("Strongly Disagree","tutor-periscope")}</option>
                            </select>
                        </div>
                        <div class="tutor-form-group mb-3 clearfix">
                            <label class="d-inline-block">
                                ${a("9. Was a commercial product promoted? If yes, did you feel that the product promotion was the sole purpose of the course? ","tutor-periscope")}
                            </label>
                            <select name="product_promoted" id="" class="tutor-form-control">
                                <option value="No">${a("No","tutor-periscope")}</option>
                                <option value="Yes">${a("Yes","tutor-periscope")}</option>
                                <option value="">${a("","tutor-periscope")}</option>
                            </select>
                        </div>
                        <div class="tutor-form-group mb-3 clearfix">
                            <label class="d-inline-block">
                                ${a("10. What topic(s) would you like more training in? Share any additional comments or questions.","tutor-periscope")}
                            </label>
                            <textarea name="comments"></textarea>
                        </div>
                        <div class="tutor-form-group mb-3 clearfix">
                            <button class="tutor-periscope-evaluation-submit-button tutor-button">
                                ${a("Submit","tutor-periscope")}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        </div>
        <style>.nice-select{float:right;}</style>
      `,document.body.insertAdjacentHTML("beforeend",e));const o=document.getElementById("tutor-periscope-evaluation-form"),r=document.querySelector(".tutor-periscope-evaluation-submit-button.tutor-button");r&&(r.onclick=async e=>{e.preventDefault();const t=new FormData(o);t.set("tutor_course_id",tp_data.tutor_course_id),t.set("nonce",tp_data.nonce),t.set("action","tutor_periscope_evaluation"),r.innerHTML=""+a("Please wait...");try{(await s(t)).success?(r.innerHTML=""+a("Thank you for evaluating"),window.location.reload()):alert(a("Evaluate submission failed","tutor-periscope"))}catch(e){alert(e)}})});const n=wp.i18n["__"];async function l(e){if(0<e){const t=new FormData;t.set("content-id",e),t.set("action","tutor_periscope_previous_content_status"),t.set("nonce",tp_data.nonce);e=await s(t);e.success||(e.data.url?(tutor_toast(n("Fail","tutor-periscope"),n("Please complete previous lesson first!","tutor-periscope"),"error"),window.location.href=e.data.url):tutor_toast(n("Fail","tutor-periscope"),n("Previous content status check failed!","tutor-periscope"),"error"))}}document.addEventListener("DOMContentLoaded",async function(){const e=document.querySelectorAll(".tutor-single-lesson-items:not(.active)");e.forEach(e=>{if(!e.querySelector(".tutor-done")){e.style.background="#dddddd";const t=e.querySelector("a");if(null!=t||null!=t){t.setAttribute("class",""),t.style.cursor="not-allowed";const o=t.querySelector(".lesson_title"),r=t.querySelector(".tutor-play-duration"),a=t.querySelector(".quiz-time-limit");o&&(o.style.color="#a4a9b9"),r&&(r.style.color="#a4a9b9"),a&&(a.style.color="#a4a9b9"),t.onclick=e=>{e.preventDefault()}}}});let t=document.getElementById("tutor-single-entry-content");t&&(t.onclick=async e=>{if(e.target.classList.contains("tutor-next-link")){e.preventDefault();const o=e.target.classList[1];var t=o.split("-")[3];const r=new FormData;r.set("next_lesson_id",t),r.set("nonce",tp_data.nonce),r.set("action","tutor_periscope_is_done_current_lesson");t=await s(r);t.success&&t.data.done&&(window.location.href=e.target.href),t.success&&!t.data.done&&alert(n("Please complete current lesson/quiz first to go the next content.","tutor-periscope"))}});const o=document.getElementById("tutor-lesson-sidebar-tab-content");if(o){const a=document.querySelector(".tutor-single-lesson-items.active");if(a){const i=a.querySelector("a");let e=0;i.hasAttribute("data-lesson-id")&&(e=Number(i.getAttribute("data-lesson-id"))),i.hasAttribute("data-quiz-id")&&(e=Number(i.getAttribute("data-quiz-id"))),l(e)}}o&&(o.onclick=e=>{const t=e.target;let o=t;"A"!==o.tagName&&(o=t.closest("a")),o&&(o.hasAttribute("data-lesson-id")&&l(Number(o.getAttribute("data-lesson-id"))),o.hasAttribute("data-quiz-id")&&l(Number(o.getAttribute("data-quiz-id"))))});const r=document.querySelectorAll(".result-fail");r.length&&r.forEach(e=>{if(e){const t=e.closest("tr");if(t){const o=t.querySelector("td:last-child a");o&&(o.removeAttribute("href"),o.style.color="#bdbfc7")}}})});const i=wp.i18n["__"];document.addEventListener("DOMContentLoaded",async function(){const e=document.querySelectorAll(".tutor-periscope-attempt-details");e.forEach(e=>{e.onclick=async e=>{e=e.target.dataset.id;const t=new FormData;t.set("attempt_id",e),t.set("nonce",tp_data.nonce),t.set("action","tutor_periscope_attempt_details");try{var o=await s(t,!1);if(o){const r=document.getElementById("tutor-periscope-attempt-details-wrap");r&&(r.innerHTML=o);const a=document.querySelector(".tutor-periscope-attempt-modal");a&&a.classList.add("show")}else alert(i("Something went wrong, please try again.","tutor-periscope"))}catch(e){alert(e)}}});const t=document.querySelector(".tutor-periscope-pending-approval-list");t&&(t.onclick=async e=>{const t=e.target;e.currentTarget;if("I"===t.tagName&&t.closest("a").click(),"A"===t.tagName&&t.classList.contains("tutor-status-pending-approval")){var o=prompt("Certificate Number (unique & >= 5 Character)");if(5<=o.length){var r=t.dataset.userId,e=t.dataset.courseId;const a=new FormData;a.set("certificate_no",o),a.set("course_id",e),a.set("student_id",r),a.set("nonce",tp_data.nonce),a.set("action","tutor_periscope_allow_to_download_certificate"),(await s(a)).success?(t.classList.contains("tutor-status-pending-approval")&&(t.classList.remove("tutor-status-pending-approval"),t.classList.add("tutor-status-approved-context")),tutor_toast("Success",i("Certificate Download Approval Success!","tutor-periscope"),"success")):tutor_toast("Failed",i("Certificate Download Approval Failed!","tutor-periscope"),"error")}else alert(i("Invalid certificate no","tutor-periscope"))}})})})();