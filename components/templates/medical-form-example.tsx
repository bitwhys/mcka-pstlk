import { Card, CardContent } from "../ui/card";
import { TemplateWrapper } from "./template-wrapper";

export function MedicalFormExample() {
  return (
    <>
      <TemplateWrapper>
        <div className="mb-4 text-center">
          <h2 className="text-lg font-bold">NEW PATIENT HEALTH HISTORY FORM</h2>
                <p className="mt-2 text-xs">
                  All questions contained in this questionnaire are strictly confidential
                  <br />
                  and will become part of your medical record
                </p>
              </div>

              <div className="mb-4 rounded-md border">
                <table className="w-full text-xs">
                  <tbody>
                    <tr className="border-b">
                      <td className="w-1/4 border-r p-1 font-medium">Name:</td>
                      <td className="w-1/2 border-r p-1">(Last, First, M.I.):</td>
                      <td className="w-1/4 p-1 font-medium">DOB:</td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r p-1 font-medium">Marital status:</td>
                      <td className="border-r p-1" colSpan={2}>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Single</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Partnered</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Married</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Separated</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Divorced</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Widowed</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r p-1 font-medium">Contact Phone:</td>
                      <td className="border-r p-1" colSpan={2}></td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r p-1 font-medium">Address:</td>
                      <td className="border-r p-1" colSpan={2}></td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r p-1 font-medium">Email:</td>
                      <td className="border-r p-1" colSpan={2}></td>
                    </tr>
                    <tr>
                      <td className="border-r p-1 font-medium">Previous or referring Doctor:</td>
                      <td className="border-r p-1"></td>
                      <td className="p-1 font-medium">Date of last physical exam:</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mb-4 text-[10px]">
                <p className="mb-2">
                  <strong>Patient Consent Form / HIPAA Consent Form</strong>
                </p>
                <p className="mb-1">
                  I understand that as part of my healthcare, this practice originates and maintains
                  health records describing my health history, symptoms, examination and test
                  results, diagnoses, treatment, and any plans for future care or treatment.
                </p>
                <p className="mb-1">
                  I understand that this information serves as a basis for planning my care and
                  treatment, a means of communication among the many health professionals who
                  contribute to my care, a source of information for applying my diagnosis and
                  treatment information to my bill, a means by which a third-party payer can verify
                  that services billed were actually provided, and a tool for routine healthcare
                  operations such as assessing quality and reviewing the competence of healthcare
                  professionals.
                </p>
                <p className="mb-1">
                  I understand that I have the right to request restrictions as to how my health
                  information may be used or disclosed to carry out treatment, payment, or
                  healthcare operations and that the organization is not required to agree to the
                  restrictions requested. I understand that I may revoke this consent in writing,
                  except to the extent that the organization has already taken action in reliance
                  thereon.
                </p>
                {/* More consent text would go here */}
              </div>

              <div className="mb-4 rounded-md border">
                <div className="bg-gray-100 p-1 text-center text-xs font-medium">
                  PERSONAL HEALTH HISTORY
                </div>
                <table className="w-full text-xs">
                  <tbody>
                    <tr className="border-b">
                      <td className="w-1/4 border-r p-1 font-medium">Childhood illness:</td>
                      <td className="p-1">
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Measles</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Mumps</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Rubella</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Chickenpox</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Rheumatic Fever</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Polio</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r p-1 font-medium">Immunizations and dates:</td>
                      <td className="p-1">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Tetanus</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Pneumonia</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Hepatitis</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Chickenpox</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Influenza</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>MMR</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r p-1 font-medium">
                        List any medical problems that other doctors have diagnosed:
                      </td>
                      <td className="h-20 p-1"></td>
                    </tr>
                    <tr>
                      <td className="border-r p-1 font-medium">Surgeries:</td>
                      <td className="p-1">
                        <table className="w-full border text-xs">
                          <thead>
                            <tr className="border-b">
                              <th className="w-1/4 border-r p-1">Year</th>
                              <th className="w-2/5 border-r p-1">Reason</th>
                              <th className="p-1">Hospital</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[...Array(5)].map((_, i) => (
                              <tr key={i} className="border-b">
                                <td className="h-6 border-r p-1"></td>
                                <td className="border-r p-1"></td>
                                <td className="p-1"></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
      </TemplateWrapper>

    </>
  )
}
