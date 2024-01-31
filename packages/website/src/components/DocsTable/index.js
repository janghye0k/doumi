import { capitalize, isArray, isObject, keys } from 'doumi';
import React from 'react';
import Link from '@docusaurus/Link';

const DocsTable = ({ datas }) => {
  if (!isArray(datas) || datas.length === 0) return null;
  const headers = keys(datas.at(0)).filter((s) => s !== 'link');
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{capitalize(header)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datas.map((data, index) => (
          <tr key={'row' + index}>
            {headers.map((key) => {
              const item = data[key];
              const value = isObject(item) ? (
                <Link to={item.link}>{item.value}</Link>
              ) : (
                item
              );
              return (
                <td key={'col-' + key}>
                  {key === 'type' ? (
                    <code>{value}</code>
                  ) : (
                    value.split('`').map((v, i) => {
                      if (i % 2 === 0) return v;
                      return <code>{v}</code>;
                    })
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DocsTable;
