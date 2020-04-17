import makeRequest from '../../../util/api/common/makeRequest';

export const getHealthCheck = () =>
  makeRequest<void>({
    method: 'get',
    url: `health-check`,
  });
