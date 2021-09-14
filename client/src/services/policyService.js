import { fetch, post, patch } from "../utils/httpUtil";

export const fetchPolicies = async (body) => {
  const policies = await post("policy/search", body);
  let policiesList = [];
  if (policies.data.status === "success") {
    policiesList = policies.data.data.rows.map((policy) => {
      return {
        id: policy?.id,
        policyDate: policy?.date_of_purchase,
        premium: policy?.premium,
        customerId: policy?.Customer?.id,
        customerGender: policy?.Customer?.Gender?.gender,
        customerRegion: policy?.Customer?.Region?.region,
        customerIncomeGroup: policy?.Customer?.IncomeGroup?.group,
        vehicleSegment: policy?.Vehicle?.VehicleSegment?.segment,
        vehicleFuel: policy?.Vehicle?.Fuel?.fuel,
        policyOtherDetails: {
          bodilyInjuryLiability: policy?.bodily_injury_liability,
          collision: policy?.collision,
          comprehensive: policy?.comprehensive,
          personalInjuryProtection: policy?.personal_injury_protection,
          propertyDamageLiability: policy?.property_damage_liability,
        },
      };
    });
  }

  return { rows: policiesList, count: policies?.data?.data?.count || 0 };
};

export const getPolicyDetails = async (id) => {
  return await fetch(`policy/details/${id}`);
};

export const getPolicyReportData = async (region) => {
  let url = `policy/report/month`;
  if(region) url += `?region=${region}`
  return await fetch(url);
};


export const updatePolicyDetails = async (id, body) => {
  return await patch(`policy/update/${id}`, body);
};
