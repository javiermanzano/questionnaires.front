import FileSaver from 'file-saver';
import { download } from './restClient';
import { OK } from 'http-status-codes';

export const downloadFile = async ({ url, name, contentType }) => {
  const { status, data } = await download(url, contentType);
  if (status === OK) {
    FileSaver.saveAs(data, name)
  }
};
